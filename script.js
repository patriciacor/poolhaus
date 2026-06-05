document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // REVEAL ANIMATION
  // =========================
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  items.forEach(item => observer.observe(item));


  // =========================
  // WHATSAPP BOTONES DE CARDS
  // =========================
  const waButtons = document.querySelectorAll(".wa");

  waButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      const card = btn.closest(".card");
      const model = card?.querySelector("h3")?.innerText || "Piscina Poolhaus";

      const message = encodeURIComponent(
        "Hola, quiero cotizar el modelo " + model + " de Poolhaus"
      );

      window.open(
        "https://wa.me/59892138522?text=" + message,
        "_blank"
      );

    });
  });


  // =========================
  // FORMULARIO WHATSAPP
  // =========================
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre")?.value || "";
      const telefono = document.getElementById("telefono")?.value || "";
      const depto = document.getElementById("depto")?.value || "";
      const mensaje = document.getElementById("mensaje")?.value || "";

      const text = encodeURIComponent(
        "🚨 Nuevo contacto Poolhaus\n\n" +
        "Nombre: " + nombre + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Departamento: " + depto + "\n" +
        "Mensaje: " + mensaje
      );

      window.open(
        "https://wa.me/59892138522?text=" + text,
        "_blank"
      );
    });
  }


  // =========================
  // BOTÓN SUBIR ARRIBA
  // =========================
  const scrollTopBtn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn.
