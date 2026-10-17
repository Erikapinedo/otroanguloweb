# Limpieza y optimización · clases y buenas prácticas

Sesión del 2026-10-16. 28 commits desde `90843fd` hasta `c6a3e2b`.

Alcance: 4 bloques de auditoría + remediación sobre un sitio estático con origen Webflow, i18n propia y GSAP.

---

## Bloque 1 · Código muerto

### Hecho
- Añadidas `services.brandingBody` y `services.presentationsBody` (ES/EN) — arreglaban traducciones vacías en `seo-optimized/index.html`.
- Eliminadas 26 claves i18n sin consumidor (6 `*.knowMore` de project pages + 20 `matchmindersProjectPage.flow*`).
- Marcadas 15 claves i18n ambiguas con `// TODO:` en `translations.js` (pendientes de decisión caso por caso).
- Borrado `assets/js/vip-animations.js` + su `<script>` en `sobre-mi.html` (observaba `.vip-card--anim` inexistente).
- Borrado `assets/js/webflow.224e6f72…js` (303 KB, sin referencias).
- Borrados `images/Matchminder/bg-matchminder.png` + `interfaz-matchmionders.png` (~15 MB; sólo se usan las `.webp`).
- Borrado `assets/fonts/Minecraft.ttf` (sin `@font-face`).
- Barridos 8 `.DS_Store` sueltos.

### Commits
- `90843fd` Limpieza: i18n keys faltantes + código muerto

### Pendiente
- **15 claves i18n con `// TODO:`** en `translations.js`. Requieren tu decisión: cablear en HTML o borrar. Grep: `grep -n "// TODO:" translations.js`.

---

## Bloque 2 · Optimización

### Hecho
- `seo-optimized/project-matchminders.html`: 5 PNG → WebP (~6.5 MB en red). Borrados los 5 PNG huérfanos resultantes (~7.1 MB en disco).
- `seo-optimized/*.html` (11 páginas) alineadas con el patrón de carga de la raíz:
  - `preconnect` + `dns-prefetch` + Contentsquare + GTM
  - `main.css`/`theme-*.css`/`fonts.css` → `.min.css` con `media="print" onload`
  - **Bug reparado**: `href="assets/theme-*.css"` (404 en prod) → `../assets/theme-*.min.css`
  - Preload de 2 woff2 + hero image per-page + `fetchpriority="high"` en 7 páginas
- `fetchpriority="high"` al `<img>` del logo intro en `index.html:285`.
- Dedupe CSS: `.paragraph-28-copy-copy-copy-copy`, `.heading-41-copy-copy-copy-copy`, `.descp-copy`. Merge `.paragraph-24` + `.paragraph-24-copy` en selector-list.

### Commits
- `8e59b38` PNG → WebP en project-matchminders
- `7d6335c` Alinea seo-optimized/ con el patrón de la raíz
- `d7b74a1` Fetchpriority hero intro + dedupe CSS

### Pendiente (fase posterior)
- Reorganizar `@media` fragmentadas en `main.css` (59 bloques dispersos).
- Extraer scripts inline comunes (Lenis init, GSAP triggers repetidos) a archivo compartido.
- Consolidar `.image-52-copy*`, `.button-white-2-copy*`, `.paragraph-30-copy*` (variantes copy que difieren por 1-2 props).

---

## Bloque 3 · Buenas prácticas (A11y + SEO + Semántica + Seguridad)

