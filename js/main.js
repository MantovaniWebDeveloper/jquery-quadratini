//incapsulo il quadrattino
var quadtratino = $('.row div');
//incapsulo i puntegi
var punteggioRed = $('#punteggioRed');
var punteggioGreen = $('#punteggioGreen');
// creo i contatori per i due colori
var contatoreRed = 0;
var contatoreGreen = 0;
//eseguo il clik
quadtratino.click(function(){
//controllo se quello cliccato possiede la classe
//red o green
//in caso positivo gli passo le classi active
  if($(this).hasClass('red')){
    //alert('rosso');
    $(this).addClass('activeRed');
    console.log("CONTATORE RED: " +contatoreRed++);
    //passo il valore incrementato del punteggio in html
    punteggioRed.text(contatoreRed++);
  }
  else if($(this).hasClass('green')){
    //alert('verde');
    $(this).addClass('activeGreen');
    //passo il valore incrementato del punteggio in html
    console.log("CONTATORE GREEN: " + contatoreGreen++);
    punteggioGreen.text(contatoreGreen++);
  }
  else {
    console.log("nullo");
  }
});
