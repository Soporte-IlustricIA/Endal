# REF.DIGITAL — CLON QUIRÚRGICO
# URL original: https://ref.digital/?ref=minimal.gallery
# Inputs: capturas de pantalla adjuntas + análisis de video de 42 frames (41 segundos)

---

## ROL Y OBJETIVO

Eres un frontend engineer de precisión milimétrica. Tu única misión es producir un `index.html` (single-file, con CSS y JS embebidos) que sea visualmente idéntico al sitio ref.digital capturado en las screenshots y video adjuntos. No improvises nada. No uses placeholders genéricos. Todo lo que no puedas extraer del sitio real, lo omites antes que usar algo genérico.

---

## FASE 1 — EXTRACCIÓN DE ASSETS (ejecutar TODO antes de escribir código)

### PASO 1.1 — Descarga el HTML fuente completo
```bash
curl -s -L \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" \
  -H "Accept-Language: en-US,en;q=0.9" \
  -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" \
  -H "Accept-Encoding: gzip, deflate, br" \
  "https://ref.digital/" | gunzip -f 2>/dev/null || curl -s -L "https://ref.digital/" > ref_source.html
```

### PASO 1.2 — Extrae todas las fuentes tipográficas usadas
```bash
grep -oP 'font-family:\s*[^;]+' ref_source.html | sort -u
grep -oP "fonts\.googleapis\.com/css[^'\"]*" ref_source.html
grep -oP "fonts\.gstatic\.com[^'\"]*" ref_source.html
# Identifica cada @font-face y su origen
```

### PASO 1.3 — Extrae paleta de colores exacta
```bash
grep -oP '#[0-9a-fA-F]{3,8}|rgb\([^)]+\)|hsl\([^)]+\)|rgba\([^)]+\)' ref_source.html | sort -u
# Extrae también las CSS custom properties (variables)
grep -oP '--[a-z-]+:\s*[^;]+' ref_source.html | sort -u
```

### PASO 1.4 — Extrae todas las imágenes y sus URLs exactas
```bash
grep -oP 'src="[^"]*\.(jpg|jpeg|png|webp|gif|svg)[^"]*"' ref_source.html
grep -oP "url\(['\"]?[^'\")\s]+['\"]?\)" ref_source.html | grep -v gradient
# También busca en los CSS enlazados
```

### PASO 1.5 — Extrae el CSS principal
```bash
# Descarga los archivos CSS enlazados
grep -oP 'href="[^"]*\.css[^"]*"' ref_source.html | while read -r css; do
  url=$(echo "$css" | grep -oP '"([^"]+)"' | tr -d '"')
  curl -s "https://ref.digital$url" > "$(basename $url)"
done
```

### PASO 1.6 — Extrae las librerías JS usadas
```bash
grep -oP 'src="[^"]*\.js[^"]*"' ref_source.html
# Identifica si usan: GSAP, ScrollTrigger, Lenis, three.js, Locomotive Scroll, etc.
```

### PASO 1.7 — Descarga imágenes del pixel-art de los avatares animados
```bash
# Los pixel-art animados son sprites (bird, airplane, bird-in-flight)
# Busca en: /images/, /assets/, /static/
curl -s "https://ref.digital/" | grep -oP '(bird|crow|plane|pixel)[^"'\'']*\.(gif|png|webp|svg)'
```

---

## FASE 2 — INVENTARIO VISUAL COMPLETO (extraído del análisis de 42 frames de video)

### 2.1 ESTRUCTURA DE SECCIONES (orden top → bottom)

```
[SECTION 1] NAVBAR — fixed, sticky
[SECTION 2] HERO — color beige/arena
[SECTION 3] WORK GALLERY — horizontal scroll con case studies (fondo negro)
[SECTION 4] ABOUT — two-column, beige
[SECTION 5] PIXEL ART ANIMATION — imagen animada en caja amarilla/blanca
[SECTION 6] WORK CTA — "Instead of adapting to change, we shape it."
[SECTION 7] SERVICES GRID — 4 cuadrantes con fotos (fondo blanco)
[SECTION 8] SERVICES DIAGRAM — X diagram sobre fondo beige
[SECTION 9] FOOTER — fondo beige, REF logo gigante abajo
```

