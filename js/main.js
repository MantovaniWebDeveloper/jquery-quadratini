//incapsulo il quadrattino
var quadtratino = $('.row div');
//eseguo il clik
quadtratino.click(function(){

//controllo se quello cliccato possiede la classe
//red o green
//in caso positivo gli passo le classi active
  if(quadtratino.hasClass('red')){
    alert('rosso');
  }
});
