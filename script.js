/* ANIMACIONES AL SCROLL */
const items = document.querySelectorAll(".card, .step, .grid img");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

items.forEach(el => observer.observe(el));

/* PARALLAX HERO */
const parallax = document.querySelector(".parallax-layer");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  // efecto suave premium
  parallax.style.transform = `translateY(${scroll * 0.2}px)`;
});