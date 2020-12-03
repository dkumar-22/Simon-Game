
var randomNumber, randomChosenColor, currentColor;
var keypressed = false;
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;

$(document).keypress(function() {
  if(keypressed == false)
  {
    $("#level-title").html("Level "+level);
    nextSequence();
    keypressed = true;
  }
});

$(".btn").click((event)=> {
    userClickedPattern.push(event.target.id);
    //console.log(userClickedPattern);
    playSound(event.target.id);
    animatePress(event.target.id);
    checkSequence(userClickedPattern.length-1);
});

function nextSequence() {
  userClickedPattern=[];
  level++;
  $("#level-title").html("Level "+level);
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

function checkSequence(idx)
{
  if(gamePattern[idx] === userClickedPattern[idx])
  {
    if(gamePattern.length===userClickedPattern.length)
    {
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else
  {
    $("#level-title").html("Game Over");
  }
}