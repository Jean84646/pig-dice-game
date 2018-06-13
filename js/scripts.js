// Business Logic
function Player(name){
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
  this.myTurn = false;
}


// get a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)+1);
}

Player.prototype.rollDice = function(turn){
  var diceRoll = getRandomInt(6);
  if(diceRoll === 1){
    this.roundScore = 0;
    $('.round-score').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    if(turn === 1){
      turn = 2;
      $('#user-turn').text(playerTwo.name + " Turn");
    } else {
      turn = 1;
      $('#user-turn').text(playerOne.name + " Turn");
    };
  } else {
    this.roundScore += diceRoll;
  };

  return turn;
}




// User Interface
$(document).ready(function(){
  $('#user-menu').submit(function(event){
    event.preventDefault();

    var mode = $('input:radio[name=mode-option]:checked').val();
    var goal = $('input:radio[name=goal-option]:checked').val();
    var p2 = "";
    if(mode === "computer"){
      p2 = "Computer";
    } else {
      p2 = "Player TWO";
    };

    var playerOne = new Player("Player ONE");
    var playerTwo = new Player(p2);
    var turn = 0;
    var diceRoll = 0;
    var roundScore = 0;

    //randomly decide who to start
    turn = 2;//getRandomInt(2);

    if(turn === 1){
      $('#user-turn').text(playerOne.name + " Turn");
    } else {
      $('#user-turn').text(playerTwo.name + " Turn");
      if(playerTwo.name === "Computer") {
        counter = 0;
        while(counter < 2){
          // setTimeout(function(){
            diceRoll = getRandomInt(6);
            $('#dice-value').text(diceRoll.toString());
            if(diceRoll === 1){
              roundScore = 0;
              $('#current-score').text(roundScore.toString());
              $('.round-score').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
              turn = 1;
              counter = 2;
              $('#user-turn').text(playerOne.name + " Turn");
            } else {
              counter +=1;
              roundScore += diceRoll;
              $('#current-score').text(roundScore.toString());
            };
          // },2000);
        };
        playerTwo.totalScore += roundScore;
        turn = 1;
        $('#user-turn').text(playerOne.name + " Turn");
        $('#p2-total').text(playerTwo.totalScore);
      };
    };



    $('button#roll-dice').click(function(){
      // this will disable the click button function for 500ms
      document.getElementById('roll-dice').disabled = true;
      setTimeout(function(){
        document.getElementById('roll-dice').disabled = false;
      },500);

      diceRoll = getRandomInt(6);
      if(diceRoll === 1){
        roundScore = 0;
        $('.round-score').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        if(turn === 1){
          turn = 2;
          $('#user-turn').text(playerTwo.name + " Turn");
        } else {
          turn = 1;
          $('#user-turn').text(playerOne.name + " Turn");
        };
      } else {
        roundScore += diceRoll;
      };


      $('#dice-value').text(diceRoll.toString());
      $('#current-score').text(roundScore.toString());


    });

    $('button#end-turn').click(function(){
      if(turn === 1){
        playerOne.totalScore += roundScore;
        turn = 2;
        $('#user-turn').text(playerTwo.name + " Turn");
        $('#p1-total').text(playerOne.totalScore);
        if(playerOne.totalScore >= goal){
          $('#user-turn').text(playerOne.name + " WIN!!!");
        };
      } else {
        
        playerTwo.totalScore += roundScore;
        turn = 1;
        $('#user-turn').text(playerOne.name + " Turn");
        $('#p2-total').text(playerTwo.totalScore);
        if(playerTwo.totalScore >= goal){
          $('#user-turn').text(playerTwo.name + " WIN!!!");
        };
      };
      roundScore = 0;
      $('#current-score').text(roundScore.toString());

    });

  });

});
