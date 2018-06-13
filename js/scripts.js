// Business Logic
function Player(name, goal){
  this.name = name;
  this.goal = goal;
  this.roundScore = 0;
  this.totalScore = 0;
  this.myTurn = false;
}


// get a random number between 0 and max-1
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
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
    }

    var playerOne = new Player("player1", goal);
    var playerTwo = new Player(p2, goal);
debugger;
    //randomly decide who to start
    if(getRandomInt(2)){
      playerOne.myTurn = true;
    }

    if(playerOne.myTurn){
      $('#user-turn').text(playerOne.name);
    } else {
      $('#user-turn').text(playerTwo.name);
    };



  });

});
