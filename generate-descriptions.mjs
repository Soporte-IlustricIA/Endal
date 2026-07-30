/**
 * Genera descripciones únicas para los 159 productos de Endal usando Google Gemini API.
 * Uso: node generate-descriptions.mjs
 * Requiere: GEMINI_API_KEY en variables de entorno
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent'

const SYSTEM_PROMPT = `Eres el redactor de contenidos de Endal, empresa española especialista en envases de aluminio y plástico para alimentación. Tu tarea es escribir una descripción breve, directa y comercial para la ficha de un producto del catálogo.

REGLAS ESTRICTAS:
- Máximo 2-3 frases cortas
- NUNCA menciones fabricación española, origen español ni nada relacionado con la procedencia
- NUNCA repitas datos que ya aparecen en la tabla técnica del producto: unidades por caja, volumen, medidas en mm, capacidad en ml, etc.
- Cada descripción debe tener personalidad propia aunque el producto sea similar a otro
- Céntrate en el USO REAL del producto: para qué alimentos es ideal, en qué contexto (hostelería, delivery, pastelería, congelados...), qué ventaja práctica tiene
- Tono profesional pero cercano, sin exageraciones ni superlativos vacíos
- No uses "perfecto para", "ideal para" en todas las descripciones — varía el enfoque`

const BATCH_SIZE     = 1
const BATCH_DELAY_MS = 4000
const SESSION_LIMIT  = 50   // máx productos por ejecución (cuota diaria gratuita)

async function generateDescription(apiKey, product, attempt = 0) {
  const userPrompt = `Producto: ${product.categoria}
Referencia: ${product.ref}
Categoría: ${product.categoria}
Atributos técnicos (ya visibles en tabla, NO los repitas): ${JSON.stringify(product.atributos)}

Escribe la descripción del producto para su ficha en el catálogo online.`

  const body = {
    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
    generationConfig: { maxOutputTokens: 256, temperature: 0.9 },
  }

  const res = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (res.status === 429 && attempt < 4) {
    const wait = (attempt + 1) * 3000
    await sleep(wait)
    return generateDescription(apiKey, product, attempt + 1)
  }

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`HTTP ${res.status}: ${err.slice(0, 200)}`)
  }

  const data = await res.json()
  return data.candidates[0].content.parts[0].text.trim()
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function main() {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    console.error('❌ GEMINI_API_KEY no está configurada como variable de entorno.')
    console.error('   Ejecuta: set GEMINI_API_KEY=... (Windows) o export GEMINI_API_KEY=... (Mac/Linux)')
    process.exit(1)
  }

  const inputPath  = join(__dirname, 'endal_fichas_completas.json')
  const outputPath = join(__dirname, 'endal_fichas_con_descripciones.json')

  if (!existsSync(inputPath)) {
    console.error('❌ No se encontró endal_fichas_completas.json')
    process.exit(1)
  }

  const products = JSON.parse(readFileSync(inputPath, 'utf-8'))
  const total    = products.length
  console.log(`📦 ${total} productos encontrados. Iniciando generación con gemini-2.5-flash...\n`)

  // Load partial results if a previous run was interrupted
  let results = []
  const doneRefs = new Set()
  if (existsSync(outputPath)) {
    try {
      results = JSON.parse(readFileSync(outputPath, 'utf-8'))
      results.forEach(r => doneRefs.add(r.ref))
      console.log(`↩️  Retomando: ${results.length} descripciones ya generadas.\n`)
    } catch {
      results = []
    }
  }

  const pending = products.filter(p => !doneRefs.has(p.ref))

  if (pending.length === 0) {
    console.log('🎉 Todos los productos ya tienen descripción. Nada que procesar.')
    process.exit(0)
  }

  const sessionWork = pending.slice(0, SESSION_LIMIT)
  const remaining   = pending.length - sessionWork.length
  console.log(`📋 Pendientes: ${pending.length} | Esta sesión: ${sessionWork.length} | Quedarán: ${remaining}\n`)

  const batches = []
  for (let i = 0; i < sessionWork.length; i += BATCH_SIZE) {
    batches.push(sessionWork.slice(i, i + BATCH_SIZE))
  }

  let processed = results.length

  for (let b = 0; b < batches.length; b++) {
    const batch = batches[b]
    const from  = processed + 1
    const to    = processed + batch.length
    console.log(`⚙️  Procesando ${from}-${to} / ${total}...`)

    const descriptions = await Promise.all(
      batch.map(product =>
        generateDescription(apiKey, product)
          .then(desc => ({ product, desc, ok: true }))
          .catch(err => {
            console.error(`  ⚠️  Error en ref ${product.ref}: ${err.message}`)
            return { product, desc: product.descripcion, ok: false }
          })
      )
    )

    for (const { product, desc } of descriptions) {
      results.push({
        id:                  product.id,
        ref:                 product.ref,
        categoria:           product.categoria,
        atributos:           product.atributos,
        descripcionGenerada: desc,
      })
    }

    // Save after every batch so a crash doesn't lose all progress
    writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8')
    processed += batch.length

    if (b < batches.length - 1) {
      await sleep(BATCH_DELAY_MS)
    }
  }

  const totalDone = results.length
  const totalLeft = total - totalDone
  console.log(`\n✅ Sesión completada: ${totalDone}/${total} productos procesados.`)
  if (totalLeft > 0) {
    console.log(`   ⏭  Vuelve a ejecutar mañana (o con otra cuenta) para los ${totalLeft} restantes.`)
  } else {
    console.log('   🎉 ¡Catálogo completo!')
  }

  // ─── Patch catalogo.ts ─────────────────────────────────────────────────────
  const catalogoPath = join(__dirname, 'src', 'data', 'catalogo.ts')
  if (!existsSync(catalogoPath)) {
    console.warn('⚠️  No se encontró src/data/catalogo.ts — omitiendo actualización.')
    return
  }

  console.log('\n📝 Actualizando src/data/catalogo.ts...')

  let catalogoSrc = readFileSync(catalogoPath, 'utf-8')
  const descByRef = Object.fromEntries(results.map(r => [r.ref, r.descripcionGenerada]))

  let patched = 0
  let skipped = 0

  for (const [ref, desc] of Object.entries(descByRef)) {
    // Match: referencia: "REF", ... descripcion: `...`
    // We use a regex that finds the descripcion backtick string for a specific referencia block.
    // Strategy: find the product entry by referencia, then replace its descripcion value.
    const safeRef = ref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

    // Match a descripcion: `...` that appears after the referencia of interest,
    // before the next referencia definition. Use a non-greedy approach.
    const pattern = new RegExp(
      `(referencia:\\s*"${safeRef}"[^}]*?descripcion:\\s*\`)([^\`]*?)(\`)`,
      's'
    )

    const escapedDesc = desc.replace(/`/g, "'").replace(/\$/g, '\\$')
    const newSrc = catalogoSrc.replace(pattern, `$1${escapedDesc}$3`)

    if (newSrc !== catalogoSrc) {
      catalogoSrc = newSrc
      patched++
    } else {
      skipped++
    }
  }

  writeFileSync(catalogoPath, catalogoSrc, 'utf-8')
  console.log(`✅ catalogo.ts actualizado: ${patched} productos parcheados, ${skipped} no encontrados.`)
}

main().catch(err => {
  console.error('❌ Error fatal:', err)
  process.exit(1)
})
