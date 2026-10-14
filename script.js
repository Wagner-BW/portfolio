
(() => {
  const progress = document.getElementById("progress");
  const hero = document.querySelector(".hero");
  let ticking = false;

  function updateScrollEffects() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (progress) {
      progress.style.width =
        `${maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0}%`;
    }

    if (hero && scrollTop < hero.offsetHeight + 200) {
      hero.style.setProperty("--parallax-y", `${scrollTop * 0.12}px`);
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  }, { passive: true });

  updateScrollEffects();
})();
