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
requestAnimationFrame(function gameLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  checkIfPlayerLost(ball, canvas)
  if (gameInPlay && !lost) {
    ball.draw(ctx)
    ball.update(fallSpeed, acceleration, ballSpeed, canvas, gameInPlay)
    GatePainter(gates, ctx, gameSpeed, canvas)
    CollisionDetect(ball, gates, score)
    // GameSpeed(score.length, gameSpeed)
    if (score.length < 5 ){
      gameSpeed = 0
    }
    else if (score.length > 5) {
      gameSpeed = 0.5
    }
    else if (score.length % 10 === 0) {
      gameSpeed += 0.5
      console.log("time to speed up")
    }
    Scoring(ctx, score.length)
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
