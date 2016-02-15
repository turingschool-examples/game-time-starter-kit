const $ = require('jquery');
const Ball = require('./ball')
const Gate = require('./gate')
const GateBuilder = require('./gate-builder')
const GatePainter = require('./gate-painter')
const CollisionDetect = require('./collision-detect')
const Game = require('./game')
const Scoring = require('./score')
const GameSpeed = require('./game-speed')

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

canvas.addEventListener('click', function(){
  if (gameInPlay && !lost) {
    paused = true
    gameInPlay = false
  } else {
    gameInPlay = true
    lost = false
  }
})

var gameSpeed = 0;
var ballSpeed = 5;
var minBallSpeed = -4;
var acceleration = 0.5;
var fallSpeed = 5;
var gameInPlay = false;
var paused = null;
var lost = false;
var gates = []
var ball = new Ball({}, canvas)
var game = new Game(canvas, ctx)

GateBuilder(gates, canvas)
var score = []
var adjustedScore = (Math.floor(score.length/2))

$(function(){
setInterval(oneSecondFunction, 1000);
});

function oneSecondFunction() {
  if (adjustedScore > 10 &&  adjustedScore < 20) {
    gameSpeed = 1
    ballSpeed = 7
  }
  else if (adjustedScore > 20 && adjustedScore < 30){
    gameSpeed = 2
    ballSpeed = 8
  }
  else if (adjustedScore > 30 && adjustedScore < 40){
    gameSpeed = 3
    ballSpeed = 9
  }
  else if (adjustedScore > 40){
    gameSpeed = 4
    ballSpeed = 10
  }
}

requestAnimationFrame(function gameLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  checkIfPlayerLost(ball, canvas)
  if (gameInPlay && !lost) {
    ball.draw(ctx)
    ball.update(fallSpeed, acceleration, ballSpeed, canvas, gameInPlay)
    GatePainter(gates, ctx, gameSpeed, canvas)
    CollisionDetect(ball, gates, score)
    // GameSpeed(adjustedScore, gameSpeed)
    if (adjustedScore < 5 ){
      gameSpeed = 0
    }
    else if (adjustedScore > 5 && adjustedScore < 10) {
      gameSpeed = 0.5
    }
    Scoring(ctx, adjustedScore)
    requestAnimationFrame(gameLoop)
  } else if (lost) {
    game.lost(ctx);
    ball.y = 10
    gates = []
    GateBuilder(gates, canvas)
    requestAnimationFrame(gameLoop)
  } else if (paused) {
    game.paused(ctx);
    requestAnimationFrame(gameLoop)
  } else {
    game.default(ctx);
    requestAnimationFrame(gameLoop)
  }
})

function checkIfPlayerLost(ball, canvas) {
  if (gameInPlay && ball.y < ball.r) {
    lost = true;
  }
}
