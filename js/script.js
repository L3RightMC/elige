document.addEventListener('DOMContentLoaded', () => {
    const tajadas = document.getElementById('tajadas');
    let intentos = 0;
  
    tajadas.addEventListener('mouseover', () => {
      intentos++;
  
      if (intentos >= 10) {
        window.location.href = "../views/tajadas.html";
        return;
      }
  
      const margen = 30;
  
      const anchoDisponible = window.innerWidth - tajadas.offsetWidth - margen;
      const altoDisponible = window.innerHeight - tajadas.offsetHeight - margen;
  
      const nuevoX = Math.max(margen, Math.random() * anchoDisponible);
      const nuevoY = Math.max(margen, Math.random() * altoDisponible);
  
      tajadas.style.left = `${nuevoX}px`;
      tajadas.style.top = `${nuevoY}px`;
    });
  });
  