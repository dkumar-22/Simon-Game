
var randomNumber, randomChosenColor, currentColor;

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click((event)=> {
    userClickedPattern.push(event.target.id);
    //console.log(userClickedPattern);
    playSound(event.target.id);
    animatePress(event.target.id);
});

function nextSequence() {
  randomNumber = Math.floor(4 * Math.random());
  randomChosenColor = buttonColors[randomNumber]; 
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(name) {
    $("#"+name).addClass("pressed")
    setTimeout(function() {
      $("#"+name).removeClass("pressed");
    },100);
}