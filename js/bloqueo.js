document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar la alerta
    const mostrarAlerta = () => {
      Swal.fire({
        title: 'Iniciar Sesión',
        text: 'Por favor, inicia sesión para realizar modificaciones.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Iniciar Sesión',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false, // Evita que la alerta se cierre al hacer clic fuera de ella
      }).then((result) => {
        // Si el usuario hace clic en "Iniciar Sesión", lo redirigimos a la página de autenticaciones
        if (result.isConfirmed) {
          window.location.href = 'autenticaciones.html';
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Si el usuario hace clic en "Cancelar", mostramos la alerta nuevamente si hace clic en cualquier parte del documento
          document.addEventListener("click", clicEnDocumento);
        }
      });
    };
  
    // Función para manejar clic en cualquier parte del documento
    const clicEnDocumento = () => {
      // Mostramos la alerta
      mostrarAlerta();
      // Removemos el escuchador para evitar múltiples alertas
      document.removeEventListener("click", clicEnDocumento);
    };
  
    // Agregamos un listener para el evento click en todo el documento
    document.addEventListener("click", clicEnDocumento);
  });
  