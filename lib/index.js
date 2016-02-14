const $ = require('jquery');
const Ball = require('./ball')
const Gate = require('./gate')
const CollisionDetect = require('./collision-detect')
const Game = require('./game')

var gameSpeed = 1;
var ballSpeed = 5;
var minBallSpeed = -4;
var acceleration = 0.5;
var fallSpeed = 5;
var gameInPlay = false;
var paused = null;
var lost = false;

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

var gates = []
var ball = new Ball({}, canvas)
var game = new Game(canvas, ctx)

function buildGates(gates){
  var spacing = 75
  for (var i = 0; i < 6; i++){
    var gatePosition = canvas.height - spacing
    gates.push(new Gate({y: gatePosition}, canvas))
    spacing += 75
  }
}

function displayGates(gates, ctx, gameSpeed, canvas){
  for (var i = 0;i < gates.length;i++){
    gates[i].draw(ctx);
    gates[i].update(gameSpeed, canvas);
  }
}

buildGates(gates)

canvas.addEventListener('click', function(){
  if (gameInPlay && !lost) {
    paused = true
    gameInPlay = false
    console.log("game in play is false")
  } else {
    gameInPlay = true
    lost = false
    console.log("game in play is true")
  }
})

requestAnimationFrame(function gameLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (gameInPlay && !lost) {
    ball.draw(ctx)
    ball.update(fallSpeed, acceleration, ballSpeed, canvas, gameInPlay)
    displayGates(gates, ctx, gameSpeed, canvas)
    CollisionDetect(ball, gates)
    checkIfPlayerLost(ball, canvas)
    requestAnimationFrame(gameLoop)
  } else if (paused) {
    game.paused(ctx);
    requestAnimationFrame(gameLoop)
  } else if (lost) {
    game.lost(ctx);
    ball.y = 10
    gates = []
    buildGates(gates)
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
