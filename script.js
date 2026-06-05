document.addEventListener("DOMContentLoaded", () => {

  setupWhatsApp();
  setupReveal();
  parallaxHero();

});

// ================= WHATSAPP =================
function setupWhatsApp() {

  const buttons = document.querySelectorAll(".wa");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const model = btn.closest(".card").querySelector("h3").innerText;

      const msg = encodeURIComponent(
        `Hola, quiero cotizar el modelo ${model} de Poolhaus`
      );

      window.open(`https://wa.me/5989213852?text=${msg}`, "_blank");
    });
  });

}

// ================= APPLE / TESLA REVEAL =================
function setupReveal() {

  const elements = document.querySelectorAll(".reveal, .story-block");

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });

  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));

}

// ================= HERO PARALLAX =================
function parallaxHero() {

  const bg = document.querySelector(".hero-bg");

  window.addEventListener("scroll", () => {

    let value = window.scrollY;

    if (bg) {
      bg.style.transform = `scale(1.1) translateY(${value * 0.2}px)`;
    }

  });

}
