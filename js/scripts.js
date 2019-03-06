//Business Logic
//Randomizing the dice number
var diceNumber, totalNumber1, totalNumber2, chance1;
diceNumber, totalNumber2, chance1, totalNumber1 = 0;
//event.preventDefault();

function Details(firstName, secondName){
  
}

$(document).ready(function(){
  $('#try').click(function(){
    event.preventDefault();
    $('#game').show(1000);
    $('#intro').hide(100);
  })
  $('#roll1').click(function(){
    chance1 =  Math.floor((Math.random() * 6) + 1);
    if (chance1 == 1){
      totalNumber1 = 0;
      $('#score1').text(chance1)
      $('#totalScore').text(totalNumber1)
      $('#rollmoto').text('You rolled a one. It is time for player two to play!').addClass('text-dark text-centre jumbotron')
    }else {
      $('#score1').text(chance1)
      totalNumber1 += chance1 ;
      $('#totalScore').text(totalNumber1)
    }
  })
  $('#hold1')
})