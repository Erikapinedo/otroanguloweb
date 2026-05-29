# SEO Audit Report — otroanguloweb.cl
**Fecha:** 2026-05-29  
**Auditora:** Claude (seo-optimizer skill)  
**Alcance:** 11 páginas HTML + sitemap.xml + robots.txt

---

## Resumen ejecutivo

| Categoría | Estado |
|-----------|--------|
| Meta tags (title, description, og, twitter) | ✅ Completado |
| Estructura de headings (H1) | ✅ Completado |
| Canonical tags | ✅ OK (ya estaban) |
| Hreflang | ✅ OK (ya estaban) |
| Sitemap | ✅ Completado |
| Schema.org (JSON-LD) | ✅ OK (ya estaban) |
| twitter:image | ✅ Completado |

---

## Fixes aplicados en esta sesión

### 1. H1 únicos por página (problema crítico)
**Problema:** Las cards de "El Desafío" usaban `<h1>` en páginas de proyecto, generando múltiples H1 por página — penaliza en rastreo semántico.

**Solución:** Cambiado `<h1>` → `<h3>` en los elementos de card (que usan class selectors, no element selectors en CSS, por lo que el cambio es visual-safe):
- `project-bluesphere.html` — `head-card-bluesphere` (4 cards)
- `project-parrotfy.html` — `head-card-parrotfy` (4 cards)
- `project-playersnap.html` — `head-card-playersnap` (3 cards)
- `project-nico-seguros.html` — `title-nico` (4 cards)
- `project-expediente.html` — `title-expediente-card`, `title-nico` (problem + impact cards)

### 2. H1 faltante en portfolio.html
**Problema:** `<h2 class="home-heading-h2">Portafolio</h2>` — la página no tenía H1.  
**Solución:** Cambiado a `<h1 class="home-heading-h2">` (misma clase CSS, sin cambio visual).

### 3. twitter:image faltante (11 páginas)
**Problema:** Todas las páginas tenían `twitter:card` pero no `twitter:image` — Twitter/X muestra preview sin imagen.  
**Solución:** Añadido `<meta name="twitter:image" content="...">` a las 11 páginas, usando el mismo valor que `og:image` en cada una:
- 10 páginas: `https://otroanguloweb.cl/images/shared/opengraph-erika-pinedo.png`
- `about-me-erika-pinedo.html`: `https://otroanguloweb.cl/images/shared/opengraph-about-me-erika-pinedo.png`

### 4. project-matchminders ausente del sitemap
**Problema:** `sitemap.xml` no incluía la página de MatchMinders.  
**Solución:** Añadida entrada con `hreflang` es/en, `lastmod: 2026-05-29`, `priority: 0.7`.

---

## Estado actual — todas las páginas

| Página | Title | Description | H1 | Canonical | twitter:image | Schema |
|--------|-------|-------------|-----|-----------|---------------|--------|
| index.html | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| portfolio.html | ✅ | ✅ | ✅ (fix) | ✅ | ✅ | ✅ |
| about-me-erika-pinedo.html | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| contact.html | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| project-alessandri.html | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| project-bluesphere.html | ✅ | ✅ | ✅ (fix) | ✅ | ✅ | ✅ |
| project-expediente.html | ✅ | ✅ | ✅ (fix) | ✅ | ✅ | ✅ |
| project-matchminders.html | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| project-nico-seguros.html | ✅ | ✅ | ✅ (fix) | ✅ | ✅ | ✅ |
| project-parrotfy.html | ✅ | ✅ | ✅ (fix) | ✅ | ✅ | ✅ |
| project-playersnap.html | ✅ | ✅ | ✅ (fix) | ✅ | ✅ | ✅ |

---

## Advertencias (no crítico, para revisión manual)

Algunos títulos y descripciones superan las longitudes recomendadas. No se autocorrigieron porque afectan el branding/copy. Para revisión:

| Página | Campo | Largo actual | Recomendado |
|--------|-------|-------------|-------------|
| project-bluesphere.html | title | 73 chars | ≤ 60 |
| project-expediente.html | title | 71 chars | ≤ 60 |
| project-parrotfy.html | description | 176 chars | ≤ 160 |
| project-playersnap.html | description | 165 chars | ≤ 160 |

---

## Lo que ya estaba bien (no se tocó)

- **Canonical tags**: Todas las páginas usan `<link href="..." rel="canonical" />` correctamente.
- **Hreflang**: Implementado con `x-default` en las páginas principales.
- **Schema.org**: JSON-LD con `CreativeWork`, `BreadcrumbList`, `Person`, `WebSite` en todas las páginas de proyecto.
- **robots.txt**: Correctamente configurado, apunta al sitemap.
- **og: tags**: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`, `og:site_name` presentes.
- **Scripts con defer**: Scripts de analytics/tracking correctamente diferidos o al final del body.

---

## Recomendaciones futuras

1. **og:image por proyecto**: Considerar imágenes OG únicas por proyecto en lugar de la imagen genérica del portafolio. Mejora el CTR en redes sociales al compartir links de proyectos.
2. **Longitudes de title/description**: Revisar los 4 casos listados arriba si hay oportunidad de acortar sin perder keyword value.
3. **project-matchminders**: Una vez que el proyecto tenga imágenes UI reales, actualizar `og:image` y `twitter:image` con una screenshot representativa.
