$(document).ready(function() {
    // Capturar el evento de envío del formulario
    $("#ratingForm").submit(function(event) {
      event.preventDefault(); // Prevenir la recarga de la página
  
      // Aquí puedes realizar cualquier lógica adicional necesaria, como enviar datos al servidor
  
      // Cambiar las clases para activar la animación y mostrar el mensaje de agradecimiento
     
    });
    
    // Capturar el clic del botón de cambio de estado
    $("#flipButton").click(function() {
        $(".card").toggleClass("flip");
    });
  });
//   .rating-card {
//     @include childs-card-setup(0deg);
    
    
// }
// .thank-you-card {
//     @include childs-card-setup(180deg);
     
// }
// .card.flip .rating-card {
//     transition: transform 0.5s;
//     transform: rotateY(180deg);
//   }
  
//   .card.flip .thank-you-card {
//     transition: transform 0.5s;
//     transform: rotateY(0deg);
//   }