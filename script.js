 const items = document.querySelectorAll(".reveal");

  const obs = new IntersectionObserver(e=>{
    e.forEach(i=>{
      if(i.isIntersecting) i.target.classList.add("show");
    });
  });

  items.forEach(i=>obs.observe(i));

  document.querySelector("form").addEventListener("submit", e=>{
    e.preventDefault();

    const msg = encodeURIComponent("Nuevo contacto Poolhaus");
    window.open(`https://wa.me/59892138522?text=${msg}`);
  });

});