### Hecho
- **A11y**: 5 `<label class="sr-only">` en formulario de `contacto.html` + definición `.sr-only` central en `main.css`.
- **A11y**: `title="Google Tag Manager"` en 27 iframes `<noscript>` GTM.
- **A11y**: alt sin em dash en `proyectos/bluesphere.html` + espejo seo-optimized.
- **A11y**: `index.html:418` `<h2 style="display:none">` → `class="sr-only"`.
- **Seguridad**: `rel="noopener noreferrer"` en 3 enlaces sociales (Behance, Instagram, LinkedIn) en `components/footer.html`.
- **SEO**: Canonicals de `seo-optimized/*.html` apuntan a slugs ES finales (`/sobre-mi`, `/proyectos`, `/proyectos/<slug>`) en vez de slugs que `vercel.json` 301-redirige. Afecta `canonical`, `og:url`, schema.org `@id`/`url` y breadcrumbs. 84 URL swaps en 10 archivos.
- **SEO**: Eliminado `hreflang="en"` de 15 HTMLs + 2 sitemaps (45 entradas). Se mantiene `hreflang="es"` + `hreflang="x-default"`.
- **Semántica**: `<div|section id="main-content" role="main">` → `<main id="main-content">` en 27 archivos. Eliminado `role="main"` redundante.

### Commits
- `65aff41` A11y + seguridad pack
- `df2fcf0` SEO canonicals + hreflang=en removal
- `510915d` Semántica `<main>`
- `28f942f` `.sr-only` central + h2 oculto accesible

### Pendiente (baja prioridad)
- **Navbar `<nav>` anidado** en `components/navbar.html`. Técnicamente permitido por WHATWG + aria-labels los distinguen. Cambiar los internos a `<div>` requiere test con Webflow runtime (IX2).
- **18 `onclick`/`onmouseover` inline** en botones "Volver" de proyectos. Valen la pena sólo si endureces CSP (`script-src 'self'`).
- **SRI** en `unpkg.com/@phosphor-icons/web@2.1.1` (3 páginas: jschile, portalpehuen, urbana). Versión pinned → candidato ideal.

---

## Bloque 4 · Renombrado Webflow

### Hecho
Renombrados ~145 clases Webflow-generated por nombres descriptivos. ~1550 ocurrencias actualizadas a través de HTML, CSS, inline `<style>`, inline `<script>` (GSAP triggers, attribute selectors), y `translations.js`/`.min.js`.

**0 clases numeradas Webflow-generated quedan en HTML.**

Resumen de familias migradas:

| Familia | Ejemplo original | Ejemplo nuevo |
|---|---|---|
| CTA | `.c2a-button-copy` | `.cta-button` |
| CTA label | `.text-block-5-copy` | `.cta-button-label` |
| About skills | `.heading-41`, `.paragraph-28-copy-copy` | `.about-skill-title`, `.about-skill-desc` |
| About education | `.heading-41-copy-copy`, `.paragraph-28-copy-copy-copy-copy` | `.about-edu-label`, `.about-edu-body` |
| About memoji | `.image-40` | `.about-memoji` |
| About count | `.div-block-190`, `.div-block-194` | `.about-count-item`, `.about-count-badge` |
| Project templates | `.flex-block-7`, `.div-block-245`, `.heading-44`, `.image-45` | `.project-back-row`, `.project-hero-content`, `.project-hero-h1`, `.project-card-icon` |
| Project sections | `.div-block-239`, `.div-block-244`, `.image-47` | `.project-section-header`, `.project-section-card`, `.project-section-image` |
| Testimonials | `.heading-36`, `.paragraph-26`, `.image-53`, `.flex-block-3` | `.testimonial-name`, `.testimonial-quote`, `.testimonial-avatar`, `.testimonial-slide` |
| Contact | `.section-11`, `.heading-29`, `.paragraph-29` | `.contact-main`, `.contact-heading`, `.contact-subheading` |
| Footer | `.grid-19`, `.container-15`, `.text-block-32`, `.link-block-4` | `.footer-top-row`, `.footer-bottom-container`, `.footer-tagline`, `.footer-link` |
| Navbar | `.div-block-47`, `.div-block-29`, `.image-31`, `.image-9` | `.site-nav`, `.navbar-inner`, `.navbar-brand-logo`, `.navbar-close-icon` |
| Containers | `.container-4/12/17/19/21` | `.about-count-container`, `.final-cta-container`, `.contact-container`, `.home-logos-container`, `.vip-projects-container` |
| Bold/italic text | `.bold-text-9`, `.italic-text-2` | `.project-context-display`, `.project-hero-emphasis` |

