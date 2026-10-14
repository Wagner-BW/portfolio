
(() => {
  const progress = document.getElementById("progress");
  const sections = [...document.querySelectorAll(".project-section")];
  const links = [...document.querySelectorAll(".toc-link")];

  function updateProgress() {
    const root = document.documentElement;
    const maxScroll = root.scrollHeight - window.innerHeight;
    const amount = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

    if (progress) progress.style.width = `${amount}%`;
  }

  function updateActiveSection() {
    let activeId = sections[0]?.id;

    for (const section of sections) {
      if (section.getBoundingClientRect().top < window.innerHeight * 0.45) {
        activeId = section.id;
      }
    }

    links.forEach(link => {
      const active = link.getAttribute("href") === `#${activeId}`;
      link.classList.toggle("active", active);
    });
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateProgress();
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateProgress();
  updateActiveSection();
})();