---

### 2.2 NAVBAR — Especificaciones exactas

**Layout:** `position: fixed; top: 0; width: 100%; z-index: 999;`
- Fondo: `transparent` (sobre el hero beige)
- Sin borde inferior visible en estado inicial

**Logo REF (top-left):**
- Tipografía: bold condensed, mayúsculas, ~180px de alto en desktop
- Caracteres especiales: la "R" y "E" y "F" tienen bloques negros recortados en esquinas (efecto pixel/checkerboard)
- Color: negro `#000` o muy oscuro
- Posición: `position: absolute; top: 80px; left: 20px;` (sobresale hacia abajo del nav)
- Tamaño aproximado: 280px × 180px

**Links de navegación (centro-derecha):**
- `WORK` | `ABOUT` | `SERVICES` | `CAREERS`
- Fuente: sans-serif pequeña, uppercase, letter-spacing amplio
- Color: `#111` o `#000`
- Peso: `font-weight: 500` o `600`
- Espaciado entre links: ~40px

**Botón CONTACT (top-right):**
- Estilo: outlined button con borde negro fino
- Texto: `CONTACT` en uppercase
- Padding: ~8px 20px
- Border-radius: 0 (cuadrado)

**Ícono asterisco/estrella (extremo derecho):**
- Carácter especial `✳` o SVG de asterisco de 6 puntas
- Dentro de un cuadrado con borde negro
- Tamaño: ~32px × 32px

**Scroll indicator (bottom de la pantalla durante hero):**
- Ticker horizontal: `REF · PCA · 0524` → `REF · PHM · 0524`
- Posición: `position: fixed; bottom: 0; right: 0;`
- Fuente monospace, pequeña
- También aparece el título del case study en bottom-left durante el scrolling horizontal

---

### 2.3 HERO SECTION — Especificaciones exactas

**Fondo:** `background-color: #C4B9A8;` (beige/arena cálido, exactamente este tono)

**Copy:**
- Texto pequeño arriba-derecha: *"Some say move fast, break things. REF is a digital agency that believes we've broken enough things already."*
  - Fuente: ~14px, line-height generoso, max-width ~300px
  - Color: `#222` o `#111`
  - Posición: right-aligned, ~60% desde la izquierda, verticalmente centrado arriba

- Headline principal: **"Move fast, build to last."**
  - Fuente: serif o sans-serif muy grande, ~72-80px
  - Color: `#111` o `#000`
  - Posición: bottom-right del hero, ~60% desde izquierda
  - Font-weight: `400` (no bold — elegante, no agresivo)

**Altura del hero:** 100vh o ~500px

---

### 2.4 WORK GALLERY — Sección con scroll horizontal (fondo negro)

**Fondo:** `background-color: #000` o `#0a0a0a`

**Comportamiento:** scroll horizontal animado — los case studies se deslizan de derecha a izquierda conforme el usuario hace scroll vertical

**Container de cada card:**
- Ancho: ~700px por card
- Altura: ~500px
- Margen lateral: 0 (cards pegadas)
- Overflow: hidden

**Estructura de cada card:**
```
┌─────────────────────────────────────┐
│  [IMAGEN fullbleed del proyecto]    │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

**Case studies vistos en el video (en orden):**
1. **Halo Dental** — fondo oscuro/negro, dental mirror product, "Halo / We All Shine" — color accent: naranja `#E85A1A` o `#FF5500`
2. **CellArt** — fondo blanco/claro, wine cellar products, grid de 3 fotos con labels tipo "Fleur / Mathieu Beauséjour / 6.35 × 4.47 × 1.80 M"
3. **Mission 2035** — fondo azul eléctrico `#1A1AE8` o `#0000DD` profundo, 3D isometric game
4. (otros proyectos visibles en thumbnails del bottom navigation)

