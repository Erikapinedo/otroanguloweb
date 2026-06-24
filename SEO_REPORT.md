# SEO Audit Report — otroanguloweb.cl
Generated: 2026-06-02

## Summary
- **Pages analyzed:** 10 (index, about-me, portfolio, contact + 6 project pages)
- **Critical issues:** 0
- **Warnings:** 9
- **Passed checks:** 21

---

## Page-by-Page Results

### index.html

#### ✅ Passing
- Title: "Diseñadora UX/UI Chile · B2B & SaaS – Erika Pinedo" (51 chars)
- Meta description: 155 chars, compelling and relevant
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type` all present
- `og:locale`, `og:site_name`, `og:image:width/height` present
- Twitter Card (`summary_large_image`) complete
- Canonical: `https://otroanguloweb.cl/` — correct
- `lang="es-CL"` on `<html>` ✓
- `robots: index, follow` ✓
- JSON-LD WebSite schema present
- Favicon and apple-touch-icon ✓
- Skip navigation link (WCAG AA) ✓
- H1: "Transformo ideas en productos digitales" — one, unique, keyword-relevant
- Heading hierarchy: H1 → H2 → H3 → H4 — valid
- All images use `loading="lazy"` ✓
- `countup.js` loaded with `defer` ✓

#### ⚠️ Warnings
- **No `<link rel="preload">`** for the hero background image (`fondo-oscuro-hero.webp`). Browser discovers it late via CSS, delaying LCP.
- **4 render-blocking CSS files** in `<head>` (`main.css`, `fonts.css`, `theme-1.css`, `theme-selector.css`, `lenis.css`). `theme-selector.css` (UI theme toggle) could potentially be deferred as it isn't needed for first paint.
- **hreflang**: Both `hreflang="es"` and `hreflang="en"` point to the same URL. Since the site serves both languages at the same URL via JavaScript, Google may treat this as a misconfiguration. See [Global Issues](#global-issues).

---

### about-me-erika-pinedo.html

#### ✅ Passing
- Title: "Sobre mí · Diseñadora UX/UI B2B & SaaS Chile – Erika Pinedo" (60 chars) ✓
- Meta description: 150 chars ✓
- All OG and Twitter Card tags present and correct ✓
- Dedicated OG image: `opengraph-about-me-erika-pinedo.png` ✓
- Canonical: `https://otroanguloweb.cl/about-me-erika-pinedo` ✓
- JSON-LD ProfilePage schema with Person entity ✓
- Profile photo alt text: descriptive and excellent ("Mujer joven con cabello rizado largo y oscuro, sonriendo, con aretes dorados y camiseta negra, fondo rosa.") ✓
- H1: "Erika Pinedo" — one, correct ✓

#### ⚠️ Warnings
- **Heading hierarchy — skills/tools section**: The 12 individual skill labels and 3 tool category labels use `<h2>` while already nested under a section `<h2>` heading ("Mis habilidades", "Mis herramientas"). These should be `<h3>`.
  Affected lines (approx.): 395, 404, 413, 422, 431, 440, 449, 458, 465, 472, 481, 490, 522, 533, 545.
- **Missing alt on ticker images**: 4 images used alongside text labels have empty `alt=""`:
  - `img-8846-2.webp` → label "Creativity" — suggest `alt="Ícono de creatividad"`
  - `img-8849-2.webp` → label "Innovation - AI" — suggest `alt="Ícono de innovación con IA"`
  - `img-8850.webp` → label "Technology" — suggest `alt="Ícono de tecnología"`
  - `img-8847-2.webp` → (unlabeled) — suggest `alt=""`  or `alt="Elemento decorativo"`
- **No `<link rel="preload">`** for hero background image.
- **hreflang**: Same issue as all pages (see Global Issues).

---

### portfolio.html

#### ✅ Passing
- Meta description: 151 chars ✓
- All OG tags, Twitter Card, canonical, JSON-LD CollectionPage schema ✓
- H1 present: "Portafolio" ✓
- 7 project cards — all 7 projects listed ✓

#### ⚠️ Warnings
- **Title is 62 chars** (recommended max: 60): "Portafolio UX/UI · Casos de Estudio B2B y SaaS – Erika Pinedo". Suggested: "Portafolio · Casos de Estudio UX/UI B2B – Erika Pinedo" (54 chars)
- **Heading hierarchy skips H2**: Structure goes H1 → H3 (project names) → H4 (project subtitles). There is no H2 between the page H1 and the project card headings. Fix: promote H3 → H2 for project names and H4 → H3 for subtitles.
- **hreflang** same-URL issue (see Global Issues).

---

### contact.html

#### ✅ Passing
- Title: "Contacto · Hablemos de tu Proyecto Digital – Erika Pinedo" (57 chars) ✓
- Meta description: 143 chars ✓
- All OG/Twitter/canonical/JSON-LD ContactPage schema present ✓
- H1: "¿Tienes un proyecto en mente?" — one, engaging ✓
- No images to audit ✓
- **hreflang** same-URL issue (see Global Issues).

---

### project-alessandri.html

#### ✅ Passing
- Meta description: 150 chars ✓
- All OG tags present, `og:type: article` correct for case study ✓
- BreadcrumbList JSON-LD schema ✓
- Canonical correct ✓
- H1 present, descriptive ✓
- Heading hierarchy H1 → H2 → H3 → H4 — valid ✓
- `defer` on countup.js ✓

#### ⚠️ Warnings
- **Title is 65 chars**: "Alessandri PI · Rediseño UX/UI de Plataforma Legal – Erika Pinedo". Suggested: "AlessandriPI · Diseño UX/UI Plataforma Legal – Erika Pinedo" (59 chars)
- **Generic `og:image`**: Uses the shared `opengraph-erika-pinedo.png` instead of a project-specific image. Creating a 1200×630 PNG from the existing `images/portfolio/alessandri-project-erika-pinedo.webp` would significantly improve click-through from social shares.
- **No preload** for hero background `bg-alessandri.webp` (used via CSS).

---

### project-bluesphere.html

#### ✅ Passing
- All OG tags, Twitter Card, canonical, JSON-LD CreativeWork schema ✓
- H1 present, memorable ("Protege más. Preocúpate menos.") ✓
- `defer` on countup.js ✓

#### ⚠️ Warnings
- **Title is 61 chars**: "BlueSphere · Diseño UX/UI Ciberseguridad Cloud – Erika Pinedo". Suggested: "BlueSphere · Diseño UX/UI Ciberseguridad – Erika Pinedo" (55 chars)
- **Generic `og:image`**: Should be project-specific. Source image available: `images/portfolio/bluesphere-p-1080.webp`
- **No preload** for hero background `bg-bluesphere.webp`.

---

### project-expediente.html

#### ✅ Passing
- All OG tags, Twitter Card, canonical, JSON-LD schema ✓
- H1 present ✓
- `defer` on countup.js ✓

#### ⚠️ Warnings
- **Title is 61 chars**: "E-xpediente · Diseño UX/UI Plataforma Legaltech – Erika Pinedo". Suggested: "E-xpediente · Diseño UX/UI Legaltech – Erika Pinedo" (51 chars)
- **Generic `og:image`**: Should be project-specific. Source image: `images/portfolio/expediente-project-erika-pinedo.webp`
- **No preload** for hero background `bg-expediente.webp`.

---

### project-matchminders.html

#### ✅ Passing
- All OG tags, Twitter Card, canonical, JSON-LD CreativeWork schema ✓
- H1 present ✓
- `defer` on countup.js ✓

#### ⚠️ Warnings
- **Title is 64 chars**: "MatchMinders · UX/UI y Design System para Torneos – Erika Pinedo". Suggested: "MatchMinders · UX/UI Design System Torneos – Erika Pinedo" (57 chars)
- **Heading hierarchy — approach section**: Three "El Enfoque" approach cards (lines ~376–396) use `<h2 class="head-card-approach-mm">` while their container section is already an `<h2>`. Should be `<h3>`.
- **Generic `og:image`**: Should be project-specific. Source image: `images/portfolio/matchminder-p-1080.webp`
- **No preload** for hero background (CSS-based).

---

### project-nico-seguros.html

#### ✅ Passing
- Title: "NICO Seguros · Diseño UX/UI B2B SaaS – Erika Pinedo" (51 chars) ✓
- Meta description with award mention ("Most Investable Startup") — strong social proof ✓
- All OG, Twitter, canonical, JSON-LD present ✓
- H1 present ✓
- `defer` on countup.js ✓

#### ⚠️ Warnings
- **Generic `og:image`**: Should be project-specific. Source image: `images/portfolio/nico-project-erika-pinedo.webp`
- **No preload** for hero background `bg-nico.webp`.

---

### project-parrotfy.html

#### ✅ Passing
- Title: "Parrotfy · Diseño UX/UI de ERP para PYMEs – Erika Pinedo" (57 chars) ✓
- All meta, OG, Twitter, canonical, JSON-LD present ✓
- H1 present ✓

#### ⚠️ Warnings
- **Generic `og:image`**: Should be project-specific. Source image: `images/portfolio/parrotfy-project-erika-pinedo.webp`
- **No preload** for hero background `bg-parrotfy.webp`.

---

### project-playersnap.html

#### ✅ Passing
- Title: "PlayerSnap · Diseño UX/UI para Deportes – Erika Pinedo" (55 chars) ✓
- All meta, OG, Twitter, canonical, JSON-LD present ✓
- H1 present ✓

#### ⚠️ Warnings
- **Generic `og:image`**: Should be project-specific. Source image: `images/portfolio/playerSnap-project-erika-pinedo.webp`
- **No preload** for hero background `bg-playersnap.webp`.

---

## Global Issues

### 1. Generic `og:image` on all 7 project pages
All project pages share `opengraph-erika-pinedo.png`. When someone shares a project case study on LinkedIn, WhatsApp, or Slack, they'll see the generic portfolio image instead of a preview of that project's work. This reduces click-through significantly.

**Fix**: Create a 1200×630 PNG social preview for each project. You already have quality portfolio preview images in `images/portfolio/` — open each in Figma/Photoshop, add a title overlay, export as PNG 1200×630, and update each page's `og:image` and `twitter:image`.

### 2. hreflang pointing to same URL for `es` and `en`
Every page has:
```html
<link rel="alternate" hreflang="es" href="https://otroanguloweb.cl/page" />
<link rel="alternate" hreflang="en" href="https://otroanguloweb.cl/page" />
```
Both language variants point to the same URL. Since the site serves both languages at the same URL via `translations.js`, this is technically valid but non-ideal. Google prefers either:
- **Option A (current — minimal risk)**: Keep as-is. Add `<html lang="es-CL">` (already done) and let Google handle it via automatic language detection.
- **Option B (best practice)**: If you later add `/en/` URL versions, update hreflang accordingly.

**Current impact**: Low — `x-default` and canonical are correct. This is more of a future-proofing note.

### 3. No `<link rel="preload">` for hero background images
All project pages have large WebP background images applied via CSS (`bg-*.webp`). Because they're CSS backgrounds, the browser doesn't discover them until the CSS is parsed and the layout is applied — delaying the Largest Contentful Paint (LCP).

**Fix**: Add to each project page's `<head>`:
```html
<link rel="preload" as="image" href="../images/[project]/bg-[project].webp" type="image/webp" />
```
Specific preloads to add:
- `project-alessandri.html` → `../images/alessandri/bg-alessandri.webp`
- `project-bluesphere.html` → `../images/Bluesphere/bg-bluesphere.webp`
- `project-expediente.html` → `../images/expediente/bg-expediente.webp`
- `project-matchminders.html` → (no specific bg- file; hero may be CSS gradient — no action needed)
- `project-nico-seguros.html` → `../images/nico-seguros/bg-nico.webp`
- `project-parrotfy.html` → `../images/parrotfy/bg-parrotfy.webp`
- `project-playersnap.html` → `../images/playersnap/bg-playersnap.webp`

### 4. Title lengths exceeding 60-char guideline
| Page | Current | Chars | Suggested | Chars |
|------|---------|-------|-----------|-------|
| `portfolio.html` | Portafolio UX/UI · Casos de Estudio B2B y SaaS – Erika Pinedo | 62 | Portafolio · Casos de Estudio UX/UI B2B – Erika Pinedo | 54 |
| `project-alessandri.html` | Alessandri PI · Rediseño UX/UI de Plataforma Legal – Erika Pinedo | 65 | AlessandriPI · Diseño UX/UI Plataforma Legal – Erika Pinedo | 59 |
| `project-bluesphere.html` | BlueSphere · Diseño UX/UI Ciberseguridad Cloud – Erika Pinedo | 61 | BlueSphere · Diseño UX/UI Ciberseguridad – Erika Pinedo | 55 |
| `project-expediente.html` | E-xpediente · Diseño UX/UI Plataforma Legaltech – Erika Pinedo | 61 | E-xpediente · Diseño UX/UI Legaltech – Erika Pinedo | 51 |
| `project-matchminders.html` | MatchMinders · UX/UI y Design System para Torneos – Erika Pinedo | 64 | MatchMinders · UX/UI Design System Torneos – Erika Pinedo | 57 |

---

## Quick Wins — Fix These First

1. **Add hero preloads** (30-min fix) — add one `<link rel="preload">` tag per project page for `bg-*.webp`. Immediately improves LCP scores.

2. **Fix heading hierarchy** (1-hour fix) — promote H3 → H2 in `portfolio.html`, demote H2 skill/tool cards to H3 in `about-me-erika-pinedo.html`, demote H2 approach cards to H3 in `project-matchminders.html`. Helps Google understand page structure.

3. **Create project-specific `og:image` PNGs** (half-day) — 7 images at 1200×630px, one per project. Biggest impact on click-through from social shares and LinkedIn portfolio links.

---

## About the Fixes in `seo-optimized/`

All HTML fixes below have already been applied in the `seo-optimized/` folder:

| File | Changes applied |
|------|----------------|
| `portfolio.html` | Title shortened; H3→H2 for project names; H4→H3 for subtitles |
| `about-me-erika-pinedo.html` | H2 skill/tool cards → H3; alt text added to ticker images |
| `project-matchminders.html` | Title shortened; H2 approach cards → H3; hero preload added |
| `project-alessandri.html` | Title shortened; hero preload added |
| `project-bluesphere.html` | Title shortened; hero preload added |
| `project-expediente.html` | Title shortened; hero preload added |
| `project-nico-seguros.html` | Hero preload added |
| `project-parrotfy.html` | Hero preload added |
| `project-playersnap.html` | Hero preload added |
| `index.html` | No structural changes needed |
| `contact.html` | No structural changes needed |

**Note**: The `og:image` fix requires creating new PNG files (1200×630px) for each project — this cannot be automated. See [Global Issues](#global-issues) for recommended source images.
