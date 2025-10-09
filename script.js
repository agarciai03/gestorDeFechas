// Fecha inicial
    let fechaObjetivo = new Date("2026-04-25T00:00:00");

    // Crear elementos
    const titulo = document.createElement("h1");
    titulo.textContent = "Cuenta atrás para mi cumpleaños";
    document.body.appendChild(titulo);

    const contador = document.createElement("div");
    contador.id = "contador";
    document.body.appendChild(contador);

    const inputFecha = document.createElement("input");
    inputFecha.type = "datetime-local";
    inputFecha.id = "inputFecha";
    inputFecha.value = "2026-04-25T00:00";
    document.body.appendChild(inputFecha);

    // Función para actualizar la cuenta atrás
    function actualizarContador() {
      const ahora = new Date();
      let diferencia = fechaObjetivo - ahora;

      if (diferencia <= 0) {
        contador.textContent = "¡La fecha ha llegado!";
        contador.style.backgroundColor = "#d60000"; 
        return;
      }

      const segundos = Math.floor(diferencia / 1000) % 60;
      const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
      const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)) % 30;
      const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30));

      contador.textContent = 
        meses + " meses, " + dias + " días, " + horas + "h, " + minutos + "m, " + segundos + "s";

      // Cambiar colores según el tiempo restante
      const diasTotales = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      if (diasTotales > 30) {
        contador.style.backgroundColor = "#00b300";
      } else if (diasTotales <= 30 && diasTotales > 7) {
        contador.style.backgroundColor = "#ff8000"; 
      } else {
        contador.style.backgroundColor = "#d60000"; 
      }
    }

    // Permitir al usuario cambiar la fecha
    inputFecha.addEventListener("change", (e) => {
      fechaObjetivo = new Date(e.target.value);
      actualizarContador();
    });

    // Actualizar cada segundo
    setInterval(actualizarContador, 1000);
    actualizarContador(); 