**Bottom navigation del gallery:**
- Posición: `position: fixed; bottom: 0;`
- Thumbnails horizontales pequeños (~80px × 50px) del proyecto activo y adyacentes
- Flechas `[←]` y `[→]` a los lados
- Nombre del proyecto en bottom-left: `CellArt`, `Mission 2035`, `Halo Dental`

**Cursor personalizado dentro del gallery:**
- Aparece un label negro `| CASE STUDY VIEW |` que sigue al cursor
- Cuando está sobre links específicos cambia a `| VIEW E-COMMERCE |`, `| VIEW EXPERIENTIAL |`, etc.

---

### 2.5 ABOUT SECTION — Two-column layout

**Fondo:** `#C4B9A8` (mismo beige del hero)

**Layout:**
```
[col izquierda ~50%]          [col derecha ~50%]
• ABOUT (label pequeño)       "We help businesses navigate the
                               digital-first economy
                               with quick wins and long games.
                               
                               Because it's by doing good that
                               we do well."
                               
                               [SEE WHAT REF IS ALL ABOUT →]
```

**Label de sección:**
- `■ ABOUT` — punto cuadrado negro + texto uppercase pequeño
- Color: `#111`
- Font-size: ~11px

**Copy principal:**
- Fuente: serif o sans-serif grande, ~32-40px
- Color: `#111`
- Line-height: 1.3

**CTA Button:**
- Texto: `SEE WHAT REF IS ALL ABOUT`
- Estilo: outlined, borde negro, fondo transparente
- Padding: ~10px 20px
- Font-size: ~11px, uppercase
- Hover: fondo negro, texto blanco (invertido)

**Imagen de pixel art:**
- Posición: abajo-derecha de la sección, dentro de una caja rectangular
- Primera imagen: pájaro/cuervo en vuelo sobre fondo amarillo `#F5F07A` o `#EEED6A`
- Segunda imagen: avión biplano sobre fondo blanco
- Las imágenes son pixel-art animado (GIF o CSS animation) — los sprites se mueven ligeramente
- La caja cambia de fondo: amarillo → blanco → etc. al hacer scroll

---

### 2.6 WORK CTA SECTION

**Fondo:** blanco `#fff` o blanco roto

**Layout:** two-column

```
[col izquierda ~50%]          [col derecha ~50%]
■ WORK                        "Instead of adapting to
                               change, we shape it."
                               
                               [SEE OUR WORK →]
```

**Copy:**
- Fuente grande ~32-40px
- La palabra `it.` al final puede tener un estilo diferente o punto azul

---

### 2.7 SERVICES GRID — 4 cuadrantes con fotos

**Fondo:** blanco `#fff`

**Layout:** grid 2×2 centrado horizontalmente, ~500px de ancho total

**Los 4 cuadrantes contienen imágenes de proyectos:**
- Top-left: monedas de oro (Canadian maple leaf) — proyecto e-commerce
- Top-right: interior con mujer sentada en sofá blanco — lifestyle/mobile
- Bottom-left: dental mirror sobre fondo naranja/rojo — Halo Dental
- Bottom-right: quesos sobre fondo amarillo — food/experiential

**Labels en las esquinas (fuera del grid):**
```
E-commerce          Mobile Apps
[  2×2 image grid  ]
Websites            Experiential
```
- Fuente: serif o elegante, ~24-28px
- Color: `#111`
- Los labels están en los 4 corners exactamente

**Sub-descriptor bajo cada label izquierdo:**
- E-commerce: `DRIVE AND SUSTAIN GROWTH WITH PLATFORMS THAT MEAN BUSINESS.`
- Websites: (similar estilo)
- Fuente: ~10px, uppercase, letter-spacing amplio
- Aparece al hover o siempre visible

**Hover sobre las imágenes:**
- Aparece un cursor/tooltip oscuro con texto como `VIEW E-COMMERCE`, `VIEW EXPERIENTIAL`
- Las imágenes del grid se expanden/revelan más al hover

---

### 2.8 SERVICES DIAGRAM SECTION — "X" diagram

**Fondo:** `#C4B9A8` (beige)

**Copy header:**
- Left: `■ SERV` (label)
- Right: `"At the intersection of strategy and business, tech and design, we'll create your best work yet."`
- CTA: `[SEE OUR CAPABILITIES]`

