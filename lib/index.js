const $ = require('jquery');
const Ball = require('./ball')
const Gate = require('./gate')
const GateBuilder = require('./gate-builder')
const GatePainter = require('./gate-painter')
const CollisionDetect = require('./collision-detect')
const Game = require('./game')
const Scoring = require('./score')
// const GameSpeed = require('./game-speed')

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
// var gameSpeed = new GameSpeed;
debugger;

var score = []
var adjustedScore = (Math.floor((score.length)/3))

GateBuilder(gates, canvas)

requestAnimationFrame(function gameLoop(){
  var adjustedScore = (Math.floor((score.length)/3))
  console.log("Score: " + adjustedScore)
  console.log("Speed: " + game.speed)
  // gameSpeed.update(adjustedScore, ballSpeed)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  checkIfPlayerLost(ball, canvas)
  if (gameInPlay && !lost) {
    ball.draw(ctx)
    ball.update(fallSpeed, acceleration, ballSpeed, canvas, gameInPlay)
    GatePainter(gates, ctx, game.speed, canvas)
    CollisionDetect(ball, gates, score)
    game.update(adjustedScore)
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
