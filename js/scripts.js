// Business Logic
function Player(name){
  this.name = name;
  this.totalScore = 0;
}


// get a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)+1);
}






// User Interface
$(document).ready(function(){
  $('#user-menu').submit(function(event){
    event.preventDefault();

    var mode = $('input:radio[name=mode-option]:checked').val();
    var goal = $('input:radio[name=goal-option]:checked').val();
    var p2 = "";
    if(mode === "computer"){
      p2 = "computer";
    } else {
      p2 = "player2";
    };

    var playerOne = new Player("player1");
    var playerTwo = new Player(p2);
    var turn = 0;
    var diceRoll = 0;
    var roundScore = 0;

    //randomly decide who to start
    turn = getRandomInt(2);

    if(turn === 1){
      $('#user-turn').text(playerOne.name);
    } else {
      $('#user-turn').text(playerTwo.name);
    };

    $('button#roll-dice').click(function(){
      diceRoll = getRandomInt(6);
      $('#dice-value').text(diceRoll.toString());
      roundScore += diceRoll;
      $('#current-score').text(roundScore.toString());
    });

    $('button#end-turn').click(function(){
      if(turn === 1){
        playerOne.totalScore += roundScore;
        turn = 2;
        $('#user-turn').text(playerTwo.name);
        $('#p1-total').text(playerOne.totalScore);
      } else {
        playerTwo.totalScore += roundScore;
        turn = 1;
        $('#user-turn').text(playerOne.name);
        $('#p2-total').text(playerTwo.totalScore);
      };
      roundScore = 0;
      $('#current-score').text(roundScore.toString());

    });

  });

});
