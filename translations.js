/**
 * i18n: textos ES/EN + aplicación en DOM (localStorage, sin recarga al cambiar idioma).
 * Claves: data-i18n="ruta.anidada" (textContent), data-i18n-html (innerHTML), data-i18n-href / data-i18n-alt / data-i18n-src / data-i18n-srcset.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'otroangulo-site-lang';

  var STRINGS = {
    es: {
      meta: {
        title: 'Diseñadora UX/UI Chile · B2B & SaaS – Erika Pinedo',
        description:
          'Diseñadora UX/UI con +5 años en productos digitales B2B y SaaS. Creo experiencias intuitivas para startups y empresas desde Santiago, Chile.',
        ogTitle: 'Diseñadora UX/UI Chile · B2B & SaaS – Erika Pinedo',
        ogDescription:
          'Diseñadora UX/UI con +5 años en productos digitales B2B y SaaS. Creo experiencias intuitivas para startups y empresas desde Santiago, Chile.',
        twitterTitle: 'Diseñadora UX/UI Chile · B2B & SaaS – Erika Pinedo',
        twitterDescription:
          'Diseñadora UX/UI con +5 años en productos digitales B2B y SaaS. Creo experiencias intuitivas para startups y empresas desde Santiago, Chile.',
      },
      links: {
        contact: 'contact.html',
        about: 'about-me-erika-pinedo.html',
        portfolio: 'portfolio.html',
        projectAlessandri: 'project-alessandri.html',
        projectNico: 'project-nico-seguros.html',
        projectParrotfy: 'project-parrotfy.html',
        projectExpediente: 'project-expediente.html',
        linkedin: 'https://www.linkedin.com/in/erika-pinedo-camacho/',
      },
      hero: {
        line1: 'Transformo ideas en',
        line2: 'productos digitales',
        sub:
          'Experta en B2B y SaaS, ayudando a pequeñas y grandes empresas a optimizar ideas en experiencias intuitivas y atractivas.',
        knowMore: 'Conocer más',
        seeProjects: 'Ver Proyectos',
      },
      logos: {
        caption: 'Clientes en modalidad freelance y corporativa',
      },
      gallery: {
        matchminder:
          'Pantalla del sitio web de MatchMinders que invita a desatar el espíritu competitivo creando y gestionando torneos de deportes favoritos como fútbol, tenis, básquetbol y e-sports.',
        fastpass:
          'Página web de FastPass mostrando optimización y seguridad del acceso para colegios, con ventajas como ingreso 90% más rápido y casos de éxito.',
        bluesphere:
          'Pantalla de software BlueSphere que muestra un puntaje compuesto crítico de 10 y un puntaje de escudo alto de 30 con historial y gestión de vulnerabilidades.',
        urbana:
          'Interfaz móvil de la aplicación Urbana Administración mostrando perfil de usuario, estado de deuda al día y gráficos de gastos anuales detallados.',
      },
      about: {
        imgAlt: 'Mujer joven con cabello largo y rizado sonriendo sobre un fondo rosa.',
        greeting: 'Hola!, Acá <strong>Erika Pinedo</strong>',
        p1:
          '<strong><em>Diseñadora gráfica certificada en UX/UI,</em></strong> con +5 años de experiencia en diseño de producto digital y +9 años en el mundo del diseño.<br/><br/>Me especializo en el diseño de software a medida, principalmente productos<em> B2B y SaaS</em>, con alta capacidad de autogestión y liderazgo de proyectos <em>end-to-end.</em>',
        p2:
          '<strong>He colaborado con startups innovadoras como NICO Seguros y grandes marcas como Alessandri Abogados y Banco Falabella.</strong>',
        cta: 'Hablemos!',
      },
      vip: {
        heading: 'Proyectos <span class="span-italic-txt">destacados</span>',
        alessandriTitle: 'Rediseño de Plataforma Legal',
        alessandriDesc:
          'Proyecto end-to-end basado en research con usuarios reales para simplificar flujos complejos y centralizar la gestión de información en la plataforma interna del estudio de abogados.<br/>',
        nicoTitle: 'Plataforma de Seguros desde Cero',
        nicoDesc:
          'Diseño de un SaaS B2B para corredores de seguros que unifica la gestión de pólizas, clientes y renovaciones en un solo sistema, mejorando la visibilidad y control de sus operaciones.<br/>',
        parrotfyTitle: 'Organización y Control para Empresas en Crecimiento',
        parrotfyDesc:
          'Diseño de producto para un ERP enfocado en pymes que integra finanzas, inventarios, facturación y gestión de proyectos en una sola plataforma para simplificar la operación del negocio.<br/>',
        knowMore: 'Conocer más',
      },
      services: {
        heading: 'Mis <span class="span-txt">Servicios</span>',
        intro:
          'Diseño soluciones digitales y visuales que combinan estrategia, usabilidad y estética para generar resultados reales. Trabajo de forma end-to-end: desde la idea y la investigación hasta la implementación y optimización continua.',
        uxBody:
          '<strong>Diseño productos digitales claros, intuitivos y escalables, enfocados en usuarios y objetivos de negocio.</strong><br/>‍<br/>- Research y definición de problemas<br/>- Arquitectura de información y user flows<br/>- Wireframes y prototipos en Figma<br/>- Design system<br/>- Optimización de conversión y experiencia',
        brandingBody:
          '<strong>Construyo identidades visuales coherentes que transmiten valor, personalidad y diferenciación.</strong><br/>‍<br/>- Diseño de logo e identidad visual<br/>- Sistemas gráficos y guías de estilo<br/>- Aplicaciones digitales y materiales',
        presentationsTitle: 'Presentaciones',
        presentationsBody:
          '<strong>Creo presentaciones visuales que comunican ideas complejas con claridad e impacto.</strong><br/>‍<br/>- Pitch decks para startups e inversionistas<br/>- Presentaciones corporativas y comerciales<br/>- Storytelling visual y estructura narrativa<br/><em><br/>Entrega de diseño en PowerPoint o Figma slides</em>',
        contact: 'Contactar',
      },
      finalCta: {
        heading: 'Tu próximo proyecto<br/><span class="text-span-17">empieza aquí</span>',
        sub:
          'Trabajo con startups y empresas diseñando productos digitales claros, funcionales y pensados para escalar.<br/>Si tienes una idea, un producto en desarrollo o una plataforma que necesita mejorar, conversemos.',
        btn: 'Conversemos!',
      },
      nav: {
        home: 'Inicio',
        about: 'Sobre mi',
        portfolio: 'Portafolio',
        cta: 'Conversemos!',
        dropdown: 'Dropdown',
        link1: 'Link 1',
        link2: 'Link 2',
        link3: 'Link 3',
      },
      footer: {
        tagline: 'Transformo ideas en <em>productos digitales</em>',
        linksHeading: 'Links',
        contactHeading: 'Contactar',
        copyright:
          '©2026 Otro Ángulo Web. Todos los derechos reservados. Hecho por Erika Pinedo con 💗',
      },
      aboutPage: {
        "meta": {
          "title": "Erika Pinedo · Diseñadora UX/UI Chile",
          "description": "Diseñadora gráfica certificada en UX/UI con +5 años en B2B y SaaS. Especializada en research, design systems y branding. Proyectos end-to-end desde Chile.",
          "ogTitle": "Erika Pinedo · Diseñadora UX/UI Chile",
          "ogDescription": "Diseñadora gráfica certificada en UX/UI con +5 años en B2B y SaaS. Especializada en research, design systems y branding. Proyectos end-to-end desde Chile.",
          "twitterTitle": "Erika Pinedo · Diseñadora UX/UI Chile",
          "twitterDescription": "Diseñadora gráfica certificada en UX/UI con +5 años en B2B y SaaS. Especializada en research, design systems y branding. Proyectos end-to-end desde Chile."
        },
        "heroImgAlt": "Mujer joven con cabello rizado largo y oscuro, sonriendo, con aretes dorados y camiseta negra, fondo rosa.",
        "heroIntro": "<strong><em>Diseñadora gráfica certificada en UX/UI,</em></strong> con +5 años de experiencia en diseño de producto digital y +9 años en el mundo del diseño.",
        "count1": "proyectos end-to-end<br/>entregados con éxito",
        "count2": "años en UX/UI<br/>y +9 en el área de diseño.",
        "count3": "Ganas de crecer y crear.",
        "skillsHeadingHtml": "Mis <span class=\"span-txt\">Skills</span>",
        "skillsIntro": "Contribuyo en múltiples frentes: estrategia, research, diseño de interfaces y sistemas visuales que realmente funcionan.",
        "s1t": "Adaptabilidad",
        "s1b": "Capacidad de reaccionar rápido ante cambios de contexto, prioridades o feedback.",
        "s2t": "Trabajo en Equipo",
        "s2b": "Colaboración fluida lideres, desarrollo y stakeholders en entornos ágiles.",
        "s3t": "User Research",
        "s3b": "Entrevistas, síntesis y validación con usuarios reales para decisiones con fundamento.",
        "s4t": "Arquitectura de Información",
        "s4b": "Estructuras lógicas, flujos y wireframes centrados en la claridad del usuario.",
        "s5t": "UI Design",
        "s5b": "Interfaces visuales limpias, consistentes y escalables alineadas al negocio.",
        "s6t": "Design Systems",
        "s6b": "Componentes y tokens que unifican la experiencia entre productos.",
        "s7t": "Prototipado",
        "s7b": "Prototipo interactivo listo para clientes y desarrolladores.",
        "s8t": "Accesibilidad",
        "s8b": "Diseño inclusivo y estándares WCAG",
        "s9t": "Branding",
        "s9b": "Desarrollo de Identidad visual",
        "s10t": "Diseño Responsive",
        "s10b": "Experiencias consistentes en web, desktop y mobile desde la concepción.",
        "s11t": "Autonomía",
        "s11b": "Gestión propia de tiempos, prioridades y entregables sin necesidad de supervisión constante.<br/>",
        "s12t": "Puntualidad y Compromiso",
        "s12b": "Cumplimiento de plazos y entregas con responsabilidad y consistencia.<br/>",
        "toolsHeadingHtml": "Mis <span class=\"span-txt\">Herramientas</span>",
        "toolsIntro": "Las herramientas que uso me permiten construir productos digitales completos y coherentes.",
        "toolsAi": "<strong>- Claude, Chat GPT: </strong>Análisis, Síntesis e ideación<br/>‍<br/><strong>- V0, Stitch, Figma Make, Lovable:</strong>Exploración visual<br/><br/><strong>- Nano Banano: </strong>Generación de imagen<br/>",
        "toolsDesign": "<strong>- Figma: </strong>Diseño y handoff<br/>‍<br/><strong>- Illustrator: </strong>Gráfica vectorial<br/><br/><strong>- Photoshop: </strong>Edición de imagen<br/><br/><strong>- Jitter: </strong>Animaciones UI<br/>",
        "toolsResearch": "<strong>- Hotjar: </strong>Heatmaps y sesiones<br/>‍<br/><strong>- Useberry: </strong>Tests de usabilidad<br/>",
        "toolsWeb": "<strong>- Webflow: </strong>Desarrollo sin código<br/>‍<br/><strong>- HTML / CSS: </strong>Fundamentos frontend<br/><br/><strong>- React: </strong>Componentes UI<br/><br/><strong>- Git: </strong>Control de versiones<br/>",
        "eduHeadingHtml": "Mis <span class=\"span-txt\">Estudios</span>",
        "eduIntro": "La capacitación es algo crucial para crecer.",
        "eduLblCourse": "Curso",
        "eduLblCert": "Certificado",
        "eduLblUniv": "Universidad",
        "e1t": "AI para diseñadores",
        "e1m": "2026. Nelson Rodríguez-Peña.",
        "e2t": "Taller Práctico de métricas",
        "e2m": "2024. Sol Mesz.<br/>",
        "e3t": "Métricas y diseño",
        "e3m": "2024. Sol Mesz.<br/>",
        "e4t": "Mobile UI Design",
        "e4m": "2023. Interaction design Foundation.<br/>",
        "e5t": "Product manager",
        "e5m": "2022. CoderHouse.<br/>",
        "e6t": "Diseño inclusivo para plataformas digitales",
        "e6m": "2021. Universidad del Desarrollo.<br/>",
        "e7t": "Certificado como Diseñador UX UI",
        "e7m": "2021. Digital Talent.<br/>",
        "e8t": "Carrera Diseño Gráfico",
        "e8m": "2012-2014. Instituto de Diseño Charles Worth.<br/>"
      },
      portfolioPage: {
        "meta": {
          "title": "Portafolio · Diseño UX/UI de Productos Digitales – Erika Pinedo",
          "description": "Proyectos de diseño UX/UI end-to-end: ERP para PYMEs, SaaS B2B de seguros y rediseño de plataforma jurídica. Casos de estudio reales de Erika Pinedo, diseñadora UX/UI en Chile.",
          "ogTitle": "Portafolio · Diseño UX/UI de Productos Digitales – Erika Pinedo",
          "ogDescription": "Proyectos de diseño UX/UI end-to-end: ERP para PYMEs, SaaS B2B de seguros y rediseño de plataforma jurídica. Casos de estudio reales de Erika Pinedo, diseñadora UX/UI en Chile.",
          "twitterTitle": "Portafolio · Diseño UX/UI de Productos Digitales – Erika Pinedo",
          "twitterDescription": "Proyectos de diseño UX/UI end-to-end: ERP para PYMEs, SaaS B2B de seguros y rediseño de plataforma jurídica. Casos de estudio reales de Erika Pinedo, diseñadora UX/UI en Chile."
        },
        "pageHeadingHtml": "<em>Portafolio</em>",
        "expTitle": "E-xpediente",
        "expSubtitle": "Plataforma abogados",
        "expDesc": "Proyecto end-to-end basado en research con usuarios reales para simplificar flujos complejos y centralizar la gestión de información en la plataforma interna del estudio de abogados.<br/>",
        "expImgAlt": "Interfaz de expediente virtual que muestra causas, documentos en PDF para descargar y últimos movimientos.",
        "bluesphereTitle": "Plataforma de Ciberseguridad para Pymes",
        "bluesphereDesc": "Diseño UX/UI de una plataforma cloud-native que integra monitoreo SOC 24/7, gestión de vulnerabilidades y resiliencia operativa para pequeñas y medianas empresas.<br/>",
        "bluesphereImgAlt": "Interfaz de BlueSphere mostrando panel de monitoreo de ciberseguridad con puntajes de riesgo y alertas.",
        "playersnapTitle": "Plataforma de Gestión de Activos Multimedia para Deportes",
        "playersnapDesc": "Diseño UX/UI de un SaaS impulsado por IA para organizaciones deportivas, que centraliza la gestión, análisis y distribución de contenido multimedia en tiempo real.<br/>",
        "playersnapImgAlt": "Interfaz de PlayerSnap mostrando panel de gestión de activos digitales para organizaciones deportivas."
      },
      alessandriProjectPage:       {
        "meta": {
          "title": "AlessandriPI · Rediseño UX/UI de Plataforma Jurídica – Erika Pinedo",
          "description": "Rediseño end-to-end: plataforma interna de gestión legal para 40.000+ clientes. Investigación con 32 usuarios, 7 sprints, arquitectura centrada en el cliente.",
          "ogTitle": "AlessandriPI · Rediseño UX/UI de Plataforma Jurídica – Erika Pinedo",
          "ogDescription": "Rediseño end-to-end: plataforma interna de gestión legal para 40.000+ clientes. Investigación con 32 usuarios, 7 sprints, arquitectura centrada en el cliente.",
          "twitterTitle": "AlessandriPI · Rediseño UX/UI de Plataforma Jurídica – Erika Pinedo",
          "twitterDescription": "Rediseño end-to-end: plataforma interna de gestión legal para 40.000+ clientes. Investigación con 32 usuarios, 7 sprints, arquitectura centrada en el cliente."
        },
        "back": "Volver",
        "heroH1Html": "Rediseño de la plataforma de <em class=\"italic-text-2\">operaciones jurídicas internas</em>",
        "heroSub": "Proyecto End-to-End ",
        "contextTitleHtml": "<strong class=\"bold-text-4\">Del </strong><strong class=\"bold-text-9\">Caos</strong><strong class=\"bold-text-4\"> al orden</strong>",
        "contextBody": "Una transformación completa de la experiencia de usuario (UX) y la interfaz de usuario (UI) de un sistema interno fundamental utilizado para gestionar marcas registradas, patentes, casos judiciales, dominios y renovaciones para más de 40 000 clientes.<br/><br/>Este proyecto rediseña AlessBO, el sistema interno utilizado durante más de cuatro años en «Estudio Alessandri», para convertirlo en AlessandriPI, una plataforma moderna, confiable y eficiente adaptada a los exigentes flujos de trabajo legales.El rediseño se centra en cuatro pilares: claridad, automatización, confiabilidad y velocidad operativa.<br/><br/>Implicó una investigación exhaustiva con 32 usuarios de diferentes roles, identificando los principales puntos débiles, tales como búsquedas poco confiables, datos fragmentados, mucho trabajo manual y falta de confianza en el sistema.",
        "gal1Alt": "Pantalla de sistema de gestión con Ficha Corresponsal de Cencosud y lista de marcas registradas con sus números de solicitud, países y estados.",
        "gal2Alt": "Ficha corresponsal activo de Netflix en Estados Unidos con dirección en Los Angeles, California, detalles de responsables, abogados principales y adjuntos.",
        "gal3Alt": "Panel de control de Alessandri PI mostrando fechas fatales para marcas, patentes y juicios, con alertas de vencidos y próximos en un calendario, y listados de casos con colores rojo para fechas próximas y verde para completados.",
        "phase1": "Fase 1",
        "teamLabel": "Equipo",
        "teamHtml": "<em class=\"italic-text-5\">1 lider de proyecto, 3 desarrolladores, 1 diseñador UX/UI</em>",
        "designLabel": "Diseño",
        "totalLabel": "Total",
        processImgSrc: '../imagenes/proceso-investigacion-parrotfy.webp',
        processImgSrcset: '../imagenes/group-9108-p-500.webp 500w, ../imagenes/group-9108-p-800.webp 800w, ../imagenes/group-9108-p-1080.webp 1080w, ../imagenes/proceso-investigacion-parrotfy.webp 1269w',
        key1ImgSrc: '../imagenes/frame-91901.webp',
        key1ImgSrcset: '',
        key2ImgSrc: '../imagenes/frame-91899.webp',
        key2ImgSrcset: '../imagenes/frame-91899-p-500.webp 500w, ../imagenes/frame-91899.webp 557w',
        key3ImgSrc: '../imagenes/frame-91928.webp',
        key3ImgSrcset: '../imagenes/frame-91928-p-500.webp 500w, ../imagenes/frame-91928-p-800.webp 800w, ../imagenes/frame-91928-p-1080.webp 1080w, ../imagenes/frame-91928.webp 1174w',
        sol1ImgSrc: '../imagenes/8alessandri-erika-pinedo-3.webp',
        sol1ImgSrcset: '../imagenes/8alessandri-erika-pinedo-3-p-500.webp 500w, ../imagenes/8alessandri-erika-pinedo-3-p-800.webp 800w, ../imagenes/8alessandri-erika-pinedo-3-p-1080.webp 1080w, ../imagenes/8alessandri-erika-pinedo-3.webp 1442w',
        sol2ImgSrc: '../imagenes/8alessandri-erika-pinedo-1.webp',
        sol2ImgSrcset: '../imagenes/8alessandri-erika-pinedo-1-p-500.webp 500w, ../imagenes/8alessandri-erika-pinedo-1-p-800.webp 800w, ../imagenes/8alessandri-erika-pinedo-1-p-1080.webp 1080w, ../imagenes/8alessandri-erika-pinedo-1.webp 1442w',
        sol3ImgSrc: '../imagenes/8alessandri-erika-pinedo-2.webp',
        sol3ImgSrcset: '../imagenes/8alessandri-erika-pinedo-2-p-500.webp 500w, ../imagenes/8alessandri-erika-pinedo-2-p-800.webp 800w, ../imagenes/8alessandri-erika-pinedo-2-p-1080.webp 1080w, ../imagenes/8alessandri-erika-pinedo-2.webp 1442w',
        "processHeadingHtml": "Proceso de <strong><em class=\"italic-text-6\">diseño</em></strong>",
        "processImgAlt": "Diagrama de flujo que muestra el proceso de investigación, empatía y definición, ideas, equipo de desarrollo, prototipado y feedback de usuario en el desarrollo ágil.",
        "problemH": "El desafio",
        "problemIntro": "La investigación y el análisis revelaron que los desafíos no eran causados por un solo problema, sino por una combinación crítica de factores:",
        "prob1": "Información fragmentada a través de los módulos",
        "prob2": "Búsqueda inflexible e ineficaz",
        "prob3": "Informes difíciles de generar y validar",
        "prob4": "Falta de un sistema confiable de alertas de plazos, aumentando el riesgo operativo y la supervisión manual",
        "prob5": "Baja confianza en los datos del sistema para la toma de decisiones",
        "prob6": "Muchas tareas repetitivas ejecutadas manualmente",
        "keyInsightsH": "Insights clave",
        "key1Alt": "Consulta sobre la tarea más compleja o frustrante en AlessBO, mostrando que más del 70% considera la generación de informes como la tarea más frustrante.",
        "key2Alt": "Puntuación 4.53 de 10 que indica baja confianza en la información proporcionada por AlessBO para tomar decisiones, con nota sobre la baja fiabilidad del sistema y uso de archivos Excel.",
        "key3Alt": "Pregunta sobre el tiempo aproximado para reunir información de un cliente con resultado: tiempo promedio estimado de 24 minutos para el 78.1% de los usuarios, con detalles adicionales de tiempos y porcentajes menores.",
        "picAlt": "Persona usando una laptop con una tabla de dominios web y fechas de expiración que están codificadas por color.",
        "solutionH": "La Solución",
        "solutionBody": "AlessandriPI redefine cómo la firma organiza y accede a la información legal, priorizando la estructura, la claridad y la reducción de la fricción operativa.<br/>‍<br/>El cambio más impactante fue redefinir la arquitectura central de la plataforma.<br/>‍<br/>En AlessBO, las entidades legales (marcas registradas, patentes, dominios y litigios) estaban vinculadas de manera aislada, fragmentando la información y dificultando la comprensión del panorama completo de un cliente.<br/><br/>En AlessandriPI, el modelo se invierte:<br/><strong>el cliente se convierte en el contenedor central, que alberga todas las entidades legales relacionadas.</strong>",
        "sol1Alt": "Pantalla de interfaz de gestión de marcas y patentes con lista detallada, fechas de vencimiento resaltadas y botones para ver más información.",
        "sol2Alt": "Pantalla de dashboard de Alessandri PI con secciones para fechas fatales, plazos internos, seguimientos y aprobaciones pendientes para marcas, patentes, juicios y dominios.",
        "sol3Alt": "Interfaz de plataforma digital para gestión de patentes con lista de solicitudes, estado, país, titular, fechas y un panel de ficha detallada con eventos y observaciones.",
        "impactH": "Resultados esperados",
        "impactIntro": "<strong>El objetivo principal es mejorar cómo los equipos legales acceden, comprenden y utilizan la información, reduciendo la fricción y el riesgo operativo.</strong>",
        "imp1": "Reducción del tiempo para recopilar información completa del cliente",
        "imp2": "Menor dependencia de Excel y validaciones externas",
        "imp3": "Mejora en la claridad y estructura de la información para revisiones y reuniones",
        "imp4": "Mayor confianza en los datos del sistema para la toma de decisiones",
        "imp5": "Riesgo en torno a plazos críticos",
        "wireAlt": "Varias capturas de pantalla de una aplicación web de gestión de marcas, empresas y patentes con tablas, filtros y opciones para editar información.",
        "mailsAlt": "Tres pantallas de interfaz de AlessandriPI: recuperación de contraseña con botón rojo, notificación de documento por aprobar con botón rojo, y resumen semanal con datos y botón para acceder a AlessandriPI.",
        "creditsHtml": "<strong>Compañía</strong> Nnodes<strong><br/>Lider proyecto </strong>Pablo Gajardo<br/><strong>Diseñador Sr. UX/UI </strong>Erika Pinedo<br/><strong>Desarrolladores</strong> Benjamin, Joaquin, Pablo Gajardo.<br/><br/>- Todos los derechos reservados-",
        "otherHeadingHtml": "Otros <span class=\"span-txt\">Proyectos</span>",
        "seeAll": "Ver todos"
      },
      contactPage: {
        meta: {
          title: 'Contacto · Hablemos de tu Proyecto Digital – Erika Pinedo',
          description: '¿Tienes un proyecto en mente? Cuéntame tu idea y trabajemos juntos. Diseñadora UX/UI en Chile especializada en productos digitales, SaaS y ERP.',
          ogTitle: 'Contacto · Hablemos de tu Proyecto Digital – Erika Pinedo',
          ogDescription: '¿Tienes un proyecto en mente? Cuéntame tu idea y trabajemos juntos. Diseñadora UX/UI en Chile especializada en productos digitales, SaaS y ERP.',
          twitterTitle: 'Contacto · Hablemos de tu Proyecto Digital – Erika Pinedo',
          twitterDescription: '¿Tienes un proyecto en mente? Cuéntame tu idea y trabajemos juntos. Diseñadora UX/UI en Chile especializada en productos digitales, SaaS y ERP.',
        },
        heading: '¿Tienes un proyecto en mente?',
        subheading: 'Cuéntame qué ideas tienes y veamos cómo puedo ayudarte.',
        fieldName: 'Nombre *',
        fieldLastName: 'Apellido *',
        fieldPhone: 'Número de teléfono',
        fieldEmail: 'Correo *',
        fieldMessage: 'Escribe el proyecto que tienes en mente... *',
        submitBtn: 'Enviar mensaje',
        successMsg: '<strong>¡Gracias!</strong><br/>Tu mensaje fue enviado. Te estaré contactando lo más pronto posible',
        errorMsg: '<strong>:( Oops!</strong> Lo lamentamos, algo salió mal, por favor vuelve a intentarlo.',
      },
      nicoProjectPage: {
        meta: {
          title: 'NICO Seguros · Diseño UX/UI B2B SaaS – Erika Pinedo',
          description: 'Diseño UX/UI end-to-end para NICO Seguros: plataforma B2B SaaS que gestiona +10.000 pólizas. Elegida "Most Investable Startup" por Start-Up Chile 2024.',
          ogTitle: 'NICO Seguros · Diseño UX/UI B2B SaaS – Erika Pinedo',
          ogDescription: 'Diseño UX/UI end-to-end para NICO Seguros: plataforma B2B SaaS que gestiona +10.000 pólizas. Elegida "Most Investable Startup" por Start-Up Chile 2024.',
          twitterTitle: 'NICO Seguros · Diseño UX/UI B2B SaaS – Erika Pinedo',
          twitterDescription: 'Diseño UX/UI end-to-end para NICO Seguros: plataforma B2B SaaS que gestiona +10.000 pólizas. Elegida "Most Investable Startup" por Start-Up Chile 2024.',
        },
        back: 'Volver',
        heroH1Html: 'Plataforma de <em class="italic-text-2">Gestión de Seguros</em>',
        heroSub: 'Diseño UX/UI end-to-end desde cero',
        contextTitleHtml: '<strong class="bold-text-4">Pasar del </strong><strong class="bold-text-9">Mundo jurásico</strong><strong class="bold-text-4"> 🦖 a lo moderno <em class="italic-text-4">🤖</em></strong>',
        contextBody: 'NICO Seguros fue diseñado para ayudar a los corredores de seguros a trabajar más rápido, con flujos de trabajo más claros, menos fricción y un producto preparado para crecer.<br/><br/>Lo que comenzó como una operación completamente manual se transformó en una plataforma unificada y escalable que respalda industrias con procesos de seguros complejos.',
        problemH: 'El desafio',
        problemBody: 'Las operaciones de seguros dependían fuertemente del trabajo manual. La información estaba distribuida entre planillas, correos electrónicos y PDFs, lo que hacía que las tareas diarias fueran lentas, inconsistentes y propensas a errores.',
        prob1Title: 'Información Fragmentada',
        prob1Body: 'Los datos estaban dispersos en múltiples herramientas, reduciendo la visibilidad sobre el estado de las pólizas, renovaciones, siniestros, deudas, documentos y detalles de cobertura.',
        prob2Title: 'Puntos Ciegos Operacionales',
        prob2Body: 'Los corredores tenían dificultades para rastrear vencimientos y oportunidades de seguimiento, lo que frecuentemente provocaba renovaciones perdidas y pérdida evitable de clientes.',
        prob3Title: 'Procesos Lentos y Propensos a Errores',
        prob3Body: 'Cotizar, emitir, negociar y gestionar pólizas requería pasos manuales repetitivos que dependían de la memoria en lugar de flujos estructurados.',
        prob4Title: 'Demasiada Administración, Poco Crecimiento',
        prob4Body: 'La sobrecarga administrativa dejaba a los corredores con poco tiempo para enfocarse en ventas, crecimiento de cartera o mejorar la relación con clientes.',
        personaImgSrc: '../imagenes/user-persona-nico-seguros-erika-pinedo.webp',
        personaImgSrcset: '../imagenes/user-persona-nico-seguros-erika-pinedo-p-500.webp 500w, ../imagenes/user-persona-nico-seguros-erika-pinedo-p-800.webp 800w, ../imagenes/user-persona-nico-seguros-erika-pinedo-p-1080.webp 1080w, ../imagenes/user-persona-nico-seguros-erika-pinedo-p-1600.webp 1600w, ../imagenes/user-persona-nico-seguros-erika-pinedo.webp 1844w',
        approachH: 'El Enfoque',
        approachBody1Html: 'Para diseñar una plataforma basada en necesidades operativas reales, trabajé directamente con el fundador y stakeholders, para mapear todo el ciclo de vida del seguro:<br/>‍<strong class="bold-text-6">Cotizar → Negociar → Emitir → Gestionar → Renovar</strong>',
        approachBody2: 'El diseño se basó en tres pilares:',
        approach1Title: 'Claridad',
        approach1Body: 'Transformar información técnica densa en interfaces legibles y accionables.',
        approach2Title: 'Estructura',
        approach2Body: 'Dividir procesos largos de seguros en flujos guiados paso a paso.',
        approach3Title: 'Escalabilidad',
        approach3Body: 'Diseñar un sistema flexible capaz de soportar industrias complejas como minería, construcción, leasing, proptech, fundaciones y ERPs.',
        solutionH: 'La Solución',
        solutionBody: 'NICO centraliza toda la operación de seguros en una sola plataforma proactiva diseñada para reducir fricción y aumentar la visibilidad del negocio.',
        sol1Html: '<strong class="bold-text-5">Sistema de estado tipo semáforo</strong><br/>Los usuarios entienden instantáneamente el estado de cualquier póliza, renovación u oportunidad mediante un sistema claro de colores.',
        sol2Html: '<strong class="bold-text-5">Flujos guiados</strong><br/>Procesos complejos como cotizar, emitir, agregar coberturas y renovar se transforman en experiencias intuitivas paso a paso que reducen errores humanos.',
        sol3Html: '<strong class="bold-text-5">Tareas inteligentes y recordatorios automáticos</strong><br/>Los usuarios pueden automatizar seguimientos, como llamar a nuevos clientes o revisar renovaciones próximas.',
        sol4Html: '<strong class="bold-text-5">Modelo de datos unificado</strong><br/>Cuentas, pólizas, contactos, comisiones, documentos y oportunidades viven en un solo ecosistema.',
        sol5Html: '<strong class="bold-text-5">Priorización inmediata</strong><br/>La plataforma destaca: pólizas por vencer, siniestros, pendientes, deudas críticas, oportunidades abiertas.',
        sol6Html: '<strong class="bold-text-5">Diseñado para escalar</strong><br/>La arquitectura modular permite soportar operaciones de gran volumen y múltiples industrias sin perder claridad.',
        impactH: 'Impacto',
        impactBody1Html: '<strong>NICO transformó un flujo de trabajo manual y fragmentado en una plataforma clara y escalable adoptada en múltiples industrias.<br/>‍<br/></strong>Actualmente el sistema soporta:<br/>+20.000 personas protegidas, +25.000 activos asegurados, +10.000 pólizas bajo gestión activa.',
        impactBody2Html: '<strong class="bold-text-8">En 2024 NICO Insurance fue declarada </strong><strong><em class="italic-text-3">"Most Investable Startup"</em></strong><strong class="bold-text-8"> por Start-Up Chile.</strong>',
        impactBody3Html: '<strong>Las empresas destacan mejoras como:</strong>',
        imp1: 'Flujos de trabajo más rápidos y claros',
        imp2: 'Mejor gestión de renovaciones',
        imp3: 'Mejor cumplimiento y organización',
        imp4: 'Mayor transparencia operativa',
        imp5: 'Más tiempo para relaciones con clientes',
        imp6: 'Mayor confianza en las decisiones diarias',
        impactFinalHtml: '<strong>NICO continúa creciendo como una plataforma confiable y preparada para el futuro.</strong>',
        reviewsH: 'Algunos usuarios dijeron',
        r1name: 'Empresa de producción de alimentos',
        r1quote: '"Con acceso a todas las aseguradoras en Chile y reaseguros internacionales, podemos asegurar riesgos complejos."',
        r2name: 'Empresa minera',
        r2quote: '"NICO nos apoyó de principio a fin, desde la cotización hasta la implementación, ofreciendo soporte directo a cada trabajador."',
        r3name: 'Empresa constructora',
        r3quote: '"Para cada proyecto gestionamos múltiples pólizas y endosos de manera eficiente gracias a la plataforma unificada de NICO."',
        r4name: 'Empresa de software ERP',
        r4quote: '"Integramos la API de NICO y ahora nuestros clientes pueden gestionar seguros directamente dentro de nuestro ERP."',
        r5name: 'Empresa Proptech',
        r5quote: '"Junto a NICO creamos un producto de seguros exclusivo para nuestros usuarios, aumentando retención e ingresos."',
        r6name: 'Fundación sin fines de lucro',
        r6quote: '"NICO nos permite recibir contribuciones sin aumentar costos."',
        r7name: 'Operador de leasing',
        r7quote: '"Pasamos de un caos total a una gestión organizada de cartera con visibilidad sobre 20.000 activos financiados."',
        r8name: 'Administrador de fondo de inversión',
        r8quote: '"Con el software y soporte de NICO finalmente tenemos control sobre los seguros que protegen nuestras inversiones."',
        creditsHtml: '<strong>Compañia</strong> Nnodes<strong><br/>CTO</strong> Franco Restaino<br/><strong>Diseñador UX/UI </strong>Erika Pinedo<br/><strong>Desarrolladores</strong> Lowtjie Rivero, Diego Castro, Robert Parada.<br/><br/>- Todos los derechos reservados-',
        otherHeadingHtml: 'Otros <span class="span-txt">Proyectos</span>',
        seeAll: 'Ver todos',
        alessandriTitle: 'Rediseño de Plataforma Legal',
        alessandriDesc: 'Proyecto end-to-end basado en research con usuarios reales para simplificar flujos complejos y centralizar la gestión de información en la plataforma interna del estudio de abogados.<br/>',
        parrotfyTitle: 'Organización y Control para Empresas en Crecimiento',
        parrotfyDesc: 'Diseño de producto para un ERP enfocado en pymes que integra finanzas, inventarios, facturación y gestión de proyectos en una sola plataforma para simplificar la operación del negocio.<br/>',
        expTitle: 'Plataforma abogados',
        expDesc: 'Proyecto end-to-end basado en research con usuarios reales para simplificar flujos complejos y centralizar la gestión de información en la plataforma interna del estudio de abogados.<br/>',
        knowMore: 'Conocer más',
      },
      parrotfyProjectPage: {
        meta: {
          title: 'Parrotfy · Diseño UX/UI de ERP para PYMEs – Erika Pinedo',
          description: 'Diseño UX/UI de Parrotfy: ERP todo en uno para PYMEs que centraliza cotizaciones, ventas, pagos, órdenes de trabajo y facturación en un solo flujo de trabajo.',
          ogTitle: 'Parrotfy · Diseño UX/UI de ERP para PYMEs – Erika Pinedo',
          ogDescription: 'Diseño UX/UI de Parrotfy: ERP todo en uno para PYMEs que centraliza cotizaciones, ventas, pagos, órdenes de trabajo y facturación en un solo flujo de trabajo.',
          twitterTitle: 'Parrotfy · Diseño UX/UI de ERP para PYMEs – Erika Pinedo',
          twitterDescription: 'Diseño UX/UI de Parrotfy: ERP todo en uno para PYMEs que centraliza cotizaciones, ventas, pagos, órdenes de trabajo y facturación en un solo flujo de trabajo.',
        },
        back: 'Volver',
        heroH1Html: 'ERP, software que integra y automatiza <em class="italic-text-2"> los procesos</em>',
        heroSub: 'Diseño UX/UI end-to-end desde cero',
        contextTitleHtml: '<strong class="bold-text-4">Para delegar y controlar </strong><strong class="bold-text-9">tu empresa en un solo lugar</strong>',
        contextBody: 'Parrotfy es una plataforma ERP todo en uno diseñada para ayudar a las pequeñas y medianas empresas a organizar sus operaciones con claridad, estructura y eficiencia. La plataforma centraliza cotizaciones, ventas, pagos, órdenes de trabajo, programación, comercio electrónico y facturación dentro de un solo entorno moderno.',
        problemH: 'El desafio',
        problemBodyHtml: 'Las pequeñas empresas a menudo operan con una mezcla de hojas de cálculo, software básico y herramientas desconectadas. <br/><br/>A medida que los equipos crecen y los flujos de trabajo se vuelven más complejos, esta configuración fragmentada ralentiza las operaciones, crea inconsistencias y dificulta que los propietarios comprendan lo que está sucediendo en toda la empresa.<br/><br/><strong>El desafío era crear una plataforma que brindara claridad, estructura y visibilidad real en cada etapa de la operación.</strong>',
        prob1Title: 'Diferentes Herramientas',
        prob1Body: 'Los procesos clave existían en diferentes sistemas, obligando a los equipos a saltar entre plataformas para gestionar ventas, pagos, programación y operaciones.',
        prob2Title: 'Visibilidad Limitada',
        prob2Body: 'No había una vista unificada del estado de los pedidos, la actividad financiera o el rendimiento del equipo, lo que hacía que la toma de decisiones fuera lenta y reactiva.',
        prob3Title: 'Flujos de Trabajo Manuales y Propensos a Errores',
        prob3Body: 'Las hojas de cálculo y los procesos informales creaban retrasos, esfuerzos duplicados y errores frecuentes.',
        prob4Title: 'Difícil de Escalar',
        prob4Body: 'A medida que la empresa crecía, su estructura administrativa seguía siendo básica, lo que hacía imposible apoyar la creciente demanda y la colaboración del equipo.',
        persona1ImgSrc: '../imagenes/es-user-persona-2.webp',
        persona1ImgSrcset: '../imagenes/es-user-persona-2-p-500.webp 500w, ../imagenes/es-user-persona-2-p-800.png 800w, ../imagenes/es-user-persona-2-p-1080.png 1080w, ../imagenes/es-user-persona-2-p-1600.png 1600w, ../imagenes/es-user-persona-2-p-2000.png 2000w, ../imagenes/es-user-persona-2-p-2600.png 2600w, ../imagenes/es-user-persona-2.webp 2686w',
        persona1ImgAlt: 'Perfil de Sofía Farías, emprendedora de 50 años en Santiago, con metas, frustraciones, personalidad y breve historia.',
        persona2ImgSrc: '../imagenes/es-user-persona-1.webp',
        persona2ImgSrcset: '../imagenes/es-user-persona-1-p-500.webp 500w, ../imagenes/es-user-persona-1-p-800.webp 800w, ../imagenes/es-user-persona-1-p-1080.png 1080w, ../imagenes/es-user-persona-1-p-1600.png 1600w, ../imagenes/es-user-persona-1-p-2000.png 2000w, ../imagenes/es-user-persona-1-p-2600.png 2600w, ../imagenes/es-user-persona-1.webp 2686w',
        persona2ImgAlt: 'Perfil de Claudio Muñoz, emprendedor de 30 años en Santiago, con metas y frustraciones sobre crecimiento y clientes.',
        personaSubtitle: 'Debido a la gran versatilidad que queríamos ofrecer en Parrotfy, contamos con dos perfiles principales con prioridades diferentes.',
        approachH: 'El Enfoque',
        approachBody1Html: 'Para unificar la experiencia, el ciclo de vida del negocio se mapeó en un flujo continuo:<br/><strong>Cotización → Venta → Programar → Ejecutar → Entregar → Cobrar</strong><br/>‍<br/>Esta estructura sirve como la columna vertebral de la navegación de Parrotfy y ayuda a conectar ventas, producción y administración en un solo flujo de trabajo.',
        approachBody2: 'El diseño se basó en tres pilares:',
        approach1Title: 'Simplificar la complejidad',
        approach1Body: 'Transformar procesos operativos de múltiples pasos en flujos de trabajo claros y estructurados.',
        approach2Title: 'Apoyar la colaboración',
        approach2Body: 'Permitir que los miembros del equipo participen en el seguimiento y ejecución de tareas.',
        approach3Title: 'Construir para escalar',
        approach3Body: 'Diseñar un sistema modular que crezca con el negocio y se adapte a nuevas industrias y flujos de trabajo.',
        solutionH: 'La Solución',
        solutionBody: 'Parrotfy organiza toda la operación de un pequeño negocio en un flujo de trabajo claro y conectado. Cada módulo fue diseñado para reflejar tareas reales y hacer el trabajo diario más simple.',
        sol1Html: '<strong class="text-solution-parrotfy">Cotización</strong><br/>Crea y comparte cotizaciones rápidamente con un flujo guiado y estandarizado.',
        sol2Html: '<strong class="text-solution-parrotfy">Órdenes de Trabajo</strong><br/>Rastrea cada etapa de un proceso de servicio o producción con claridad.',
        sol3Html: '<strong class="text-solution-parrotfy">Programación</strong><br/>Un calendario que ayuda a los equipos a coordinar citas y carga de trabajo.',
        sol4Html: '<strong class="text-solution-parrotfy">Pagos</strong><br/>Recibe y rastrea pagos en línea en un solo lugar.',
        sol5Html: '<strong class="text-solution-parrotfy">Clientes</strong><br/>Información centralizada de clientes compartida entre todos los departamentos.',
        sol6Html: '<strong class="text-solution-parrotfy">Facturación (SII)</strong><br/>Emite facturas y documentos sin salir de la plataforma.',
        impactH: 'Impacto',
        impactBodyHtml: '<strong class="bold-text-10">Parrotfy ayudó a las empresas a pasar de hojas de cálculo y flujos de trabajo manuales a un sistema estructurado, colaborativo y escalable.</strong>‍',
        imp1Html: '<strong>Mayor visibilidad</strong><br/>Seguimiento claro de pedidos, producción y pagos.',
        imp2Html: '<strong>Mejor colaboración</strong><br/>Equipos de ventas, facturación, producción y servicio trabajando en el mismo flujo.',
        imp3Html: '<strong>Más productividad</strong><br/>Los procesos estandarizados redujeron errores y ahorraron tiempo.',
        imp4Html: '<strong>Preparados para el crecimiento</strong><br/>Un sistema que soporta una mayor demanda sin perder el orden.',
        imp5Html: '<strong>Fácil adopción</strong><br/>Los usuarios describieron Parrotfy como simple, práctico y rápido de aprender.',
        impactFinalHtml: '<strong class="bold-text-11">Una plataforma que aporta orden, claridad y control a los negocios en crecimiento.</strong>',
        reviewsH: 'Algunos usuarios dijeron',
        r1Html: '<strong>Kaupsaur<br/></strong>Oscar Schmitt - Gerente General',
        r1quote: '"Parrotfy es simple, práctico y amigable. Toda nuestra empresa lo utiliza, desde ventas hasta facturación, inventario y servicio técnico. Las cotizaciones son rápidas, estandarizadas y fáciles de compartir. Como gerente, confío en él a diario para ver los volúmenes de ventas y el estado de las cuentas. La incorporación fue fácil y bien apoyada."',
        r2Html: '<strong>Sergafel<br/></strong><strong><em class="italic-text-7">Luis San Martín</em></strong>',
        r2quote: '"Es notablemente más fácil de usar que otros sistemas que probamos. Parrotfy ayudó a todo el equipo, especialmente a producción, a tener un mejor control del tiempo y los procesos."',
        r3Html: '<strong>SportsTech<br/></strong><em>Jorge Naranjo</em>',
        r3quote: '"Excel no puede soportar el crecimiento. Parrotfy refleja el movimiento real de nuestro negocio y permite al equipo rastrear cada paso de un pedido. Organiza cotizaciones, producción, capacitación y pago. El flujo de trabajo está bien diseñado y lo recomiendo al 100%."',
        creditsHtml: '<strong>Compañia</strong> Nnodes<strong><br/>CTO </strong>Franco Restaino, Pablo Caviedes<strong><br/>Diseñador UX/UI </strong>Erika Pinedo<strong><br/>Desarrolladores </strong>Sebastian Ulloa, Natalia Muñoz, Sebastian Rojas<br/><br/>- Todos los derechos reservados-',
        otherHeadingHtml: 'Otros <span class="span-txt">Proyectos</span>',
        seeAll: 'Ver todos',
        nicoTitle: 'Plataforma de Seguros desde Cero',
        nicoDesc: 'Diseño de un SaaS B2B para corredores de seguros que unifica la gestión de pólizas, clientes y renovaciones en un solo sistema, mejorando la visibilidad y control de sus operaciones.<br/>',
        alessandriTitle: 'Rediseño de Plataforma Legal',
        alessandriDesc: 'Proyecto end-to-end basado en research con usuarios reales para simplificar flujos complejos y centralizar la gestión de información en la plataforma interna del estudio de abogados.<br/>',
        expTitle: 'Plataforma abogados',
        expDesc: 'Proyecto end-to-end basado en research con usuarios reales para simplificar flujos complejos y centralizar la gestión de información en la plataforma interna del estudio de abogados.<br/>',
        knowMore: 'Conocer más',
      },
      expedienteProjectPage: {
        meta: {
          title: 'E-xpediente · Diseño UX/UI para Gestión Digital de Arbitrajes y Mediaciones | Erika Pinedo',
          description: 'Caso de diseño UX/UI end-to-end: E-xpediente, plataforma legaltech que digitaliza la gestión de arbitrajes y mediaciones para abogados. Expediente virtual, acceso remoto seguro y notificaciones automáticas.',
          ogTitle: 'E-xpediente · Diseño UX/UI para Gestión Digital de Arbitrajes y Mediaciones | Erika Pinedo',
          ogDescription: 'Caso de diseño UX/UI end-to-end: E-xpediente, plataforma legaltech que digitaliza la gestión de arbitrajes y mediaciones para abogados. Expediente virtual, acceso remoto seguro y notificaciones automáticas.',
          twitterTitle: 'E-xpediente · Diseño UX/UI para Gestión Digital de Arbitrajes y Mediaciones | Erika Pinedo',
          twitterDescription: 'Caso de diseño UX/UI end-to-end: E-xpediente, plataforma legaltech que digitaliza la gestión de arbitrajes y mediaciones para abogados. Expediente virtual, acceso remoto seguro y notificaciones automáticas.',
        },
        back: 'Volver',
        heroH1Html: 'Arbitraje y mediación legal, <em class="italic-text-2">simple y seguro</em>',
        heroSub: 'Diseño UX/UI end-to-end desde cero',
        contextTitleHtml: '<strong>El proceso legal es complejo. </strong><strong><em class="italic-text-9">La gestión no tiene por qué serlo también.</em></strong>',
        contextBody: 'Por eso se creo E-xpediente, un software que te permite desarrollar <strong><em>digitalmente</em></strong> el procedimiento, gestionando arbitrajes y mediaciones de manera fácil y segura, de principio a fin, manteniendo todo organizado en el e-book.',
        problemH: 'El desafio',
        problemBodyHtml: 'Muchos abogados enfrentan desafíos significativos al gestionar manualmente casos privados. Esta tarea complica la transparencia y la organización, ya que acceder a los documentos necesarios implica manejar montones de papel, y contactar a todos los involucrados se convierte en una dificultad adicional. <br/><br/><strong>Para abordar estos problemas, nuestro cliente decidió crear una solución digital que inicialmente solo se aplicaba a casos públicos.</strong>',
        prob1Title: 'Gestión ineficiente de documentos físicos',
        prob1Body: 'Mantener el expediente en papel implicaba buscar documentos entre carpetas, perder versiones actualizadas y depender de la presencia física para acceder a información crítica del caso.',
        prob2Title: 'Comunicación y coordinación limitadas',
        prob2Body: 'Coordinar árbitros, mediadores y partes involucradas a través de correos y llamadas generaba demoras, confusión sobre acuerdos tomados y falta de trazabilidad en el proceso.',
        prob3Title: 'Seguridad de la información y confidencialidad',
        prob3Body: 'Los documentos físicos y los correos no ofrecen control real sobre quién accede a qué. En un proceso arbitral, esa falta de control representa un riesgo legal y ético para todas las partes.',
        solutionH: 'La Solución',
        solutionBody: 'Una plataforma integral que aborda múltiples aspectos de la gestión legal, facilitando la digitalización y organización de documentos.<br/><br/>La plataforma ofrece una variedad de herramientas, incluyendo:',
        sol1Html: '<strong class="title-item-solution-expediente">Digitalización de documentos</strong><br/>Todos los archivos del expediente se cargan y organizan en la plataforma, eliminando el papel del proceso y permitiendo acceder a cualquier documento en segundos, desde cualquier lugar.',
        sol2Html: '<strong class="title-item-solution-expediente">Notificaciones automáticas</strong><br/>La plataforma avisa a cada parte cuando hay una acción pendiente, un plazo próximo o un documento nuevo. <em>Sin depender de recordatorios manuales ni correos que se pierden.</em>',
        sol3Html: '<strong class="title-item-solution-expediente">Acceso remoto seguro</strong><br/>Árbitros, mediadores y partes ingresan a la plataforma desde cualquier dispositivo, con acceso controlado según su rol en el proceso y sin exponer información sensible.',
        solutionFinalHtml: '<strong class="title-item-solution-expediente">Mejorando así la colaboración, la eficiencia operativa y la seguridad de la información para abogados y sus clientes.</strong>',
        impactH: 'Impacto',
        imp1Title: 'Digitalizar',
        imp1Body: 'Los usuarios de la plataforma podrán ver todas sus arbitrajes y mediaciones 100% de forma digital. Adaptándose a los nuevos desafíos de Legaltech.',
        imp2Title: 'Ordenar',
        imp2Body: 'Podrán ver de manera clara, cronológica y automática el expediente virtual.',
        imp3Title: 'Acelerar',
        imp3Body: 'El proceso de sus casos será mucho más fácil y rápido, logrando una mejor relación con las partes.',
        imp4Title: 'Eficiencia',
        imp4Body: 'Envía notificaciones automáticas a las direcciones de correo electrónico correspondientes.',
        imp5Title: 'Transparencia',
        imp5Body: 'Todos los participantes de la causa tienen acceso a ella desde cualquier parte del mundo. Una vez realizada la actuación, se registra y no puede ser modificada.',
        imp6Title: 'Seguridad',
        imp6Body: 'Almacenamiento de datos del expediente en la nube, con acceso exclusivo para quienes forman parte del caso.',
        creditsHtml: '<strong>Compañía</strong> Nnodes<strong><br/>CTO</strong> Franco Restaino<br/><strong>Diseñador UX/UI </strong>Erika Pinedo<br/><strong>Desarrolladores</strong> Juan Hayashi<br/><br/>- Todos los derechos reservados-',
        otherHeadingHtml: 'Otros <span class="span-txt">Proyectos</span>',
        seeAll: 'Ver todos',
        alessandriTitle: 'Rediseño de Plataforma Legal',
        alessandriDesc: 'Proyecto end-to-end basado en research con usuarios reales para simplificar flujos complejos y centralizar la gestión de información en la plataforma interna del estudio de abogados.<br/>',
        parrotfyTitle: 'Organización y Control para Empresas en Crecimiento',
        parrotfyDesc: 'Diseño de producto para un ERP enfocado en pymes que integra finanzas, inventarios, facturación y gestión de proyectos en una sola plataforma para simplificar la operación del negocio.<br/>',
        nicoTitle: 'Plataforma de Seguros desde Cero',
        nicoDesc: 'Diseño de un SaaS B2B para corredores de seguros que unifica la gestión de pólizas, clientes y renovaciones en un solo sistema, mejorando la visibilidad y control de sus operaciones.<br/>',
        knowMore: 'Conocer más',
      },
    },
    en: {
      meta: {
        title: 'UX/UI Designer Chile · B2B & SaaS – Erika Pinedo',
        description:
          'Certified UX/UI designer with 5+ years in B2B and SaaS products. I turn ideas into clear, intuitive digital experiences. Based in Santiago, Chile.',
        ogTitle: 'UX/UI Designer Chile · B2B & SaaS – Erika Pinedo',
        ogDescription:
          'Certified UX/UI designer with 5+ years in B2B and SaaS products. I turn ideas into clear, intuitive digital experiences. Based in Santiago, Chile.',
        twitterTitle: 'UX/UI Designer Chile · B2B & SaaS – Erika Pinedo',
        twitterDescription:
          'Certified UX/UI designer with 5+ years in B2B and SaaS products. I turn ideas into clear, intuitive digital experiences. Based in Santiago, Chile.',
      },
      links: {
        contact: 'contact.html',
        about: 'about-me-erika-pinedo.html',
        portfolio: 'portfolio.html',
        projectAlessandri: 'project-alessandri.html',
        projectNico: 'project-nico-seguros.html',
        projectParrotfy: 'project-parrotfy.html',
        projectExpediente: 'project-expediente.html',
        linkedin: 'https://www.linkedin.com/in/erika-pinedo-camacho/?locale=en_US',
      },
      hero: {
        line1: 'I transform ideas into ',
        line2: 'digital products',
        sub:
          'An expert in B2B and SaaS, helping small and large companies turn ideas into intuitive and engaging experiences.',
        knowMore: 'Know more',
        seeProjects: 'See projects',
      },
      logos: {
        caption: 'Freelance and corporate clients',
      },
      gallery: {
        matchminder:
          'MatchMinders website inviting users to unleash their competitive spirit, with buttons to play or organize, platform description, and sport selection for tournaments.',
        fastpass:
          'FastPass website showing optimized and secure school access, benefits, success stories, and FAQs.',
        bluesphere:
          'Security management platform interface with critical and high risk scores, trend charts, and IT asset vulnerability lists.',
        urbana:
          'Two phones showing the Urbana Administración mobile app with monthly expense details and up-to-date account status.',
      },
      about: {
        imgAlt:
          'Young woman with long curly dark hair smiling, wearing gold earrings and a black shirt, pink background.',
        greeting: 'Hey there!, i&#x27;m <strong>Erika Pinedo</strong>',
        p1:
          '<strong><em>Certified UX/UI graphic designer</em></strong> with over 5 years of experience in digital product design and over 9 years in the design industry. <br/><br/>I specialize in custom software design, primarily B2B and SaaS products, and possess strong self-management skills and the ability to lead end-to-end projects.',
        p2:
          '<strong>I have worked with innovative startups such as NICO Seguros and major brands such as Alessandri Abogados and Banco Falabella.</strong>',
        cta: 'Lets talk!',
      },
      vip: {
        heading: 'Featured <span class="span-italic-txt">Projects</span>',
        alessandriTitle: 'Legal Platform Redesign',
        alessandriDesc:
          'An end-to-end project based on research with real users to simplify complex workflows and centralize information management on the law firm’s internal platform.<br/>',
        nicoTitle: 'Insurance Platform from Scratch',
        nicoDesc:
          'Design of a B2B SaaS platform for insurance brokers that consolidates policy, client, and renewal management into a single system, improving visibility and control over their operations.<br/>',
        parrotfyTitle: 'Organization and Control for Growing Businesses',
        parrotfyDesc:
          'Product design for an ERP system tailored to small and medium-sized businesses that integrates finance, inventory, billing, and project management into a single platform to streamline business operations.<br/>',
        knowMore: 'Know more',
      },
      services: {
        heading: 'My <span class="span-txt">Services</span>',
        intro:
          'I design digital and visual solutions that combine strategy, usability, and aesthetics to deliver tangible results. I work on projects from start to finish: from concept and research through to implementation and ongoing optimization.',
        uxBody:
          '<strong>I design clear, intuitive, and scalable digital products that are focused on users and business objectives.</strong><br/>‍<br/>- Research and problem definition<br/>- Information architecture and user flows<br/>- Wireframes and prototypes in Figma<br/>- Design system<br/>- Conversion and user experience optimization',
        brandingBody:
          '<strong>I create cohesive visual identities that convey value, personality, and a unique identity.</strong><br/>‍<br/>- Logo design and visual identity<br/>- Graphic systems and style guides<br/>- Digital applications and materials',
        presentationsTitle: 'Presentations',
        presentationsBody:
          '<strong>I create visual presentations that communicate complex ideas clearly and effectively.</strong><br/>‍<br/>- Pitch decks for startups and investors<br/>- Corporate and sales presentations<br/>- Visual storytelling and narrative structure<br/><em><br/>Delivery of designs in PowerPoint or Figma slides</em>',
        contact: 'Contact me',
      },
      finalCta: {
        heading: 'Your next project<span class="text-span-17"><br/>starts here</span>',
        sub:
          'I work with startups and companies to design clear, functional digital products built to scale. If you have an idea, a product in development, or a platform that needs improvement, let’s talk.',
        btn: 'Lets Talk!',
      },
      nav: {
        home: 'Home',
        about: 'About Me',
        portfolio: 'Portfolio',
        cta: 'Lets Talk!',
        dropdown: 'Dropdown',
        link1: 'Link 1',
        link2: 'Link 2',
        link3: 'Link 3',
      },
      footer: {
        tagline: 'I transform ideas into <em>digital products</em>',
        linksHeading: 'Links',
        contactHeading: 'Contact me',
        copyright:
          '©2026 Otro Ángulo Web. All rights reserved. Created by Erika Pinedo with 💗',
      },
      aboutPage: {
        "meta": {
          "title": "Erika Pinedo · UX/UI Designer Chile",
          "description": "Meet Erika Pinedo: certified UX/UI designer with 5+ years in B2B and SaaS. Specialized in user research, design systems, and branding. Based in Santiago, Chile.",
          "ogTitle": "Erika Pinedo · UX/UI Designer Chile",
          "ogDescription": "Meet Erika Pinedo: certified UX/UI designer with 5+ years in B2B and SaaS. Specialized in user research, design systems, and branding. Based in Santiago, Chile.",
          "twitterTitle": "Erika Pinedo · UX/UI Designer Chile",
          "twitterDescription": "Meet Erika Pinedo: certified UX/UI designer with 5+ years in B2B and SaaS. Specialized in user research, design systems, and branding. Based in Santiago, Chile."
        },
        "heroImgAlt": "Young woman with long curly dark hair smiling, wearing gold earrings and a black shirt, pink background.",
        "heroIntro": "<strong><em>Certified UX/UI graphic designer,</em></strong> with over 5 years of experience in digital product design and over 9 years in the design industry.",
        "count1": "end-to-end projects<br/>successfully delivered",
        "count2": "years in UX/UI and<br/>over 9 years in design",
        "count3": "A desire to grow and create",
        "skillsHeadingHtml": "My <span class=\"span-txt\">Skills</span>",
        "skillsIntro": "I contribute across multiple areas: strategy, research, and the design of interfaces and visual systems that actually work.",
        "s1t": "Adaptability",
        "s1b": "The ability to respond quickly to changes in context, priorities, or feedback.",
        "s2t": "Teamwork",
        "s2b": "Seamless collaboration among leaders, developers, and stakeholders in agile environments.",
        "s3t": "User Research",
        "s3b": "Interviews, analysis, and validation with real users to inform well-founded decisions.",
        "s4t": "Information Architecture",
        "s4b": "Logical structures, workflows, and wireframes designed with user clarity in mind.",
        "s5t": "UI Design",
        "s5b": "Clean, consistent, and scalable visual interfaces aligned with business needs.",
        "s6t": "Design Systems",
        "s6b": "Components and tokens that create a consistent experience across products.",
        "s7t": "Prototyping",
        "s7b": "Interactive prototype ready for clients and developers.",
        "s8t": "Accessibility",
        "s8b": "Inclusive design and WCAG standards",
        "s9t": "Branding",
        "s9b": "Visual Identity Development",
        "s10t": "Responsive Design",
        "s10b": "Consistent experiences across web, desktop, and mobile from the very start.",
        "s11t": "Range",
        "s11b": "Ability to manage one's own time, priorities, and deliverables without the need for constant supervision.<br/>",
        "s12t": "Punctuality and Commitment",
        "s12b": "Meeting deadlines and delivering with reliability and consistency.<br/>",
        "toolsHeadingHtml": "My <span class=\"span-txt\">Tools</span>",
        "toolsIntro": "The tools I use allow me to build comprehensive and cohesive digital products.",
        "toolsAi": "<strong>- Claude, Chat GPT: </strong>Analysis, Synthesis, and Ideation<br/>‍<br/><strong>- V0, Stitch, Figma Make, Lovable:</strong>Visual exploration<br/><br/><strong>- Nano Banano: </strong>Image generation<br/>",
        "toolsDesign": "<strong>- Figma: </strong>Design and handoff<br/>‍<br/><strong>- Illustrator: </strong>Vector graphics<br/><br/><strong>- Photoshop: </strong>Image editing<br/><br/><strong>- Jitter: </strong>UI Animations<br/>",
        "toolsResearch": "<strong>- Hotjar: </strong>Heatmaps and sessions<br/>‍<br/><strong>- Useberry: </strong>Usability tests<br/>",
        "toolsWeb": "<strong>- Webflow: </strong>No-code development<br/>‍<br/><strong>- HTML / CSS: </strong>Front-end Fundamentals<br/><br/><strong>- React: </strong>UI Components<br/><br/><strong>- Git: </strong>Version control<br/>",
        "eduHeadingHtml": "Education",
        "eduIntro": "Training is essential for growth.",
        "eduLblCourse": "Course",
        "eduLblCert": "Certified",
        "eduLblUniv": "University",
        "e1t": "AI for Designers",
        "e1m": "2026. Nelson Rodríguez-Peña.",
        "e2t": "Practical Workshop on Metrics",
        "e2m": "2024. Sol Mesz.<br/>",
        "e3t": "Metrics and Design",
        "e3m": "2024. Sol Mesz.<br/>",
        "e4t": "Mobile UI Design",
        "e4m": "2023. Interaction design Foundation.<br/>",
        "e5t": "Product manager",
        "e5m": "2022. CoderHouse.<br/>",
        "e6t": "Inclusive Design for Digital Platforms",
        "e6m": "2021. Universidad del Desarrollo.<br/>",
        "e7t": "Certified as a UX/UI Designer",
        "e7m": "2021. Digital Talent.<br/>",
        "e8t": "Graphic Design Program",
        "e8m": "2012-2014. Instituto de Diseño Charles Worth.<br/>"
      },
      portfolioPage: {
        "meta": {
          "title": "Portfolio · UX/UI Design for Digital Products – Erika Pinedo",
          "description": "End-to-end UX/UI design case studies: SMB ERP, B2B insurance SaaS, and legal management platform redesign. Real projects by Erika Pinedo, UX/UI designer based in Chile.",
          "ogTitle": "Portfolio · UX/UI Design for Digital Products – Erika Pinedo",
          "ogDescription": "End-to-end UX/UI design case studies: SMB ERP, B2B insurance SaaS, and legal management platform redesign. Real projects by Erika Pinedo, UX/UI designer based in Chile.",
          "twitterTitle": "Portfolio · UX/UI Design for Digital Products – Erika Pinedo",
          "twitterDescription": "End-to-end UX/UI design case studies: SMB ERP, B2B insurance SaaS, and legal management platform redesign. Real projects by Erika Pinedo, UX/UI designer based in Chile."
        },
        "pageHeadingHtml": "<em>Portfolio</em>",
        "expTitle": "E-xpediente",
        "expSubtitle": "Lawyers platform",
        "expDesc": "End-to-end UX/UI project for a virtual case file experience: causes, downloadable PDFs, and a clear timeline of movements for legal teams.<br/>",
        "expImgAlt": "Virtual case file interface showing cases, PDF documents for download, and recent activity.",
        "bluesphereTitle": "Cybersecurity Platform for SMBs",
        "bluesphereDesc": "UX/UI design of a cloud-native platform integrating 24/7 SOC monitoring, vulnerability management, and operational resilience for small and medium-sized businesses.<br/>",
        "bluesphereImgAlt": "BlueSphere interface showing cybersecurity monitoring dashboard with risk scores and threat alerts.",
        "playersnapTitle": "Sports Media Digital Asset Management Platform",
        "playersnapDesc": "UX/UI design of an AI-powered SaaS for sports organizations, centralizing media asset management, intelligent search, and real-time distribution to media partners.<br/>",
        "playersnapImgAlt": "PlayerSnap interface showing digital asset management dashboard for sports organizations."
      },
      alessandriProjectPage:       {
        "meta": {
          "title": "AlessandriPI · Legal Operations Platform UX/UI Redesign – Erika Pinedo",
          "description": "End-to-end UX/UI redesign: an internal legal management platform for 40,000+ clients across trademarks, patents, litigation, and domains. Research with 32 users across 7 sprints.",
          "ogTitle": "AlessandriPI · Legal Operations Platform UX/UI Redesign – Erika Pinedo",
          "ogDescription": "End-to-end UX/UI redesign: an internal legal management platform for 40,000+ clients across trademarks, patents, litigation, and domains. Research with 32 users across 7 sprints.",
          "twitterTitle": "AlessandriPI · Legal Operations Platform UX/UI Redesign – Erika Pinedo",
          "twitterDescription": "End-to-end UX/UI redesign: an internal legal management platform for 40,000+ clients across trademarks, patents, litigation, and domains. Research with 32 users across 7 sprints."
        },
        "back": "Back",
        "heroH1Html": "Redesign of the <em class=\"italic-text-2\">internal legal operations platform</em>",
        "heroSub": "End-to-End Project",
        "contextTitleHtml": "<strong class=\"bold-text-4\">From </strong><strong class=\"bold-text-9\">Chaos</strong><strong class=\"bold-text-4\"> to Order</strong>",
        "contextBody": "A complete overhaul of the user experience (UX) and user interface (UI) of a core internal system used to manage trademarks, patents, legal cases, domain names, and renewals for more than 40,000 clients.<br/><br/>This project redesigns AlessBO, the internal system used for over four years at “Estudio Alessandri,” transforming it into AlessandriPI, a modern, reliable, and efficient platform tailored to demanding legal workflows.<br/><br/>The redesign focuses on four pillars: clarity, automation, reliability, and operational speed. It involved extensive research with 32 users in different roles, identifying key pain points such as unreliable searches, fragmented data, excessive manual work, and a lack of trust in the system.",
        "gal1Alt": "Pantalla de sistema de gestión con Ficha Corresponsal de Cencosud y lista de marcas registradas con sus números de solicitud, países y estados.",
        "gal2Alt": "Ficha corresponsal activo de Netflix en Estados Unidos con dirección en Los Angeles, California, detalles de responsables, abogados principales y adjuntos.",
        "gal3Alt": "Panel de control de Alessandri PI mostrando fechas fatales para marcas, patentes y juicios, con alertas de vencidos y próximos en un calendario, y listados de casos con colores rojo para fechas próximas y verde para completados.",
        "phase1": "Phase 1",
        "teamLabel": "Team",
        "teamHtml": "<em class=\"italic-text-5\">1 project manager, 3 developers, 1 UX/UI designer</em>",
        "designLabel": "Design",
        "totalLabel": "Total",
        processImgSrc: '../imagenes/group-9113.webp',
        processImgSrcset: '../imagenes/group-9113-p-500.webp 500w, ../imagenes/group-9113-p-800.webp 800w, ../imagenes/group-9113-p-1080.webp 1080w, ../imagenes/group-9113.webp 1269w',
        key1ImgSrc: '../imagenes/frame-91970.webp',
        key1ImgSrcset: '../imagenes/frame-91970-p-500.webp 500w, ../imagenes/frame-91970.webp 557w',
        key2ImgSrc: '../imagenes/frame-91971.webp',
        key2ImgSrcset: '../imagenes/frame-91971-p-500.webp 500w, ../imagenes/frame-91971.webp 557w',
        key3ImgSrc: '../imagenes/frame-91972.webp',
        key3ImgSrcset: '../imagenes/frame-91972-p-500.webp 500w, ../imagenes/frame-91972-p-800.webp 800w, ../imagenes/frame-91972-p-1080.webp 1080w, ../imagenes/frame-91972.webp 1174w',
        sol1ImgSrc: '../imagenes/8alessandri-erika-pinedo-4.webp',
        sol1ImgSrcset: '',
                        sol2ImgSrc: '../imagenes/8alessandri-erika-pinedo-2-2.webp',
                sol2ImgSrcset: '../imagenes/8alessandri-erika-pinedo-2-p-500-2.webp 500w, ../imagenes/8alessandri-erika-pinedo-2-p-800-2.webp 800w, ../imagenes/8alessandri-erika-pinedo-2-p-1080-2.webp 1080w, ../imagenes/8alessandri-erika-pinedo-2-2.webp 1442w',
                sol3ImgSrc: '../imagenes/8alessandri-erika-pinedo-1-2.webp',
                sol3ImgSrcset: '../imagenes/8alessandri-erika-pinedo-1-p-500-2.webp 500w, ../imagenes/8alessandri-erika-pinedo-1-p-800-2.webp 800w, ../imagenes/8alessandri-erika-pinedo-1-p-1080-2.webp 1080w, ../imagenes/8alessandri-erika-pinedo-1-2.webp 1442w',
        "processHeadingHtml": "Design <strong><em class=\"italic-text-6\">process</em></strong>",
        "processImgAlt": "Process diagram showing research with interviews of 32 real users, empathy to define real problems, ideation for clarity and control, ongoing communication with the development team, high-fidelity prototyping and flow validation, and user feedback in each sprint.",
        "problemH": "The Challenge",
        "problemIntro": "The research and analysis revealed that the challenges were not caused by a single issue, but by a critical combination of factors:",
        "prob1": "Information broken down by module",
        "prob2": "An inflexible and ineffective search",
        "prob3": "Reports that are difficult to generate and validate",
        "prob4": "Lack of a reliable deadline alert system, increasing operational risk and the need for manual oversight",
        "prob5": "Low confidence in system data for decision-making",
        "prob6": "Many repetitive tasks performed manually",
        "keyInsightsH": "Key insights",
        "key1Alt": "70% of respondents find report generation the most complex or frustrating task in AlessBO currently.",
        "key2Alt": "Confidence in information provided by AlessBO for decision-making: score 4.53 out of 10 with low system reliability and constant need for manual comparisons in Excel.",
        "key3Alt": "Question on how long it takes to gather necessary client information, with an estimated average of 24 minutes for 78.1% of users and additional breakdowns by time ranges.",
        "picAlt": "Person using a laptop with a table of web domains and color-coded expiration dates.",
        "solutionH": "The Solution",
        "solutionBody": "AlessandriPI is redefining how the firm organizes and accesses legal information, prioritizing structure, clarity, and the reduction of operational friction.<br/><br/>The most significant change was redefining the platform’s core architecture. In AlessBO, legal entities (trademarks, patents, domains, and litigation) were linked in isolation, fragmenting information and making it difficult to understand a client’s full picture.<br/><br/>In AlessandriPI, the model is reversed: <strong>the client becomes the central container, housing all related legal entities.</strong>",
        "sol1Alt": "Company dashboard screen showing summary information, trademarks, patents, litigation, and domains with status and expiration details.",
        "sol2Alt": "Alessandri PI dashboard with sections for key dates, internal deadlines, follow-ups, and pending approvals for trademarks, patents, litigation, and domains.",
        "sol3Alt": "Web interface for patent management with a table of applications, countries, owners, types, statuses, registration and expiration dates, filters, and report creation; includes detailed patent record view with information, events, and notes.",
        "impactH": "Expected results",
        "impactIntro": "<strong>The main goal is to improve how legal teams access, understand, and use information, thereby reducing friction and operational risk.</strong>",
        "imp1": "Reduced time required to collect complete customer information",
        "imp2": "Less reliance on Excel and external validations",
        "imp3": "Improved clarity and structure of information for reviews and meetings",
        "imp4": "Greater confidence in system data for decision-making",
        "imp5": "Risks associated with critical deadlines",
        "wireAlt": "Several screenshots of a web application for managing trademarks, companies, and patents with tables, filters, and options to edit information.",
        "mailsAlt": "Three AlessandriPI interface screens: password recovery with red button, document pending approval notification with red button, and weekly summary with data and button to access AlessandriPI.",
        "creditsHtml": "<strong>Company</strong> Nnodes<strong><br/>Project Lead </strong>Pablo Gajardo<br/><strong>Sr. UX/UI Designer </strong>Erika Pinedo<br/><strong>Developers</strong> Benjamin, Joaquin, Pablo Gajardo.<br/><br/>- All rights reserved -",
        "otherHeadingHtml": "Other <span class=\"span-txt\">Projects</span>",
        "seeAll": "See all"
      },
      contactPage: {
        meta: {
          title: "Contact · Let's Talk About Your Digital Project – Erika Pinedo",
          description: "Got a project in mind? Tell me your idea and let's work together. UX/UI designer in Chile specializing in digital products, SaaS, and ERP platforms.",
          ogTitle: "Contact · Let's Talk About Your Digital Project – Erika Pinedo",
          ogDescription: "Got a project in mind? Tell me your idea and let's work together. UX/UI designer in Chile specializing in digital products, SaaS, and ERP platforms.",
          twitterTitle: "Contact · Let's Talk About Your Digital Project – Erika Pinedo",
          twitterDescription: "Got a project in mind? Tell me your idea and let's work together. UX/UI designer in Chile specializing in digital products, SaaS, and ERP platforms.",
        },
        heading: 'Do you have a project in mind?',
        subheading: "Tell me what ideas you have, and let's see how I can help you.",
        fieldName: 'Name *',
        fieldLastName: 'Last name *',
        fieldPhone: 'Phone number',
        fieldEmail: 'Email *',
        fieldMessage: 'Write down the project you have in mind... *',
        submitBtn: 'Send message',
        successMsg: "<strong>Thank you!</strong><br/>Your message has been sent. I'll get back to you as soon as possible.",
        errorMsg: '<strong>:( Oops!</strong> Sorry, something went wrong. Please try again.',
      },
      nicoProjectPage: {
        meta: {
          title: 'NICO Seguros · B2B SaaS UX/UI Design – Erika Pinedo',
          description: 'End-to-end UX/UI design for NICO Seguros: a B2B SaaS platform managing 10,000+ active policies. Named "Most Investable Startup" by Start-Up Chile 2024.',
          ogTitle: 'NICO Seguros · B2B SaaS UX/UI Design – Erika Pinedo',
          ogDescription: 'End-to-end UX/UI design for NICO Seguros: a B2B SaaS platform managing 10,000+ active policies. Named "Most Investable Startup" by Start-Up Chile 2024.',
          twitterTitle: 'NICO Seguros · B2B SaaS UX/UI Design – Erika Pinedo',
          twitterDescription: 'End-to-end UX/UI design for NICO Seguros: a B2B SaaS platform managing 10,000+ active policies. Named "Most Investable Startup" by Start-Up Chile 2024.',
        },
        back: 'Back',
        heroH1Html: 'Insurance Management <em class="italic-text-2">Platform</em>',
        heroSub: 'End-to-end UX/UI design from scratch',
        contextTitleHtml: '<strong class="bold-text-4">From the </strong><strong class="bold-text-9">Jurassic World</strong><strong class="bold-text-4"> 🦖 to the modern world <em class="italic-text-4">🤖</em></strong>',
        contextBody: 'NICO Seguros was designed to help insurance brokers work faster, with clearer workflows, less friction, and a product built for growth.<br/><br/>What began as a completely manual operation has evolved into a unified, scalable platform that supports industries with complex insurance processes.',
        problemH: 'The Challenge',
        problemBody: 'Insurance operations relied heavily on manual work. Information was scattered across spreadsheets, emails, and PDFs, which made daily tasks slow, inconsistent, and prone to errors.',
        prob1Title: 'Fragmented Information',
        prob1Body: 'The data was scattered across multiple tools, reducing visibility into the status of policies, renewals, claims, outstanding balances, documents, and coverage details.',
        prob2Title: 'Operational Blind Spots',
        prob2Body: 'Brokerage firms struggled to track policy renewals and follow-up opportunities, which often led to missed renewals and avoidable client attrition.',
        prob3Title: 'Slow and Error-Prone Processes',
        prob3Body: 'Quoting, issuing, negotiating, and managing policies required repetitive manual steps that relied on memory rather than structured workflows.',
        prob4Title: 'Too Much Red Tape, Too Little Growth',
        prob4Body: 'The administrative burden left brokers with little time to focus on sales, portfolio growth, or improving customer relationships.',
        personaImgSrc: '../imagenes/en-user-persona-nico-seguros-erika-pinedo.webp',
        personaImgSrcset: '../imagenes/en-user-persona-nico-seguros-erika-pinedo-p-500.webp 500w, ../imagenes/en-user-persona-nico-seguros-erika-pinedo-p-800.webp 800w, ../imagenes/en-user-persona-nico-seguros-erika-pinedo-p-1080.webp 1080w, ../imagenes/en-user-persona-nico-seguros-erika-pinedo-p-1600.webp 1600w, ../imagenes/en-user-persona-nico-seguros-erika-pinedo.webp 1844w',
        approachH: 'The Approach',
        approachBody1Html: 'To design a platform based on real operational needs, I worked directly with the founder and stakeholders to map out the entire insurance lifecycle:<br/><strong class="bold-text-6">Quote → Negotiate → Issue → Manage → Renew</strong>',
        approachBody2: 'The design was based on three pillars:',
        approach1Title: 'Clarity',
        approach1Body: 'Transforming dense technical information into clear, actionable interfaces.',
        approach2Title: 'Structure',
        approach2Body: 'Break down lengthy insurance processes into step-by-step guided workflows.',
        approach3Title: 'Scalability',
        approach3Body: 'Design a flexible system capable of supporting complex industries such as mining, construction, leasing, proptech, foundations, and ERP systems.',
        solutionH: 'The Solution',
        solutionBody: 'NICO centralizes all insurance operations on a single proactive platform designed to reduce friction and increase business visibility.',
        sol1Html: '<strong class="bold-text-5">Traffic-light status system</strong><br/>Users can instantly understand the status of any policy, renewal, or opportunity through a clear color-coded system.',
        sol2Html: '<strong class="bold-text-5">Guided Workflows</strong><br/>Complex processes such as quoting, issuing, adding coverage, and renewing are transformed into intuitive, step-by-step experiences that reduce human error.',
        sol3Html: '<strong class="bold-text-5">Smart tasks and automatic reminders</strong><br/>Users can automate follow-ups, such as calling new customers or checking on upcoming renewals.',
        sol4Html: '<strong class="bold-text-5">Unified Data Model</strong><br/>Accounts, policies, contacts, commissions, documents, and opportunities are all housed within a single ecosystem.',
        sol5Html: '<strong class="bold-text-5">Immediate prioritization</strong><br/>The platform highlights: policies nearing expiration, claims, pending items, critical debts, and open opportunities.',
        sol6Html: '<strong class="bold-text-5">Designed for scalability</strong><br/>The modular architecture supports high-volume operations across multiple industries without compromising clarity.',
        impactH: 'Impact',
        impactBody1Html: '<strong>NICO transformed a manual and fragmented workflow into a clear and scalable platform that has been adopted across multiple industries.<br/>‍<br/></strong>The system currently supports:<br/>over 20,000 insured individuals, over 25,000 insured assets, and over 10,000 policies under active management.',
        impactBody2Html: '<strong class="bold-text-8">In 2024, NICO Insurance was named </strong><strong><em class="italic-text-3">"Most Investable Startup"</em></strong><strong class="bold-text-8"> by Start-Up Chile.</strong>',
        impactBody3Html: '<strong>Companies highlight improvements such as:</strong>',
        imp1: 'Faster and clearer workflows',
        imp2: 'Improved renewal management',
        imp3: 'Improved compliance and organization',
        imp4: 'Greater operational transparency',
        imp5: 'More time for customer relations',
        imp6: 'Greater confidence in everyday decisions',
        impactFinalHtml: '<strong>NICO continues to grow as a reliable and future-ready platform.</strong>',
        reviewsH: 'Some users said',
        r1name: 'Food production company',
        r1quote: '"With access to all insurers in Chile and international reinsurers, we can insure complex risks."',
        r2name: 'Mining company',
        r2quote: '"NICO supported us every step of the way, from the initial quote to implementation, providing direct support to each employee."',
        r3name: 'Construction company',
        r3quote: "\"For each project, we efficiently manage multiple policies and endorsements thanks to NICO's unified platform.\"",
        r4name: 'ERP software company',
        r4quote: "\"We've integrated the NICO API, and now our customers can manage their insurance policies directly within our ERP system.\"",
        r5name: 'Proptech Company',
        r5quote: '"Together with NICO, we created an exclusive insurance product for our users, boosting retention and revenue."',
        r6name: 'Nonprofit foundation',
        r6quote: '"NICO allows us to accept donations without increasing costs."',
        r7name: 'Leasing company',
        r7quote: '"We went from total chaos to organized portfolio management with visibility into 20,000 financed assets."',
        r8name: 'Mutual Fund Manager',
        r8quote: "\"With NICO's software and support, we finally have control over the insurance policies that protect our investments.\"",
        creditsHtml: '<strong>Company</strong> Nnodes<strong><br/>CTO</strong> Franco Restaino<br/><strong>UX/UI Designer </strong>Erika Pinedo<br/><strong>Developers</strong> Lowtjie Rivero, Diego Castro, Robert Parada.<br/><br/>- All rights reserved -',
        otherHeadingHtml: 'Other <span class="span-txt">Projects</span>',
        seeAll: 'See all',
        alessandriTitle: 'Legal Platform Redesign',
        alessandriDesc: "An end-to-end project based on research with real users to simplify complex workflows and centralize information management on the law firm's internal platform.<br/>",
        parrotfyTitle: 'Organization and Control for Growing Businesses',
        parrotfyDesc: 'Product design for an ERP system tailored to small and medium-sized businesses that integrates finance, inventory, billing, and project management into a single platform to streamline business operations.<br/>',
        expTitle: 'Lawyers platform',
        expDesc: 'End-to-end UX/UI project for a virtual case file experience: causes, downloadable PDFs, and a clear timeline of movements for legal teams.<br/>',
        knowMore: 'Know more',
      },
      parrotfyProjectPage: {
        meta: {
          title: 'Parrotfy · SMB ERP Platform UX/UI Design – Erika Pinedo',
          description: 'End-to-end UX/UI design for Parrotfy: an all-in-one ERP for SMBs that unifies quotes, sales, payments, work orders, and invoicing into a single workflow.',
          ogTitle: 'Parrotfy · SMB ERP Platform UX/UI Design – Erika Pinedo',
          ogDescription: 'End-to-end UX/UI design for Parrotfy: an all-in-one ERP for SMBs that unifies quotes, sales, payments, work orders, and invoicing into a single workflow.',
          twitterTitle: 'Parrotfy · SMB ERP Platform UX/UI Design – Erika Pinedo',
          twitterDescription: 'End-to-end UX/UI design for Parrotfy: an all-in-one ERP for SMBs that unifies quotes, sales, payments, work orders, and invoicing into a single workflow.',
        },
        back: 'Back',
        heroH1Html: 'ERP, software that <em class="italic-text-2">integrates and automates processes</em>',
        heroSub: 'End-to-end UX/UI design from scratch',
        contextTitleHtml: '<strong class="bold-text-4">To delegate and manage </strong><strong class="bold-text-9">your business all in one place</strong>',
        contextBody: 'Parrotfy is an all-in-one ERP platform designed to help small and medium-sized businesses organize their operations with clarity, structure, and efficiency. The platform centralizes quotes, sales, payments, work orders, scheduling, e-commerce, and invoicing within a single modern environment.',
        problemH: 'The Challenge',
        problemBodyHtml: "Small businesses often operate using a mix of spreadsheets, basic software, and disconnected tools.<br/><br/>As teams grow and workflows become more complex, this fragmented setup slows down operations, creates inconsistencies, and makes it difficult for business owners to understand what's happening across the company.<br/><br/><strong>The challenge was to create a platform that would provide clarity, structure, and real visibility at every stage of the operation.</strong>",
        prob1Title: 'Various Tools',
        prob1Body: 'Key processes were spread across different systems, forcing teams to switch between platforms to manage sales, payments, scheduling, and operations.',
        prob2Title: 'Limited Visibility',
        prob2Body: 'There was no unified view of order status, financial activity, or team performance, which made decision-making slow and reactive.',
        prob3Title: 'Manual and Error-Prone Workflows',
        prob3Body: 'Spreadsheets and informal processes led to delays, duplicate work, and frequent errors.',
        prob4Title: 'Hard to scale',
        prob4Body: 'As the company grew, its administrative structure remained rudimentary, making it impossible to keep up with the growing demand and support team collaboration.',
        persona1ImgSrc: '../imagenes/en-user-persona-2.webp',
        persona1ImgSrcset: '../imagenes/en-user-persona-2-p-500.webp 500w, ../imagenes/en-user-persona-2-p-800.png 800w, ../imagenes/en-user-persona-2-p-1080.png 1080w, ../imagenes/en-user-persona-2-p-1600.png 1600w, ../imagenes/en-user-persona-2-p-2000.png 2000w, ../imagenes/en-user-persona-2-p-2600.png 2600w, ../imagenes/en-user-persona-2.webp 2686w',
        persona1ImgAlt: 'Profile of Sofía Farías, a 50-year-old entrepreneur from Santiago, with clear business goals and education in journalism.',
        persona2ImgSrc: '../imagenes/en-user-persona-1.webp',
        persona2ImgSrcset: '../imagenes/en-user-persona-1-p-500.webp 500w, ../imagenes/en-user-persona-1-p-800.png 800w, ../imagenes/en-user-persona-1-p-1080.png 1080w, ../imagenes/en-user-persona-1-p-1600.png 1600w, ../imagenes/en-user-persona-1-p-2000.png 2000w, ../imagenes/en-user-persona-1-p-2600.png 2600w, ../imagenes/en-user-persona-1.webp 2686w',
        persona2ImgAlt: 'Profile of Claudio Muñoz, a 30-year-old entrepreneur from Santiago, with goals and frustrations around growth and clients.',
        personaSubtitle: 'Because we wanted to offer a high degree of versatility on Parrotfy, we have two main profiles with different priorities.',
        approachH: 'The Approach',
        approachBody1Html: "To create a unified experience, the business lifecycle was mapped out as a continuous flow:<br/><strong>Quote → Sale → Schedule → Execute → Deliver → Collect</strong><br/><br/>This structure serves as the backbone of Parrotfy's navigation and helps connect sales, production, and administration into a single workflow.",
        approachBody2: 'The design was based on three pillars:',
        approach1Title: 'Simplifying complexity',
        approach1Body: 'Transform multi-step operational processes into clear, structured workflows.',
        approach2Title: 'Support collaboration',
        approach2Body: 'Allow team members to participate in tracking and completing tasks.',
        approach3Title: 'Build to Scale',
        approach3Body: 'Design a modular system that grows with the business and adapts to new industries and workflows.',
        solutionH: 'The Solution',
        solutionBody: 'Parrotfy organizes all aspects of a small business into a clear, integrated workflow. Each module was designed to reflect real-world tasks and simplify day-to-day operations.',
        sol1Html: '<strong class="text-solution-parrotfy">Quotes</strong><br/>Create and share quotes quickly using a guided, standardized workflow.',
        sol2Html: '<strong class="text-solution-parrotfy">Work Orders</strong><br/>Track every step of a service or production process with clarity.',
        sol3Html: '<strong class="text-solution-parrotfy">Scheduling</strong><br/>A calendar that helps teams coordinate appointments and manage workloads.',
        sol4Html: '<strong class="text-solution-parrotfy">Payments</strong><br/>Receive and track payments online all in one place.',
        sol5Html: '<strong class="text-solution-parrotfy">Customers</strong><br/>Centralized customer information shared across all departments.',
        sol6Html: '<strong class="text-solution-parrotfy">Invoicing (SII)</strong><br/>Issue invoices and documents without leaving the platform.',
        impactH: 'Impact',
        impactBodyHtml: '<strong class="bold-text-10">Parrotfy helped companies transition from spreadsheets and manual workflows to a structured, collaborative, and scalable system.</strong>',
        imp1Html: '<strong>Greater visibility<br/></strong>Clear tracking of orders, production, and payments.',
        imp2Html: '<strong>Better collaboration<br/></strong>Sales, billing, production, and service teams working within the same workflow.',
        imp3Html: '<strong>Increased productivity<br/></strong>Standardized processes reduced errors and saved time.',
        imp4Html: '<strong>Ready for growth<br/></strong>A system that can handle increased demand without losing its organization.',
        imp5Html: '<strong>Easy to use<br/></strong>Users described Parrotfy as simple, practical, and quick to learn.',
        impactFinalHtml: '<strong class="bold-text-11">A platform that brings order, clarity, and control to growing businesses.</strong>',
        reviewsH: 'Some users said',
        r1Html: '<strong>Kaupsaur<br/></strong>Oscar Schmitt - General Manager',
        r1quote: '"Parrotfy is simple, practical, and user-friendly. Our entire company uses it—from sales to billing, inventory, and technical support. Quotes are quick to generate, standardized, and easy to share. As a manager, I rely on it every day to track sales volumes and account status. The onboarding process was easy and well-supported."',
        r2Html: '<strong>Sergafel<br/></strong><strong><em class="italic-text-7">Luis San Martín</em></strong>',
        r2quote: '"It\'s significantly easier to use than other systems we\'ve tested. Parrotfy helped the entire team—especially the production team—gain better control over their time and workflows."',
        r3Html: '<strong>SportsTech<br/></strong><em>Jorge Naranjo</em>',
        r3quote: '"Excel can\'t keep up with our growth. Parrotfy accurately reflects our business operations and lets the team track every step of an order. It organizes quotes, production, training, and payments. The workflow is well-designed, and I recommend it 100%."',
        creditsHtml: '<strong>Company</strong> Nnodes<strong><br/>CTO </strong>Franco Restaino, Pablo Caviedes<strong><br/>UX/UI Designer </strong>Erika Pinedo<strong><br/>Developers </strong>Sebastian Ulloa, Natalia Muñoz, Sebastian Rojas<br/><br/>- All rights reserved -',
        otherHeadingHtml: 'Other <span class="span-txt">Projects</span>',
        seeAll: 'See All',
        nicoTitle: 'Insurance Platform from Scratch',
        nicoDesc: 'Design of a B2B SaaS platform for insurance brokers that consolidates policy, client, and renewal management into a single system, improving visibility and control over their operations.<br/>',
        alessandriTitle: 'Legal Platform Redesign',
        alessandriDesc: "An end-to-end project based on research with real users to simplify complex workflows and centralize information management on the law firm's internal platform.<br/>",
        expTitle: 'Lawyers platform',
        expDesc: 'End-to-end UX/UI project for a virtual case file experience: causes, downloadable PDFs, and a clear timeline of movements for legal teams.<br/>',
        knowMore: 'Know more',
      },
      expedienteProjectPage: {
        meta: {
          title: 'E-xpediente · UX/UI Design for Digital Legal Arbitration & Mediation Management | Erika Pinedo',
          description: 'End-to-end UX/UI design case study: E-xpediente, a legaltech platform that digitizes the management of arbitrations and mediations for lawyers. Virtual case file, secure remote access, and automatic notifications.',
          ogTitle: 'E-xpediente · UX/UI Design for Digital Legal Arbitration & Mediation Management | Erika Pinedo',
          ogDescription: 'End-to-end UX/UI design case study: E-xpediente, a legaltech platform that digitizes the management of arbitrations and mediations for lawyers. Virtual case file, secure remote access, and automatic notifications.',
          twitterTitle: 'E-xpediente · UX/UI Design for Digital Legal Arbitration & Mediation Management | Erika Pinedo',
          twitterDescription: 'End-to-end UX/UI design case study: E-xpediente, a legaltech platform that digitizes the management of arbitrations and mediations for lawyers. Virtual case file, secure remote access, and automatic notifications.',
        },
        back: 'Back',
        heroH1Html: 'Legal arbitration and mediation, <em class="italic-text-2">simple and secure</em>',
        heroSub: 'End-to-end UX/UI design from scratch',
        contextTitleHtml: '<strong>The legal process is complex. </strong><strong><em class="italic-text-9">Case management doesn\'t have to be.</em></strong>',
        contextBody: 'That\'s why E-xpediente was created — software that lets you manage arbitration and mediation procedures <strong><em>digitally</em></strong>, from start to finish, keeping everything organized in the e-book.',
        problemH: 'The Challenge',
        problemBodyHtml: 'Many lawyers face significant challenges when manually managing private cases. This task complicates transparency and organization, since accessing the necessary documents means handling stacks of paper, and coordinating everyone involved becomes an additional burden. <br/><br/><strong>To address these issues, our client decided to create a digital solution that initially only applied to public cases.</strong>',
        prob1Title: 'Inefficient Management of Physical Documents',
        prob1Body: 'Keeping a paper-based case file meant searching through folders for documents, losing track of updated versions, and relying on physical presence to access critical case information.',
        prob2Title: 'Limited Communication and Coordination',
        prob2Body: 'Coordinating arbitrators, mediators, and parties involved through emails and phone calls caused delays, confusion over agreed terms, and a lack of traceability in the process.',
        prob3Title: 'Information Security and Confidentiality',
        prob3Body: 'Physical documents and emails offer no real control over who accesses what. In an arbitration process, that lack of control poses a legal and ethical risk for all parties.',
        solutionH: 'The Solution',
        solutionBody: 'A comprehensive platform that addresses multiple aspects of legal case management, making it easier to digitize and organize documents.<br/><br/>The platform offers a variety of tools, including:',
        sol1Html: '<strong class="title-item-solution-expediente">Document digitization</strong><br/>All case files are uploaded and organized on the platform, eliminating paper from the process and enabling access to any document in seconds, from anywhere.',
        sol2Html: '<strong class="title-item-solution-expediente">Automatic notifications</strong><br/>The platform alerts each party when there is a pending action, an upcoming deadline, or a new document. <em>No need to rely on manual reminders or emails that get lost.</em>',
        sol3Html: '<strong class="title-item-solution-expediente">Secure remote access</strong><br/>Arbitrators, mediators, and parties can log into the platform from any device, with access controlled according to their role in the process and without exposing sensitive information.',
        solutionFinalHtml: '<strong class="title-item-solution-expediente">Improving collaboration, operational efficiency, and information security for lawyers and their clients.</strong>',
        impactH: 'Impact',
        imp1Title: 'Digitize',
        imp1Body: 'Platform users will be able to view all their arbitrations and mediations 100% digitally, adapting to the new challenges of Legaltech.',
        imp2Title: 'Organize',
        imp2Body: 'They will be able to view the virtual case file clearly, chronologically, and automatically.',
        imp3Title: 'Accelerate',
        imp3Body: 'The handling of their cases will be much easier and faster, fostering a better relationship with all parties involved.',
        imp4Title: 'Efficiency',
        imp4Body: 'Automatically sends notifications to the corresponding email addresses.',
        imp5Title: 'Transparency',
        imp5Body: 'All participants in the case have access to it from anywhere in the world. Once an action is recorded, it cannot be modified.',
        imp6Title: 'Security',
        imp6Body: 'Case data is stored in the cloud, with exclusive access limited to those who are part of the case.',
        creditsHtml: '<strong>Company</strong> Nnodes<strong><br/>CTO</strong> Franco Restaino<br/><strong>UX/UI Designer </strong>Erika Pinedo<br/><strong>Developers</strong> Juan Hayashi<br/><br/>- All rights reserved -',
        otherHeadingHtml: 'Other <span class="span-txt">Projects</span>',
        seeAll: 'See All',
        alessandriTitle: 'Legal Platform Redesign',
        alessandriDesc: "An end-to-end project based on research with real users to simplify complex workflows and centralize information management on the law firm's internal platform.<br/>",
        parrotfyTitle: 'Organization and Control for Growing Businesses',
        parrotfyDesc: 'Product design for an ERP system tailored to small and medium-sized businesses that integrates finance, inventory, billing, and project management into a single platform to streamline business operations.<br/>',
        nicoTitle: 'Insurance Platform from Scratch',
        nicoDesc: 'Design of a B2B SaaS platform for insurance brokers that consolidates policy, client, and renewal management into a single system, improving visibility and control over their operations.<br/>',
        knowMore: 'Know more',
      },
    },
  };

  function get(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : null;
    }, obj);
  }

  function resolve(lang, path) {
    return get(STRINGS[lang], path);
  }

  function setMeta(attr, value, isProperty) {
    if (!value) return;
    var sel = isProperty
      ? 'meta[property="' + attr + '"]'
      : 'meta[name="' + attr + '"]';
    var el = document.head.querySelector(sel);
    if (el) el.setAttribute('content', value);
  }

  function applyMeta(lang) {
    var m = STRINGS[lang].meta;
    if (document.body && document.body.classList.contains('body-about-me')) {
      var ap = STRINGS[lang].aboutPage;
      if (ap && ap.meta) m = ap.meta;
    } else if (document.body && document.body.classList.contains('body-2')) {
      var pp = STRINGS[lang].portfolioPage;
      if (pp && pp.meta) m = pp.meta;
    } else if (document.body && document.body.classList.contains('body-project-alessandri')) {
      var al = STRINGS[lang].alessandriProjectPage;
      if (al && al.meta) m = al.meta;
    } else if (document.body && document.body.classList.contains('body-contact')) {
      var cp = STRINGS[lang].contactPage;
      if (cp && cp.meta) m = cp.meta;
    } else if (document.body && document.body.classList.contains('body-project-nico')) {
      var np = STRINGS[lang].nicoProjectPage;
      if (np && np.meta) m = np.meta;
    } else if (document.body && document.body.classList.contains('body-project-parrotfy')) {
      var pfy = STRINGS[lang].parrotfyProjectPage;
      if (pfy && pfy.meta) m = pfy.meta;
    } else if (document.body && document.body.classList.contains('body-project-expediente')) {
      var exp = STRINGS[lang].expedienteProjectPage;
      if (exp && exp.meta) m = exp.meta;
    }
    if (!m) return;
    document.title = m.title;
    setMeta('description', m.description, false);
    setMeta('og:title', m.ogTitle, true);
    setMeta('og:description', m.ogDescription, true);
    setMeta('twitter:title', m.twitterTitle, true);
    setMeta('twitter:description', m.twitterDescription, true);
  }

  function apply(lang) {
    if (lang !== 'es' && lang !== 'en') lang = 'es';
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es-CL');
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    applyMeta(lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = resolve(lang, key);
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = resolve(lang, key);
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-href]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-href');
      var val = resolve(lang, key);
      if (val != null) el.setAttribute('href', val);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      var val = resolve(lang, key);
      if (val != null) el.setAttribute('alt', val);
    });

    document.querySelectorAll('[data-i18n-src]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-src');
      var val = resolve(lang, key);
      if (val != null) el.setAttribute('src', val);
    });

    document.querySelectorAll('[data-i18n-srcset]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-srcset');
      var val = resolve(lang, key);
      if (val === '') {
        el.removeAttribute('srcset');
      } else if (val != null) {
        el.setAttribute('srcset', val);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = resolve(lang, key);
      if (val != null) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-value');
      var val = resolve(lang, key);
      if (val != null) el.setAttribute('value', val);
    });

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('w--current', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function getStoredLang() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === 'es' || s === 'en') return s;
    } catch (e) {}
    return 'es';
  }

  function onDocClick(e) {
    var btn = e.target.closest('[data-lang-btn]');
    if (!btn) return;
    e.preventDefault();
    var l = btn.getAttribute('data-lang-btn');
    if (l === 'es' || l === 'en') apply(l);
  }

  function init() {
    apply(getStoredLang());
    document.body.addEventListener('click', onDocClick);
  }

  /* Ejecutar en cuanto exista <body>: coloca este script antes de jQuery/Webflow al final del HTML. */
  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  window.OtroAnguloI18n = {
    setLang: apply,
    getLang: getStoredLang,
    STRINGS: STRINGS,
  };
})();
