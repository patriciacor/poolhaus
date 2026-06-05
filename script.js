// =============================
// POOLHAUS - APP JS
// Estilo: Negro / Violeta
// =============================

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initWhatsAppButton();
  initHeroEffects();
  initCatalogFilter();
  initGallery();
  initFAQ();
  initTestimonials();
});

// =============================
// NAVIGATION SMOOTH SCROLL
// =============================
function initNavigation() {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// =============================
// WHATSAPP FLOAT BUTTON
// =============================
function initWhatsAppButton() {
  const phone = "5989213852"; // Uruguay format (+598 + número)
  const message = encodeURIComponent(
    "Hola, quiero información sobre Poolhaus 🏊‍♂️"
  );

  const btn = document.createElement("a");
  btn.href = `https://wa.me/${phone}?text=${message}`;
  btn.target = "_blank";
  btn.className = "whatsapp-float";
  btn.innerHTML = "💬 WhatsApp";

  document.body.appendChild(btn);
}

// =============================
// HERO EFFECTS (premium glow)
// =============================
function initHeroEffects() {
  const hero = document.querySelector(".hero");

  if (!hero) return;

  hero.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    hero.style.background = `
      radial-gradient(circle at ${x}% ${y}%,
      rgba(170, 0, 255, 0.25),
      rgba(0, 0, 0, 0.95))
    `;
  });

  hero.addEventListener("mouseleave", () => {
    hero.style.background = "";
  });
}

// =============================
// CATALOG FILTER (MODELOS)
// =============================
function initCatalogFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".model-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      items.forEach(item => {
        const type = item.dataset.type;

        if (filter === "all" || filter === type) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// =============================
// GALLERY LIGHTBOX SIMPLE
// =============================
function initGallery() {
  const images = document.querySelectorAll(".gallery img");

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.style.display = "none";
  overlay.innerHTML = `<img src="" alt="preview">`;

  document.body.appendChild(overlay);

  const imgTag = overlay.querySelector("img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      imgTag.src = img.src;
      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });
}

// =============================
// FAQ ACCORDION
// =============================
function initFAQ() {
  const questions = document.querySelectorAll(".faq-item");

  questions.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("open");

      questions.forEach(other => {
        if (other !== item) other.classList.remove("open");
      });
    });
  });
}

// =============================
// TESTIMONIAL SLIDER SIMPLE
// =============================
function initTestimonials() {
  const slides = document.querySelectorAll(".testimonial");
  let index = 0;

  if (slides.length === 0) return;

  setInterval(() => {
    slides.forEach(s => (s.style.display = "none"));

    slides[index].style.display = "block";
    index++;

    if (index >= slides.length) index = 0;
  }, 4000);
}
