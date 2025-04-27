document.addEventListener('DOMContentLoaded', () => {
    setTimeout(iniciarCuentaRegresiva, 5000);
  
    function iniciarCuentaRegresiva() {
      let segundos = 5;
  
      const cuentaAtras = document.createElement('div');
      cuentaAtras.id = 'cuentaAtras';
      document.body.appendChild(cuentaAtras);
  
      const intervalo = setInterval(() => {
        cuentaAtras.innerHTML = `Chao pescado en ${segundos}`;
  
        if (segundos <= 0) {
          clearInterval(intervalo);
          window.location.href = "../index.html";
        }
  
        segundos--;
      }, 1000);
    }
});