**Bug grave reparado**: `proyectos/nico-seguros.html` tenía 32 atributos con comillas tipográficas (U+201C/U+201D) rodeando valores (`class="”heading-36”"`, `data-i18n="”nicoProjectPage.r1name”"`). Clases no aplicaban + i18n no resolvía en la sección completa de testimonios. Fix: 64 chars eliminados.

**Limpieza colateral**:
- 94 reglas CSS huérfanas eliminadas tras los renombres (~28 KB combinados): `.waves-*`, `.mm-flows-*`, `.vip-card__{body,client,desc,title}`, `.container-urbana-*`, `.div-block-{212,218,...}`, etc.
- 16 comentarios `<!-- Last Published: ... -->` eliminados.

### Commits (15)
- `5ee9c0b` Smart quotes nico-seguros + Last Published
- `47e0bd3` CTA sin base
- `8fdad9c` Familias heading-41 + paragraph-28
- `5930ef3` Templates proyectos (295 occ.)
- `8a4405d` Context × 8
- `6ad6835` Batch mayor × 19
- `0acd895` Footer + testimonios + about × 9
- `b5ae6f6` Footer + containers + sections × 15
- `303a549` project-section-* × 4
- `1f53cdd` Puntuales × 4
- `a1d6fca` about-card-icon + impact × 3
- `3d1a724` footer + navbar + about-hero × 10
- `07de33a` Baja: navbar internals + singletons × 20
- `d57fc3e` image-* families × 10
- `90a42e9` div-block-232 + orphan vip-card__img-wrap
- `c777161` bold-text / italic-text / list-5 × 15
- `c6a3e2b` Limpieza CSS huérfanas × 94

### Pendiente

**🟡 `w-*` layout classes (riesgo medio, requiere QA visual)**

Candidatos de rename:
- `.w-container` (163 usos). **ATENCIÓN**: `webflow.schunk.a77c58ba*.js` tiene `h.find(".w-container")` en init del navbar (`g.container = h.find(".w-container")`). Renombrar sin reemplazar el bundle rompe el navbar.
- `.w-layout-grid`, `.w-layout-hflex`, `.w-layout-vflex`, `.w-layout-blockcontainer` (164 usos). NO leídas por runtime, pero reciben display defaults del reset block.
- `.w-inline-block` (18 usos). Reset block.
- `.w-list-unstyled`. Reset block (list-style:none).
- `.w-button`. Reset block.

Procedimiento sugerido:
1. Para cada clase, identificar su rule en el reset block Webflow (al inicio de `main.css`, bloque `.w-*`).
2. Renombrar HTML + CSS simultáneamente en el mismo commit.
3. QA visual en todas las páginas antes de pasar a la siguiente.
4. **`.w-container` DEBE quedar como está** (runtime depende de él).

**🔴 Runtime (nunca sin reemplazar JS)**
- `w-nav`, `w-nav-brand`, `w-nav-button`, `w-nav-link`, `w-nav-menu`
- `w-dropdown`, `w-dropdown-toggle`, `w-dropdown-list`, `w-dropdown-link`
- `w-form`, `w-form-done`, `w-form-fail`
- `w-slider`, `w-slide`, `w-slider-mask`, `w-slider-nav`, etc.
- `w-tabs`, `w-tab-pane`, `w-tab-link`
- `w--current`, `w--open`, `w--nav-*-open` (toggles del runtime)
- `w-widget` (badge Webflow)
- `data-w-id` (173 ocurrencias, 81 GUIDs únicos leídos por IX3)
- `data-wf-site`, `data-wf-page`, `data-wf-domain` (en `<html>`)
- `data-wf-page-id`, `data-wf-element-id` (en `<form>`)
- Boot `<script>` inline `w-mod-js` + `<style>` anti-FOUC `w-mod-ix3`

---

## Fixes de regresión (sobre fin de sesión)

### Font Instrument Serif se perdió en proyectos