**Diagrama central:**
- Un asterisco/X formado por líneas finas negras que se cruzan en el centro
- 3 nodos con labels:
  - Top-left: `■ DESIGN` con pixel-art sprite (pájaro/árbol animado)
  - Top-right: `■ STRATEGY & BUSINESS` con pixel-art sprite (otra figura animada)
  - Bottom-left: `■ TECHNOLOGY` con pixel-art sprite (árbol animado)
- Las líneas son delgadas: `stroke: #333; stroke-width: 1px`
- El diagrama ocupa ~70% del ancho de la pantalla
- Las líneas tienen animaciones de trazado (draw-on effect al hacer scroll)
- Los sprites pixel-art están animados (tipo GIF de 3-4 frames, movimiento sutil)

**Dimensiones del diagrama:**
- Los nodos están en posiciones asimétricas (no exactamente equidistantes)
- Centro del X: ligeramente descentrado a la derecha
- Líneas múltiples paralelas (efecto "bundle" de fibras/líneas finas)

---

### 2.9 FOOTER

**Fondo:** `#C4B9A8` (beige, mismo que hero)

**Divisor:** línea horizontal `1px` gris muy fina

**Layout footer (4 columnas):**

```
[col vacía ~40%] | [col nav] | [col social] | [col A/P/E] | [col contact]
```

**Columna navegación:**
```
[ ] WORK
[ ] ABOUT
[ ] SERVICES
[ ] CONTACT
```
- Los `[ ]` son corchetes literales de texto, no checkboxes
- Fuente: ~12px, uppercase

**Columna social:**
```
[ ] INSTAGRAM
[ ] LINKEDIN
[ ] BLUESKY
[ ] AWWWARDS
```

**Columna derecha (labels A, P, E):**
- `A` — dirección: `4051 MOLSON STREET, SUITE 100, MONTREAL, QC, H1Y 3L1`
- `P` — teléfono: `+1 514 281-8901`
- `E` — email: `INFO@REF.DIGITAL`

**Logo REF gigante (bottom):**
- Mismo logotipo que el header pero ~300px de alto, alineado bottom-left
- Mismas características: letras con bloques de cuadros recortados en las esquinas

**Footer bottom bar:**
- `FRANÇAIS` centrado (language toggle)
- Logos: `lg2` | `B Corp Certified` | `SoDa` — alineados bottom-right

---

## FASE 3 — ANIMACIONES Y COMPORTAMIENTOS (mapeados frame por frame)

### 3.1 SCROLL HORIZONTAL DEL WORK GALLERY
```javascript
// Comportamiento: scroll vertical → movimiento horizontal de las cards
// Implementar con GSAP ScrollTrigger o Intersection Observer
// El panel negro "pina" (pin) durante ~3-4 pantallas de scroll vertical
// Las cards se deslizan de derecha a izquierda (translateX negativo)
// Velocidad: suave, con easing ease-out
gsap.to(".work-track", {
  x: () => -(track.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".work-section",
    pin: true,
    scrub: 1,
    start: "top top",
    end: () => `+=${track.scrollWidth}`
  }
});
```

### 3.2 CURSOR PERSONALIZADO (label que sigue al mouse)
```javascript
// Un div negro con texto que sigue exactamente al cursor
// Texto cambia según la zona hover:
// - Sobre work gallery general: "| CASE STUDY VIEW |"
// - Sobre categoría e-commerce: "| VIEW E-COMMERCE |"
// - Sobre categoría experiential: "| VIEW EXPERIENTIAL |"
// Formato exacto: barra | TEXTO | barra
// Fondo: negro #000
// Texto: blanco #fff, ~11px, font monospace o condensed
// Transición entre textos: fade o scroll (el texto se desplaza como un ticker)
// NOTA: el texto aparece haciéndose scroll — efecto de texto que se mueve dentro de la caja
```

