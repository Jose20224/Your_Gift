document.getElementById('flor').addEventListener('click', function() {
  // Obtener la fecha actual
  var currentDate = new Date();
  
  // Establecer la fecha límite (4 de febrero)
  var deadline = new Date('2024-04-03');

  // Verificar si la fecha actual es anterior al 4 de febrero
  if (currentDate < deadline) {
      alert('El botón no estará activo hasta el 3 de abrir \n\n asta entocces sofia XD.');
      // No hacer nada más si no es la fecha permitida
      return;
  }

  // Si la fecha es posterior al 4 de febrero, redirigir al enlace
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
  window.location.href = "/corazon.html";
});