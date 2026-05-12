window.addEventListener("scroll", () => {
  const images = document.querySelectorAll(".grid img");

  images.forEach(img => {
    const top = img.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    }
  });
});