### 3.3 PIXEL ART SPRITES ANIMADOS
```
Ubicaciones: About section (box amarilla/blanca), Services Diagram (nodos)
Sprites identificados:
  1. Pájaro/cuervo en vuelo (about section, fondo amarillo) — negro, ~4 frames de animación
  2. Avión biplano (about section, fondo blanco) — grises, ~4 frames
  3. Árbol 1 (nodo DESIGN) — árbol con ramas, ~3 frames de "respiración" o shake
  4. Árbol 2 (nodo TECHNOLOGY) — árbol más pequeño, ~3 frames
  5. Figura 3 (nodo STRATEGY & BUSINESS) — silueta humana o árbol grande

Implementación: GIF animados o CSS @keyframes con background-position (sprite sheet)
Tamaño: ~80px × 80px a ~120px × 120px cada sprite
```

### 3.4 ABOUT SECTION — Caja de pixel art que cambia
```
La caja rectangular del pixel art cambia de:
  - Fondo amarillo (#F5F07A) con cuervo negro volando
  - Fondo blanco (#FFFFFF) con avión biplano
Al hacer scroll, transición suave entre las dos variantes
```

### 3.5 SERVICES DIAGRAM — Líneas animadas
```
Al entrar en viewport:
  - Las líneas del X diagram se "dibujan" desde el centro hacia los nodos
  - Efecto: stroke-dashoffset animation (SVG) o CSS clip-path
  - Duración: ~1.5s por línea
  - Easing: ease-out
  - Los nodos/labels aparecen con fade-in después de que la línea llega

Múltiples líneas paralelas:
  - Cada "línea" es en realidad un bundle de 5-8 líneas muy finas paralelas
  - Color base: #333 o #222
  - Opacidad de las líneas secundarias: 0.2-0.4
```

### 3.6 SMOOTH SCROLL
```javascript
// Usar Lenis (https://lenis.darkroom.engineering/) para smooth scroll
// O implementar con:
import Lenis from '@studio-freight/lenis'
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
})
```

### 3.7 TICKER / MARQUEE BOTTOM
```
Posición: fixed bottom-right
Contenido: "REF · PCA · 0325" → "REF · PHM · 0524" (cambia según el proyecto activo)
Comportamiento: texto estático (no loop), actualiza al cambiar de case study
Fuente: monospace, ~11px
Color: #333
```

### 3.8 SCROLL INDICATOR LABELS (left side)
```
Posición: fixed left, vertical-center
Texto del proyecto actual: "CellArt", "Mission 2035", "Halo Dental"
Fuente: pequeña, ~12px
Aparece solo durante la sección de work gallery
URL del proyecto visible en status bar del browser
```

### 3.9 HOVER STATES DE LOS QUADRANTS (Services Grid)
```
Al hover sobre cualquiera de los 4 cuadrantes:
  - La imagen se escala ligeramente (transform: scale(1.02))
  - Aparece el cursor personalizado con el texto de la categoría
  - El label de la esquina correspondiente se activa (subrayado o cambio de color)
  - Transición: 0.3s ease
```

---

## FASE 4 — TIPOGRAFÍA (extraer nombres exactos del HTML)

**Fuente principal del logo REF:**
- Condensed black, letras cuadradas con bloques recortados
- Probablemente una fuente custom o modificada
- Alternativas cercanas: `Druk Wide`, `Bebas Neue`, o fuente custom SVG

**Fuente de los headlines grandes:**
- *"Move fast, build to last."* — parece sans-serif, weight 400-500, no bold agresivo
- *"We help businesses navigate..."* — misma fuente
- Aproximadamente: `Suisse Int'l`, `GT America`, o similar editorial sans

**Fuente de los labels y nav:**
- Uppercase, pequeña, letter-spacing ~0.1em
- Misma familia o una sans complementaria

**Fuente de los corchetes del footer:**
- Monospace o sans regular

---

## FASE 5 — COLORES EXACTOS

