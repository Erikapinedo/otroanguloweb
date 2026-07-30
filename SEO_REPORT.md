# SEO Audit Report — otroanguloweb.cl
Updated: 2026-07-29 (original: 2026-06-02)

> **Nota:** Este es un reporte actualizado. Los problemas marcados con ~~tachado~~ ya fueron corregidos desde el reporte original de junio 2026. Los nuevos hallazgos están marcados con `[NUEVO]`.

## Summary
- **Pages analyzed:** 9 (index, about-me, portfolio, contact + 5 project pages activos + 2 legacy)
- **Critical issues:** 1 `[NUEVO]`
- **Warnings:** 8 (4 previas resueltas, 4 nuevas)
- **Passed checks:** 30+

---

## Page-by-Page Results

### index.html

#### ✅ Passing
- Title: "Diseñadora UX/UI Chile · B2B & SaaS – Erika Pinedo" (52 chars) ✓
- Meta description: 158 chars, relevante con keywords clave ✓
- OG completo: title, description, image, url, type, locale, site_name, image:width/height ✓
- Twitter Card (`summary_large_image`) completo ✓
- Canonical: `https://otroanguloweb.cl/` ✓
- `lang="es-CL"` en `<html>` ✓
- `robots: index, follow` ✓
- JSON-LD WebSite + Person + OfferCatalog ✓
- Favicon y apple-touch-icon ✓
- Skip link WCAG AA ✓
- H1 único: "Transformo ideas en productos digitales" ✓
- Jerarquía de headings H1→H2→H3→H4 válida ✓
- `loading="lazy"` en imágenes below-the-fold ✓
- `defer` en countup.js ✓
- Duplicados de marquee usan `aria-hidden="true"` + `alt=""` correctamente ✓

#### ⚠️ Warnings
- **[NUEVO] Logos de clientes sin alt text** — 5 imágenes en `#home-logo-section` (`group-9102.svg`, `group-9105.svg`, `group-9104.svg`, `group-164.svg`, `group-9103.svg`) tienen `alt=""`. Los logos de marcas reconocidas son señales de autoridad; deberían identificar a la empresa. Fix: `alt="Logo de [Nombre Empresa]"`.
- **[NUEVO] alt="arrow-icon"** en flecha del botón CTA — no es descriptivo. Usar `alt=""` (decorativa) o `alt="Ir a sobre mí"`.
- ~~No `<link rel="preload">` para hero background~~ (héroe usa CSS, no imagen directa — bajo impacto)
- **hreflang "en" apunta a la misma URL en español** — ver Global Issues.

---

### about-me-erika-pinedo.html

#### ✅ Passing
- Title: "Sobre mí · Diseñadora UX/UI B2B & SaaS Chile – Erika Pinedo" (60 chars) ✓
- Meta description: 154 chars ✓
- OG image específica para esta página (`opengraph-about-me-erika-pinedo.png`) ✓
- Canonical: `https://otroanguloweb.cl/about-me-erika-pinedo` ✓
- JSON-LD ProfilePage + Person ✓
- Alt text descriptivo en foto de perfil ✓
- H1 único: "Erika Pinedo" ✓
- ~~Heading hierarchy H2/H3 en skills/tools~~ — ya corregido, los skills usan `<h3>` ✓

#### ⚠️ Warnings
- **Alt en imágenes de ticker** (4 imágenes de la sección decorativa de íconos):
  - `img-8846-2.webp` → etiqueta "Creativity" — `alt="Ícono de creatividad"` recomendado
  - `img-8849-2.webp` → etiqueta "Innovation - AI" — `alt="Ícono de innovación con IA"` recomendado
  - `img-8850.webp` → etiqueta "Technology" — `alt="Ícono de tecnología"` recomendado
  - `img-8847-2.webp` → sin etiqueta — dejar `alt=""` (decorativo)
- **hreflang "en"** apunta a misma URL en español — ver Global Issues.

---

### portfolio.html

