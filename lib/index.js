const $ = require('jquery');
const Ball = require('./ball')
const Gate = require('./gate')
const CollisionDetect = require('./collision-detect')
const GateBuilder = require('./gate-builder')

var gameSpeed = 2;
var ballSpeed = 5;
var minBallSpeed = -4;
var acceleration = 0.5;
var fallSpeed = 5;

var gates = []
var ball = new Ball({})

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

GateBuilder.buildGates(gates, canvas)

requestAnimationFrame(function gameLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(ctx)
  ball.update(fallSpeed, acceleration, ballSpeed, canvas)
  GateBuilder.displayGates(gates, ctx, gameSpeed, canvas)
  CollisionDetect(ball, gates)
  requestAnimationFrame(gameLoop)
})
