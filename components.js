/**
 * components.js — carga navbar y footer desde archivos separados,
 * detecta la página activa y aplica i18n tras la inyección.
 *
 * Debe cargarse DESPUÉS de translations.js (que expone window.OtroAnguloI18n).
 * Los componentes están en /components/ en la raíz de Vercel.
 */
(function () {
  'use strict';

  // Aplica el tema guardado de inmediato en <html data-theme="...">.
  // Usar el elemento raíz en lugar de body evita que Webflow IX2 o cualquier
  // script de página sobreescriba la clase del body antes de que la usemos.
  (function applyThemeEarly() {
    var theme = localStorage.getItem('site-theme') || '';
    document.documentElement.setAttribute('data-theme', theme || 'default');
    if (theme) document.body.classList.add(theme);
  })();

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
    'project-bluesphere':       'portfolio',
    'project-playersnap':       'portfolio',
    'project-matchminders':     'portfolio',
    'project-jschile':          'portfolio',
    'project-portalpehuen':     'portfolio',
    'project-urbana':           'portfolio',
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
      window.Webflow.require('navbar').ready();
    } catch (e) {
      // El módulo nav no está disponible en este build de Webflow
    }
  }


  // Applies navbar background/border inline so Webflow nav.ready() can't undo them.
  function applyThemeToNavbar(theme) {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;
    navbar.style.removeProperty('background-color');
    navbar.style.removeProperty('border');
    navbar.style.removeProperty('border-bottom');
    navbar.style.removeProperty('backdrop-filter');
    navbar.style.removeProperty('-webkit-backdrop-filter');
  }

  function initThemeSelector() {
    var STORAGE_KEY = 'site-theme';
    var THEME_PREFIX = 'theme-';

    function applyTheme(theme) {
      document.body.className = document.body.className
        .split(' ')
        .filter(function (c) { return c.indexOf(THEME_PREFIX) !== 0; })
        .join(' ');
      if (theme) {
        document.body.classList.add(theme);
      }
      document.documentElement.setAttribute('data-theme', theme || 'default');
      localStorage.setItem(STORAGE_KEY, theme || '');
      applyThemeToNavbar(theme);
    }

    function closeAllMenus() {
      document.querySelectorAll('.theme-selector__menu--visible').forEach(function (menu) {
        menu.classList.remove('theme-selector__menu--visible');
      });
      document.querySelectorAll('.theme-selector__trigger[aria-expanded="true"]').forEach(function (t) {
        t.setAttribute('aria-expanded', 'false');
      });
    }

    function positionMenu(trigger, menu) {
      var rect = trigger.getBoundingClientRect();
      menu.style.top = (rect.bottom + 8) + 'px';
      menu.style.right = (window.innerWidth - rect.right) + 'px';
    }

    function updateAllMenus(activeTheme) {
      document.querySelectorAll('.theme-selector__option').forEach(function (opt) {
        var isActive = (opt.getAttribute('data-theme') || '') === (activeTheme || '');
        opt.classList.toggle('theme-selector__option--active', isActive);
      });
    }

    function setupSelector(selector) {
      var trigger = selector.querySelector('.theme-selector__trigger');
      var menu = selector.querySelector('.theme-selector__menu');
      if (!trigger || !menu) return;

      // Move menu to <body> — completely out of the navbar DOM so it
      // can't cause layout artifacts or be clipped by navbar containers.
      document.body.appendChild(menu);

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var isVisible = menu.classList.contains('theme-selector__menu--visible');
        closeAllMenus();
        if (!isVisible) {
          positionMenu(trigger, menu);
          menu.classList.add('theme-selector__menu--visible');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });

      menu.querySelectorAll('.theme-selector__option').forEach(function (opt) {
        opt.addEventListener('click', function (e) {
          e.stopPropagation();
          var theme = opt.getAttribute('data-theme') || '';
          applyTheme(theme);
          updateAllMenus(theme);
          closeAllMenus();
        });
      });
    }

    // Restore saved theme immediately on load
    var saved = localStorage.getItem(STORAGE_KEY) || '';
    applyTheme(saved);

    // Close menus when clicking outside
    document.addEventListener('click', closeAllMenus);

    // Setup selectors, move menus to body, sync active state
    document.querySelectorAll('.theme-selector').forEach(setupSelector);
    updateAllMenus(saved);
  }

  // ---- Otros Proyectos: randomized cards (excludes current project) ----
  var ALL_PROJECTS = [
    {
      id: 'alessandri',
      href: 'project-alessandri.html',
      i18nHref: 'links.projectAlessandri',
      cover: '../images/portfolio/alessandri-cover.webp',
      name: 'Alessandri',
      titleI18n: 'vip.alessandriTitle', titleFallback: 'Rediseño de Plataforma Legal',
      pills: ['UX/UI']
    },
    {
      id: 'nico',
      href: 'project-nico-seguros.html',
      i18nHref: 'links.projectNico',
      cover: '../images/portfolio/nico-cover.webp',
      name: 'Nico Seguros',
      titleI18n: 'vip.nicoTitle', titleFallback: 'Plataforma de Seguros desde Cero',
      pills: ['UX/UI']
    },
    {
      id: 'parrotfy',
      href: 'project-parrotfy.html',
      i18nHref: 'links.projectParrotfy',
      cover: '../images/portfolio/parrotfy-cover.webp',
      name: 'Parrotfy',
      titleI18n: 'vip.parrotfyTitle', titleFallback: 'Organización y Control para Empresas en Crecimiento',
      pills: ['UX/UI']
    },
    {
      id: 'expediente',
      href: 'project-expediente.html',
      cover: '../images/portfolio/expediente-cover.webp',
      nameI18n: 'portfolioPage.expTitle', name: 'E-xpediente',
      titleI18n: 'portfolioPage.expSubtitle', titleFallback: 'Plataforma abogados',
      pills: ['UX/UI']
    },
    {
      id: 'bluesphere',
      href: 'project-bluesphere.html',
      cover: '../images/portfolio/bluesphere-cover.webp',
      name: 'BlueSphere',
      titleI18n: 'portfolioPage.bluesphereTitle', titleFallback: 'Plataforma de Ciberseguridad para Pymes',
      pills: ['UX/UI', 'Identidad visual']
    },
    {
      id: 'jschile',
      href: 'project-jschile.html',
      cover: '../images/portfolio/jschile-cover.webp',
      name: 'JSChile',
      titleI18n: 'portfolioPage.jschileTitle', titleFallback: 'Identidad visual + Landing para Comunidad Dev',
      pills: ['Identidad visual', 'Landing']
    },
    {
      id: 'playersnap',
      href: 'project-playersnap.html',
      cover: '../images/portfolio/playersnap-cover.webp',
      name: 'PlayerSnap',
      titleI18n: 'portfolioPage.playersnapTitle', titleFallback: 'Plataforma de Gestión de Activos Multimedia',
      pills: ['UX/UI']
    },
    {
      id: 'matchminders',
      href: 'project-matchminders.html',
      i18nHref: 'links.projectMatchminders',
      cover: '../images/portfolio/matchminder-cover.webp',
      name: 'MatchMinders',
      titleI18n: 'portfolioPage.matchmindersTitle', titleFallback: 'Plataforma de Torneos Deportivos',
      pills: ['UX/UI']
    },
    {
      id: 'portalpehuen',
      href: 'project-portalpehuen.html',
      cover: '../images/portfolio/portalpehuen-cover.webp',
      name: 'Portal Pehuén',
      titleI18n: 'portfolioPage.portalpTitle', titleFallback: 'Identidad Visual para Comunidad de Barrio',
      pills: ['Identidad visual']
    },
    {
      id: 'urbana',
      href: 'project-urbana.html',
      cover: '../images/portfolio/urbana-cover.webp',
      name: 'Urbana',
      titleI18n: 'portfolioPage.urbanaTitle', titleFallback: 'App Administrativa para Edificios y Condominios',
      pills: ['UX/UI']
    }
  ];

  function buildProjectCard(p) {
    var hrefAttrs = 'href="' + p.href + '"';
    if (p.i18nHref) hrefAttrs += ' data-i18n-href="' + p.i18nHref + '"';
    var nameHtml = p.nameI18n
      ? '<h3 class="title-name-portfolio-project" data-i18n="' + p.nameI18n + '">' + p.name + '</h3>'
      : '<h3 class="title-name-portfolio-project">' + p.name + '</h3>';
    var pillsHtml = p.pills.map(function (pill) {
      return '<span class="pill-category">' + pill + '</span>';
    }).join('');
    var ariaLabel = 'Ver proyecto ' + p.name + ' – ' + p.titleFallback;
    return '<a ' + hrefAttrs +
      ' class="vip-card vip-card--fullbg"' +
      ' style="background-image: url(\'' + p.cover + '\');"' +
      ' aria-label="' + ariaLabel + '">' +
      '<div class="text-content-portfolio">' +
      nameHtml +
      '<h4 class="title-card-portfolio" data-i18n="' + p.titleI18n + '">' + p.titleFallback + '</h4>' +
      '<div class="card-pills">' + pillsHtml + '</div>' +
      '</div></a>';
  }

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function renderOtrosProyectos() {
    var grid = document.querySelector('.vip-grid-featured[data-otros-proyectos]');
    if (!grid) return;
    var exclude = grid.getAttribute('data-otros-proyectos');
    var others = ALL_PROJECTS.filter(function (p) { return p.id !== exclude; });
    var selected = shuffleArray(others).slice(0, 3);
    grid.innerHTML = selected.map(buildProjectCard).join('');
  }

  function initCardAnimations() {
    if (!window.IntersectionObserver) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var grids = document.querySelectorAll('.vip-grid-featured');
    if (!grids.length) return;

    // Ocultar todas las cards inmediatamente para evitar flash
    grids.forEach(function (grid) {
      grid.querySelectorAll('.vip-card').forEach(function (card) {
        card.style.opacity = '0';
      });
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var cards = entry.target.querySelectorAll('.vip-card');
        cards.forEach(function (card, i) {
          card.style.animationDelay = (i * 0.12) + 's';
          card.style.opacity = '';
          card.classList.add('card-visible');
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.05 });

    grids.forEach(function (grid) {
      observer.observe(grid);
    });
  }

  function init() {
    renderOtrosProyectos();
    initCardAnimations();

    Promise.all([_navFetch, _footFetch])
      .then(function (results) {
        var navEl  = document.getElementById('navbar');
        var footEl = document.getElementById('footer');

        if (navEl) {
          navEl.innerHTML = results[0];
        }
        if (footEl) {
          footEl.innerHTML = results[1];
        }

        applyI18n();
        reinitWebflow();

        // Aplicar después de reinitWebflow: el módulo nav de Webflow resetea
        // w--current al reiniciarse y no reconoce URLs limpias vs. hrefs con .html
        if (navEl) {
          applyActiveLink(navEl);
        }

        initThemeSelector();

        // Re-aplicar el tema tras un frame para sobrescribir cualquier inline style
        // que IX2/Webflow haya puesto durante sus animaciones de entrada.
        requestAnimationFrame(function () {
          var t = localStorage.getItem('site-theme') || '';
          document.documentElement.setAttribute('data-theme', t || 'default');
          if (t) document.body.classList.add(t);
          applyThemeToNavbar(t);
          // Re-aplicar active link: Webflow nav puede diferir su reset al siguiente frame.
          if (navEl) applyActiveLink(navEl);
        });
        // Segunda pasada a 200 ms — cubre operaciones asíncronas del módulo nav de Webflow.
        setTimeout(function () {
          applyThemeToNavbar(localStorage.getItem('site-theme') || '');
          if (navEl) applyActiveLink(navEl);
        }, 200);
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