#### ✅ Passing
- Title: "Portafolio · Casos de Estudio UX/UI B2B – Erika Pinedo" (55 chars) ✓ (título anterior era 62 chars — ya corregido)
- Meta description: 152 chars ✓
- OG tags, Twitter Card, canonical, JSON-LD CollectionPage + BreadcrumbList ✓
- H1 único: "Portafolio" ✓
- ~~Heading hierarchy H1→H3~~ — ya corregido, los proyectos usan `<h2>` ✓
- 7 proyectos listados ✓
- BlueSphere, PlayerSnap, MatchMinders, E-xpediente tienen alt text descriptivos ✓

#### ⚠️ Warnings
- **[NUEVO] 3 imágenes de proyectos sin alt text** (`alt=""`):
  - `alessandri-project-erika-pinedo.webp` — tarjeta principal del caso Alessandri
  - `nico-project-erika-pinedo.webp` — tarjeta principal del caso NICO Seguros
  - `parrotfy-project-erika-pinedo.webp` — tarjeta principal del caso Parrotfy
  Estas mismas imágenes **sí tienen alt text** en la sección de proyectos destacados de `index.html` — se puede copiar el mismo texto.
- **hreflang "en"** — ver Global Issues.

---

### contact.html

#### ✅ Passing
- Title: "Contacto · Hablemos de tu Proyecto Digital – Erika Pinedo" (58 chars) ✓
- Meta description: 145 chars ✓
- OG, Twitter Card, canonical, JSON-LD ContactPage ✓
- H1 único: "¿Tienes un proyecto en mente?" ✓

#### ❌ Problema crítico
- **[NUEVO] Formulario sin `<label>` en ningún campo** — los 5 inputs (Nombre, Apellido, Teléfono, Correo, Mensaje) solo tienen `placeholder`. Los placeholders desaparecen al escribir y no son accesibles para lectores de pantalla ni para Google. Fix: añadir `<label for="id">Texto</label>` antes de cada campo. Archivo corregido disponible en `seo-optimized/contact.html`.

#### ⚠️ Warnings
- `alt="arrow-img"` en la flecha del botón de envío — usar `alt=""` (decorativo)
- **hreflang "en"** — ver Global Issues.

---

### project-alessandri.html

#### ✅ Passing
- Title: "AlessandriPI · Diseño UX/UI Plataforma Legal – Erika Pinedo" (60 chars) ✓ (anterior era 65 — ya corregido)
- Meta description: 154 chars con datos concretos (40.000+ clientes, 32 usuarios, 7 sprints) ✓
- `og:type: article` correcto para caso de estudio ✓
- BreadcrumbList JSON-LD ✓
- `<link rel="preload" as="image">` para hero ya presente ✓ (anterior pendiente — ya corregido)
- H1 único: "Rediseño de la plataforma de operaciones jurídicas internas" ✓
- Jerarquía H1→H2→H3 válida ✓
- Imágenes principales con alt text descriptivos ✓

#### ⚠️ Warnings
- **og:image genérica** — usa `opengraph-erika-pinedo.png` en lugar de imagen del proyecto. Crear `opengraph-project-alessandri.png` a 1200×630px desde `images/portfolio/alessandri-project-erika-pinedo.webp`.
- **[NUEVO] Error en JSON-LD**: `"image": "../images/alessandri/nico-seguros-ficha-corresponsal.webp"` — el nombre del archivo menciona "nico-seguros", no el proyecto Alessandri. Verificar si es la imagen correcta.
- **[NUEVO] Imágenes de "Otros Proyectos"** al final de la página tienen `alt=""` — son tarjetas de navegación hacia otros proyectos, deberían describir el proyecto.
- **hreflang "en"** — ver Global Issues.

---

### project-bluesphere.html

#### ✅ Passing
- Title: "BlueSphere · Diseño UX/UI Ciberseguridad – Erika Pinedo" (55 chars) ✓ (anterior era 61 — ya corregido)
- Meta description: 156 chars ✓
- OG tags, Twitter Card, canonical, JSON-LD CreativeWork ✓
- H1 único ✓

