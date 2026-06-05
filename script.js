document.addEventListener("DOMContentLoaded", () => {

  // ================= REVEAL ANIMATION =================
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

  // ================= WHATSAPP =================
  const buttons = document.querySelectorAll(".wa");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const model = btn.closest(".card")?.querySelector("h3")?.innerText || "Piscina";

      const msg = encodeURIComponent(
        "Hola, quiero cotizar el modelo " + model + " de Poolhaus"
      );

      window.open("https://wa.me/5989213852?text=" + msg, "_blank");

    });
  });

  // ================= FORM =================
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre")?.value || "";
      const telefono = document.getElementById("telefono")?.value || "";
      const depto = document.getElementById("depto")?.value || "";
      const mensaje = document.getElementById("mensaje")?.value || "";

      const text = encodeURIComponent(
        "Nuevo contacto Poolhaus:\n" +
        "Nombre: " + nombre + "\n" +
        "Tel: " + telefono + "\n" +
        "Depto: " + depto + "\n" +
        "Mensaje: " + mensaje
      );

      window.open("https://wa.me/59892138522?text=" + text, "_blank");
    });
  }

});
