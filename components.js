/**
 * components.js — carga navbar y footer desde archivos separados,
 * detecta la página activa y aplica i18n tras la inyección.
 *
 * Debe cargarse DESPUÉS de translations.js (que expone window.OtroAnguloI18n).
 * Los componentes están en /components/ en la raíz de Vercel.
 */
(function () {
  'use strict';

  // Segmento de pathname → clave de página usada en data-nav-page
  var PAGE_MAP = {
    '':                         'home',
    'index':                    'home',
    'about-me-erika-pinedo':    'about',
    'portfolio':                'portfolio',
    'project-alessandri':       'portfolio',
    'project-expediente':       'portfolio',
    'project-nico-seguros':     'portfolio',
    'project-parrotfy':         'portfolio',
  };

  // Fetch arranca inmediatamente (antes de DOMContentLoaded) para maximizar
  // la probabilidad de que la respuesta esté lista cuando se inyecte el DOM.
  var _navFetch  = fetch('/components/navbar.html').then(function (r) {
    if (!r.ok) throw new Error('HTTP ' + r.status + ' — navbar.html');
    return r.text();
  });
  var _footFetch = fetch('/components/footer.html').then(function (r) {
    if (!r.ok) throw new Error('HTTP ' + r.status + ' — footer.html');
    return r.text();
  });

  function getActivePage() {
    var segment = window.location.pathname.replace(/^\/|\/$/g, '').replace(/\.html$/, '');
    return PAGE_MAP[segment] || null;
  }

  function applyActiveLink(navbarEl) {
    var active = getActivePage();
    navbarEl.querySelectorAll('[data-nav-page]').forEach(function (link) {
      var isActive = active !== null && link.getAttribute('data-nav-page') === active;
      link.classList.toggle('w--current', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  // Re-aplica el idioma guardado al contenido recién inyectado.
  // translations.js ya usa document.querySelectorAll, así que alcanza el nuevo DOM.
  function applyI18n() {
    if (window.OtroAnguloI18n) {
      window.OtroAnguloI18n.setLang(window.OtroAnguloI18n.getLang());
    }
  }

  // Reinicia SOLO el módulo nav de Webflow para habilitar hamburger y dropdowns.
  // NO llamar Webflow.destroy() — resetea opacity:0 de todos los elementos
  // animados con IX2, dejando el contenido invisible en la página.
  function reinitWebflow() {
    if (!window.Webflow) return;
    try {
      window.Webflow.require('nav').ready();
    } catch (e) {
      // El módulo nav no está disponible en este build de Webflow
    }
  }

  function init() {
    Promise.all([_navFetch, _footFetch])
      .then(function (results) {
        var navEl  = document.getElementById('navbar');
        var footEl = document.getElementById('footer');

        if (navEl) {
          navEl.innerHTML = results[0];
          applyActiveLink(navEl);
        }
        if (footEl) {
          footEl.innerHTML = results[1];
        }

        applyI18n();
        reinitWebflow();
      })
      .catch(function (err) {
        console.error('[components.js]', err);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