#### ⚠️ Warnings
- **og:image genérica** — imagen social genérica. Crear desde `images/portfolio/proyecto-bluesphere.webp`.
- **hreflang "en"** — ver Global Issues.

---

### project-expediente.html

#### ✅ Passing
- Title: "E-xpediente · Diseño UX/UI Legaltech – Erika Pinedo" (52 chars) ✓ (anterior era 61 — ya corregido)
- Meta description: 155 chars ✓
- OG tags, Twitter Card, canonical, JSON-LD ✓
- H1 único ✓

#### ⚠️ Warnings
- **og:image genérica** — crear desde `images/portfolio/expediente-project-erika-pinedo.webp`.
- **hreflang "en"** — ver Global Issues.

---

### project-matchminders.html

#### ✅ Passing
- Title: "MatchMinders · UX/UI Design System Torneos – Erika Pinedo" (57 chars) ✓ (anterior era 64 — ya corregido)
- Meta description: 151 chars ✓
- OG tags, Twitter Card, canonical, JSON-LD CreativeWork ✓
- H1 único ✓
- ~~H2 en approach cards~~ — verificar si ya se corrigió a H3

#### ⚠️ Warnings
- **og:image genérica** — crear desde `images/portfolio/proyecto-matchminder.webp`.
- **hreflang "en"** — ver Global Issues.

---

### project-nico-seguros.html

#### ✅ Passing
- Title: "NICO Seguros · Diseño UX/UI B2B SaaS – Erika Pinedo" (52 chars) ✓
- Meta description: mención de "Most Investable Startup" — social proof sólido ✓
- OG, Twitter, canonical, JSON-LD ✓
- `<link rel="preload">` para hero ya presente ✓ (corregido desde reporte anterior)
- H1 único: "Plataforma de Gestión de Seguros" ✓
- Imagen de lista de pólizas con alt descriptivo ✓

#### ⚠️ Warnings
- **[NUEVO] Múltiples imágenes de UI sin alt text**:
  - `ui-01-nico-erika-pinedo.webp`, `ui-02-nico-erika-pinedo.webp`, `ui-03-nico-erika-pinedo.webp` — pantallas principales de la interfaz, `alt=""`
  - `user-persona-nico-seguros-erika-pinedo.webp` — User Persona (contenido crítico del caso), `alt=""`
  - `10-nico.webp` (colores/sistema visual), `13-nico.webp` (wireframes), `12-nico.webp` (componentes), `14-nico.webp` (landing), `group-1142.webp` (emails) — todos con `alt=""`
- **[NUEVO] Bug HTML en testimonios**: `class=""heading-36""` en todos los `<h3>` de la sección de reseñas — las comillas extras hacen que los elementos no tengan clase aplicada. HTML inválido, aunque los navegadores lo toleran.
- **og:image genérica** — crear desde `images/portfolio/nico-project-erika-pinedo.webp`.
- **hreflang "en"** — ver Global Issues.

---

### project-parrotfy.html

#### ✅ Passing
- Title: "Parrotfy · Diseño UX/UI de ERP para PYMEs – Erika Pinedo" (58 chars) ✓
- Meta description: 160 chars ✓
- OG, Twitter, canonical, JSON-LD ✓
- H1 único ✓

#### ⚠️ Warnings
- **og:image genérica** — crear desde `images/portfolio/parrotfy-project-erika-pinedo.webp`.
- **hreflang "en"** — ver Global Issues.

---

### project-playersnap.html

#### ✅ Passing
- Title: "PlayerSnap · Diseño UX/UI para Deportes – Erika Pinedo" (55 chars) ✓
- Meta description: 153 chars ✓
- OG, Twitter, canonical, JSON-LD ✓
- H1 único ✓

#### ⚠️ Warnings
- **og:image genérica** — crear desde `images/portfolio/playerSnap-project-erika-pinedo.webp`.
- **hreflang "en"** — ver Global Issues.

---

## Problemas Globales