**Causa**: Las strings `data-i18n-html` en `translations.js` tenían HTML inline con clases viejas (`italic-text-2`, `bold-text-9`, etc.) que se inyectan en runtime. Mi script de renombres sólo tocaba `*.html` + `main.css`/`.min.css`. Las clases ya no existían en CSS → el font-family caía a Inter heredado.

**Fix**: 168 refs actualizadas en `translations.js` + `translations.min.js`.
- Commit `b364cac`

### FOUT persistente post-fix

**Causa 1**: Los woff2 de Instrument Serif no estaban precargados. Browser pedía la fuente tarde.
**Fix 1**: 2 `<link rel="preload">` para italic Latin + normal Latin en los 27 HTMLs.
- Commit `fe1fc3d`

**Causa 2 (real)**: `fonts.css` carga deferido (`media="print" onload`). El browser no sabía que debía usar Instrument Serif hasta que `fonts.css` terminaba. Primer paint con fallback → re-paint con Instrument = flash visible.
**Fix 2 (real)**: `@font-face` de Instrument Serif inlineado en `<style>` del `<head>` de los 27 HTMLs, antes de los preloads. Primer paint ya conoce la fuente.
- Commit `2794f53`

### Aprendizaje para próximos renombres

Al renombrar clases, el scope del script DEBE incluir siempre:
1. `**/*.html` (atributos `class` + inline `<style>` + inline `<script>`)
2. `assets/css/main.css` + `main.min.css`
3. **`translations.js` + `translations.min.js`** (contienen HTML inyectable con class attributes)
4. Verificar `assets/theme-1.min.css` si quedan refs legacy ahí (theme pixel/8-bit)

Word boundary regex: `r'\b' + re.escape(old) + r'(?![-\w])'` captura HTML `class="..."`, CSS `.foo`, JS `".foo"`, y attribute selectors `[class*="foo"]`.

---

## Pendiente total (por prioridad)

### Alta prioridad
1. **15 TODOs i18n ambiguos** en `translations.js` (requiere tu decisión).
2. **`.w-container` runtime**: dejar como está. Documentado arriba.

### Media prioridad
3. **`.w-layout-*`, `.w-inline-block`, `.w-list-unstyled`, `.w-button`** renames (requieren migrar reset block + QA visual).

### Baja prioridad
4. Navbar `<nav>` anidado.
5. 18 `onclick`/`onmouseover` inline (CSP).
6. SRI en phosphor-icons.
7. Reorganizar `@media` en `main.css` (59 bloques dispersos).
8. Extraer inline `<script>` Lenis+GSAP comunes a archivo compartido.
9. Consolidar `-copy` variantes restantes que difieren por 1-2 props.

---

## Comandos útiles para resumir estado

```bash
# Ver todos los commits de la sesión
git log --oneline 90843fd~1..c6a3e2b

# Contar clases numeradas Webflow-generated restantes en HTML
python3 -c "
import re, pathlib, glob
pats = [r'div-block-\d+', r'section-\d+', r'container-\d+', r'heading-\d+',
        r'paragraph-\d+', r'text-block-\d+', r'image-\d+', r'flex-block-\d+',
        r'grid-\d+', r'list-item-\d+', r'list-\d+', r'link-block-\d+',
        r'bold-text-\d+', r'italic-text-\d+']
total = 0
for p in glob.glob('**/*.html', recursive=True):
    txt = pathlib.Path(p).read_text(encoding='utf-8')
    for m in re.finditer(r'class=\"([^\"]*)\"', txt):
        for cls in m.group(1).split():
            if any(re.fullmatch(pat, cls) for pat in pats):
                total += 1
print(total)
"

# TODOs i18n pendientes
grep -n "// TODO:" translations.js

# Validar sync main.css ↔ main.min.css
diff <(grep -oE "\.[a-zA-Z_][a-zA-Z0-9_-]*" assets/css/main.css | sort -u) \
     <(grep -oE "\.[a-zA-Z_][a-zA-Z0-9_-]*" assets/css/main.min.css | sort -u)
```
