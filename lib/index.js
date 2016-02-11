const $ = require('jquery');
const Ball = require('./ball')
const Gate = require('./gate')
const CollisionDetect = require('./collision-detect')

var gameSpeed = 1;
var ballSpeed = 5;
var minBallSpeed = -4;
var acceleration = 0.5;
var fallSpeed = 1;

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

var ball = new Ball({})
var gate = new Gate({}, canvas)

requestAnimationFrame(function gameLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(ctx)
  ball.update(fallSpeed, acceleration, ballSpeed)
  gate.draw(ctx)
  gate.update(gameSpeed, canvas)
  CollisionDetect(ball, gate)
  console.log("running")
  requestAnimationFrame(gameLoop)
})