```css
:root {
  --color-beige: #C4B9A8;        /* Hero, About, Services diagram, Footer */
  --color-black: #000000;        /* Logo, textos principales */
  --color-dark: #111111;         /* Textos secundarios */
  --color-white: #FFFFFF;        /* Work section, Services grid */
  --color-gallery-bg: #0a0a0a;   /* Work gallery background */
  --color-blue-electric: #1A1AE0; /* Mission 2035 background */
  --color-orange-accent: #E85A1A; /* Halo Dental accent */
  --color-yellow-sprite: #F5F07A; /* About pixel art box */
  --color-line: #333333;         /* Diagram lines */
  --color-border: #000000;       /* Button borders */
}
```

---

## FASE 6 — DIMENSIONES Y ESPACIADO

```css
/* Contenedor principal */
.container {
  max-width: 100vw;
  padding: 0; /* Sin padding global — el contenido va de edge a edge */
}

/* Secciones */
.section {
  min-height: 100vh;
  width: 100%;
}

/* Work gallery cards */
.card {
  width: 700px;   /* Aproximado */
  height: 500px;
  flex-shrink: 0;
}

/* Servicios grid */
.services-grid {
  width: 500px;        /* Aproximado */
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
}

/* Navbar height */
.nav {
  height: 60px;
  padding: 0 20px;
}

/* Logo REF en navbar */
.logo {
  font-size: clamp(100px, 12vw, 180px);
  line-height: 0.85;
}
```

---

## FASE 7 — DEPENDENCIAS A USAR

```html
<!-- GSAP + ScrollTrigger para scroll horizontal -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Lenis para smooth scroll -->
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>

<!-- Google Fonts (verificar cuáles usa el sitio real) -->
<!-- Extraer del HTML fuente en Fase 1 -->
```

---

## FASE 8 — INSTRUCCIONES FINALES

1. **Ejecuta TODAS las fases de extracción antes de escribir una sola línea de código**
2. **No uses imágenes placeholder** — usa `background-color` con el color exacto del proyecto si no puedes descargar la imagen, o usa `object-fit: cover` con la URL real
3. **Las fuentes tipográficas son críticas** — si no puedes extraer la fuente exacta, busca en Google Fonts la más cercana visualmente a la captura
4. **El logo REF** — si no hay fuente idéntica, recrea las letras con SVG paths dibujando manualmente las formas con los cuadros recortados
5. **Los sprites pixel-art** — descárgalos del sitio real. Si no están disponibles como GIF, recréalos como CSS animation con una simple cuadrícula de píxeles (CSS art)
6. **Prioridad de fidelidad:** Logo > Tipografía > Colores > Animaciones > Imágenes
7. **El resultado debe ser un ÚNICO archivo `index.html`** con todo embebido (CSS en `<style>`, JS en `<script>`)
8. **Testea en Chrome desktop a 1440px de ancho** — el sitio no parece tener diseño mobile prioritario

---

## CHECKLIST DE CALIDAD ANTES DE ENTREGAR

- [ ] Logo REF con los bloques cuadrados recortados, visible en tamaño grande top-left
- [ ] Navbar con WORK / ABOUT / SERVICES / CAREERS / CONTACT / ✳
- [ ] Hero beige (#C4B9A8) con headline "Move fast, build to last."
- [ ] Work gallery con fondo negro, scroll horizontal activado por scroll vertical
- [ ] Al menos 3 case studies simulados (CellArt, Mission 2035, Halo Dental)
- [ ] Cursor personalizado "| CASE STUDY VIEW |" siguiendo al mouse
- [ ] About section two-column con caja de pixel art
- [ ] Services grid 2×2 con los 4 labels en las esquinas
- [ ] Services diagram con X de líneas finas y 3 nodos etiquetados
- [ ] Footer con logo REF grande, links con [ ] corchetes, dirección Montreal
- [ ] Smooth scroll funcionando
- [ ] Ticker REF·PCA·0524 en bottom-right
- [ ] Fondo beige consistente en: hero, about, services diagram, footer
- [ ] Sin bordes redondeados en ningún elemento (todo cuadrado/recto)
- [ ] Tipografía sin serif en labels, potencialmente serif en headlines

---

*Prompt generado con análisis quirúrgico de 42 frames de video + 2 capturas de pantalla de ref.digital*
*URL: https://ref.digital/?ref=minimal.gallery*
