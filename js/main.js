//incapsulo il quadrattino
var quadtratino = $('.row div');
//eseguo il clik
console.log(quadtratino.hasClass('green'));

quadtratino.click(function(){

//controllo se quello cliccato possiede la classe
//red o green
//in caso positivo gli passo le classi active
  if($(this).hasClass('red')){
    //alert('rosso');
    $(this).addClass('activeRed');
  }
  else if($(this).hasClass('green')){
    //alert('verde');
    $(this).addClass('activeGreen');
  }
});
