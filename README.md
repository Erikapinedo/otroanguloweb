# Otro Ángulo Web

Sitio web de [otroanguloweb.cl](https://otroanguloweb.cl), estudio de diseño de producto y branding de Erika Pinedo. Portafolio y landing orientado a clientes B2B y SaaS.

## Stack

- **HTML + CSS + JavaScript** sin framework (sitio estático exportado originalmente desde Webflow, hoy editado a mano).
- **Vendors locales**: GSAP, Lenis, CountUp para animaciones.
- **Hosting**: Vercel (deploy automático desde `main`).
- **Dominio**: `otroanguloweb.cl` (CNAME en el repo).
- **i18n**: sistema propio basado en `translations.js` + `data-i18n` attributes, expuesto como `window.OtroAnguloI18n`.
- **Componentes compartidos**: `/components/navbar.html` y `/components/footer.html` se inyectan vía `components.js`.

## Estructura

```
.
├── index.html              Landing principal
├── sobre-mi.html           Página de "Sobre mí"
├── proyectos.html          Portafolio
├── contacto.html           Formulario de contacto
├── hola.html               Página de bienvenida
├── 404.html                Página de error
├── proyectos/              Case studies (uno por proyecto)
├── components/             navbar.html y footer.html compartidos
├── assets/
│   ├── css/                main.css, fonts.css (fuente y minificados)
│   ├── js/                 Scripts legacy de Webflow y jQuery
│   └── fonts/              Woff2 autohospedados
├── images/                 Organizadas por proyecto + /shared/ + /og/
├── vendors/                GSAP, Lenis, CountUp
├── components.js           Carga de navbar/footer e i18n
├── translations.js         Traducciones ES/EN (fuente)
├── sitemap.xml             Sitemap principal
├── robots.txt
├── manifest.webmanifest    PWA
├── llms.txt                Guía para LLMs
└── vercel.json             Redirects, headers y rewrites
```

## Desarrollo local

```bash
npm install
npm run dev
```

Esto levanta un servidor estático en `http://localhost:3000`. Alternativa sin instalar nada: `python3 -m http.server 3000`.

## Build (minificación)

Los archivos `.min.css` y `.min.js` que consume el sitio en producción se generan desde los archivos fuente:

```bash
npm run build         Minifica CSS y JS
npm run build:css     Solo CSS
npm run build:js      Solo JS
```

> **Importante:** cualquier cambio en `main.css`, `components.js` o `translations.js` requiere correr `npm run build` antes de hacer commit, de lo contrario la versión minificada queda desincronizada.

## Deploy

Push a `main` dispara el deploy automático de Vercel. Las reglas de redirect (URLs españolas vs. legacy en inglés) y los headers están en `vercel.json`.

## Convenciones

- **Idiomas**: español por defecto (`lang="es-CL"`), traducciones en `translations.js`. Para nuevo texto en el HTML usar `data-i18n="clave"`.
- **Imágenes**: formato WebP cuando sea posible, agrupadas en `/images/<proyecto>/` o `/images/shared/` para assets reutilizables.
- **Puntuación**: no usar em dash en textos del sitio, usar coma u otro signo.
- **URLs**: canónicas en español. Las versiones en inglés que existían antes están redirigidas en `vercel.json`.

## SEO

- Sitemap: `/sitemap.xml` con `sitemap.xsl` para visualización.
- Structured data (JSON-LD) incluida en cada página con `@graph` de `Organization`, `Person` y `WebSite`.
- `llms.txt` describe el sitio para rastreadores de IA.
- Historial de auditorías SEO en `SEO_REPORT.md`.

## Contacto

contacto@otroanguloweb.cl
