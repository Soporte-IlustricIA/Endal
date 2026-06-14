import sharp from 'sharp'
import { readdir, unlink } from 'fs/promises'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const PUBLIC = resolve(__dirname, '../public')

const RENAME_MAP = {
  'Envase de lasaña 5590 con tapa de cartón o de PVC lista para el microondas 👅😍 #envasedealumini.jpg': 'bandeja-lasana.webp',
  'Los profesionales que han estado trabajando durante estos 43 años son la columna vertebral de la.jpg': 'equipo-endal-1.webp',
  'Los profesionales que han estado trabajando durante estos 43 años son la columna vertebral de la (1).jpg': 'equipo-endal-2.webp',
  'Papel vegetal de uso doméstico de 8m y 15m. ♻️·Posibilidad de personalización de estuches con el.jpg': 'papel-vegetal-1.webp',
  'Papel vegetal de uso doméstico de 8m y 15m. ♻️·Posibilidad de personalización de estuches con el (1).jpg': 'papel-vegetal-2.webp',
  'Tenemos el mejor equipo en la plantilla de ENDAL. Hay empleadas que llevan más de 30 años con no.jpg': 'equipo-endal-3.webp',
  '«Dales calidad. Ese es el mejor tipo de publicidad.» Milton Hershey. •42 años de experiencia fab.jpg': 'fabrica-endal.webp',
  '•bobinas de aluminio industrial del peso que deseas.-Desde 1.2kg hasta 3kg. ♻️.jpg': 'bobinas-aluminio.webp',
}

for (const [original, newName] of Object.entries(RENAME_MAP)) {
  const src  = join(PUBLIC, original)
  const dest = join(PUBLIC, newName)
  try {
    await sharp(src)
      .webp({ quality: 85 })
      .toFile(dest)
    await unlink(src)
    console.log(`✓ ${original}\n  → ${newName}`)
  } catch (err) {
    console.error(`✗ ${original}\n  ${err.message}`)
  }
}

console.log('\nDone.')
