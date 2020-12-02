var randomNumber, randonChosenNumber;

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  randomNumber = Math.floor(4 * Math.random());
  randonChosenNumber = buttonColors[randomNumber]; 
  gamePattern.push(randomNumber);
  $("#"+randonChosenNumber).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/"+randonChosenNumber+".mp3");
  audio.play();
}
