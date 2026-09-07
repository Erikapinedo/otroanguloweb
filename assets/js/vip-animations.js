(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    var cards = Array.from(
      document.querySelectorAll('#vip-projects .vip-card--anim')
    );
    if (!cards.length) return;

    if (reduced) {
      cards.forEach(function (c) { c.classList.add('vac-ready', 'vac-done'); });
      return;
    }

    var triggered = false;
    var target = cards[0].closest('.vip-grid-featured') || cards[0];

    var observer = new IntersectionObserver(function (entries) {
      if (triggered || !entries[0].isIntersecting) return;
      triggered = true;
      observer.disconnect();

      cards.forEach(function (card, i) {
        setTimeout(function () {
          card.classList.add('vac-ready');
          // Enable hover transition after fan animation completes (0.2s delay + 0.65s anim)
          setTimeout(function () { card.classList.add('vac-done'); }, 900);
        }, i * 120);
      });
    }, { threshold: 0.2 });

    observer.observe(target);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