### 1. og:image genérica en todos los proyectos
Todas las páginas de proyecto comparten `opengraph-erika-pinedo.png`. Cuando alguien comparte un caso de estudio en LinkedIn, WhatsApp o Slack, verá la imagen genérica de Erika en lugar de una preview del proyecto. Esto reduce el CTR social significativamente.

**Fix**: Crear 1 PNG de 1200×630px por proyecto. Imágenes fuente disponibles en `images/portfolio/`:
| Proyecto | Fuente sugerida | og:image destino |
|---|---|---|
| AlessandriPI | `alessandri-project-erika-pinedo.webp` | `opengraph-project-alessandri.png` |
| NICO Seguros | `nico-project-erika-pinedo.webp` | `opengraph-project-nico-seguros.png` |
| Parrotfy | `parrotfy-project-erika-pinedo.webp` | `opengraph-project-parrotfy.png` |
| BlueSphere | `proyecto-bluesphere.webp` | `opengraph-project-bluesphere.png` |
| PlayerSnap | `playerSnap-project-erika-pinedo.webp` | `opengraph-project-playersnap.png` |
| MatchMinders | `proyecto-matchminder.webp` | `opengraph-project-matchminders.png` |
| E-xpediente | `expediente-project-erika-pinedo.webp` | `opengraph-project-expediente.png` |

### 2. hreflang "en" apunta a la misma URL en español
Todas las páginas tienen:
```html
<link rel="alternate" hreflang="es" href="https://otroanguloweb.cl/page" />
<link rel="alternate" hreflang="en" href="https://otroanguloweb.cl/page" />
```
Ambos apuntan a la misma URL española. Dado que el sitio usa `translations.js` para cambiar idioma en el mismo URL, esto es técnicamente funcional pero puede generar señales confusas para Google.

**Opciones:**
- **Opción A (recomendada, mínimo cambio):** Eliminar los `<link hreflang="en">` de todas las páginas. Mantener solo `es` y `x-default`. El `<html lang="es-CL">` ya indica el idioma principal.
- **Opción B (futuro):** Si añades URLs `/en/`, actualizar hreflang entonces.

### 3. Logos de clientes sin identificación (index.html)
5 imágenes SVG de logos en `#home-logo-section` tienen `alt=""`. Los logos de marcas reconocidas (como Banco Falabella, Alessandri, etc.) son señales de autoridad visual. Para SEO, Google no puede leer SVG como imágenes con contexto sin alt text.

**Fix en `seo-optimized/index.html`**: Identificar cada logo por su nombre de empresa y añadir `alt="Logo de [Empresa]"`.

---

## Quick Wins — Prioridad

| Prioridad | Fix | Impacto | Esfuerzo |
|---|---|---|---|
| 🔴 1 | Añadir `<label>` al formulario de contacto | Accesibilidad + Core Web Vitals | 15 min |
| 🟠 2 | Alt text en imágenes de portfolio.html | SEO de imágenes | 5 min |
| 🟠 3 | Alt text en imágenes UI de NICO Seguros | SEO de imágenes | 10 min |
| 🟡 4 | Alt text en logos de clientes (index.html) | Autoridad + SEO | 10 min |
| 🟡 5 | Eliminar hreflang "en" duplicado (todas las páginas) | Señales de idioma | 30 min |
| 🟢 6 | Crear og:images únicas por proyecto | CTR en redes sociales | 2-4 horas |

---

## Archivos generados en `seo-optimized/`

| Archivo | Cambios aplicados |
|---|---|
| `contact.html` | Labels añadidos a los 5 campos del formulario; alt corregido en flecha |
| `portfolio.html` | Alt text añadido a 3 imágenes de proyectos (Alessandri, NICO, Parrotfy) |
| `project-nico-seguros.html` | Alt text añadido a 9 imágenes de UI y User Persona |
| `index.html` | Alt text añadido a logos de clientes; arrow alt corregido |
| `sitemap.xml` | lastmod actualizado a 2026-07-29 |

**Nota sobre og:image**: Requiere crear nuevas imágenes PNG (1200×630px) en Figma/Photoshop. No se puede automatizar. Ver tabla en Global Issues.
