//Business Logic
//Randomizing the dice number
var diceNumber, totalNumber1, totalNumber2, chance1, player1, chance2, player2;
totalNumber1 = 0;
player1 = 0;
totalNumber2 = 0;
player2 = 0;
//event.preventDefault();

function Details(firstName, secondName){
  firstName=this.firstName;
  secondName=this.secondName
}
/*var player1 = function(){
  $('')
}*/

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
      $('#rollmoto').text('You rolled a one. It is time for player two to play!').addClass('text-dark text-centre jumbotron alert-danger')
      $('#one').hide(100);
      $('#two').show(100);
      player1 += totalNumber1;
      $('#player-1-total').text(player1)
    }else {
      $('#score1').text(chance1)
      totalNumber1 += chance1 ;
      $('#totalScore').text(totalNumber1)
    }
  })
  $('#hold1').click(function(){
    player1 += totalNumber1;
    //$('#one').hide(100);
    $('#two').show(100);
    $('#player-1-total').text(player1)
    $('#rollmoto').text('It is time for player two to play.').addClass('text-dark text-centre jumbotron alert-info').removeClass('alert-danger')
    $('#rollmoto2').text('It is your turn, play wisely.').addClass('text-dark text-centre jumbotron alert-success').removeClass('alert-danger alert-info')
    totalNumber1 = 0;
  })
  //Player 2
  $('#roll2').click(function(){
    chance2 =  Math.floor((Math.random() * 6) + 1);
    if (chance2 == 1){
      totalNumber2 = 0;
      $('#score2').text(chance2)
      $('#totalScore2').text(totalNumber2)
      $('#rollmoto2').text('You rolled a one. It is time for player one to play!').addClass('text-dark text-centre jumbotron alert-danger')
      $('#two').hide(100);
      $('#one').show(100)
      player2 += totalNumber2;
      $('#player-2-total').text(player2)
    }else {
      $('#score2').text(chance2)
      totalNumber2 += chance2 ;
      $('#totalScore2').text(totalNumber2)
    }
  })
  $('#hold2').click(function(){
    player2 += totalNumber2;
    $('#two').hide(100);
    $('#one').show(100); 
    $('#player-2-total').text(player2)
    $('#rollmoto2').text(`It is time for player one to play.`).addClass('text-dark text-centre jumbotron alert-info').removeClass('alert-danger')
    totalNumber2 = 0;
  })
})

