document.getElementById('flor').addEventListener('click', function() {
  // Obtener la fecha actual
  var currentDate = new Date();
  
  // Establecer la fecha límite (4 de febrero)
  var deadline = new Date('2024-04-03');

  // Verificar si la fecha actual es anterior al 4 de febrero
  if (currentDate < deadline) {
      alert('El botón no estará activo hasta el 3 de abrir \n\n asta entoces sofia XD.');
      // No hacer nada más si no es la fecha permitida
      return;
  }


  window.location.href = "/Flor.html";
});

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
document.getElementById('Corazon').addEventListener('click', function() {
  // Obtener la fecha actual
  var currentDate = new Date();
  

  var deadline = new Date('2024-02-14');

 
  if (currentDate < deadline) {
      alert('El botón no estará activo hasta el 14 de febrero \n\n asta entoces sofia XD.');
      // No hacer nada más si no es la fecha permitida
      return;
  }

  // Si la fecha es posterior al 4 de febrero, redirigir al enlace
  window.location.href = "/AWESOME.html";

});
//////////////////
////////////////////////

// Función para iniciar el contador hasta una fecha y hora específicas
function iniciarContador(fechaObjetivo) {
  const contadorElemento = document.getElementById('contador');

  function actualizarContador() {
      // Obtener la fecha y hora actual
      const ahora = new Date().getTime();

      // Calcular la diferencia entre la fecha y hora objetivo y la actual
      const diferencia = fechaObjetivo - ahora;

      if (diferencia > 0) {
          // Calcular días, horas, minutos y segundos
          const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
          const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
          const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

          // Actualizar el contenido del elemento del contador con el tiempo restante
          contadorElemento.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
      } else {
          // Si la fecha objetivo ya ha pasado, mostrar un mensaje
          clearInterval(intervalo);
          contadorElemento.textContent = "¡Ya ha llegado la fecha objetivo!";
      }
  }

  // Llamar a la función para actualizar el contador inicialmente
  actualizarContador();

  // Establecer un intervalo para llamar a la función de actualización cada segundo (1000 milisegundos)
  const intervalo = setInterval(actualizarContador, 1000);
}

// Definir la fecha y hora objetivo (año, mes (de 0 a 11), día, horas, minutos, segundos)
const fechaObjetivo = new Date(2024, 1, 14, 8, 0,0); // Ejemplo: 1 de junio de 2024 a las 12:00 PM
iniciarContador(fechaObjetivo);
