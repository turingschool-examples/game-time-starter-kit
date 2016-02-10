const $ = require('jquery');
const Ball = require('./ball')
const Gate = require('./gate')

var gameSpeed = 5
var ballSpeed = 4;
var minBallSpeed = -4;
var acceleration = 0.5;
var fallSpeed = 1

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

let ball = new Ball({})
let gate = new Gate({}, canvas)

requestAnimationFrame(function gameLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(ctx)
  ball.update(ballSpeed, acceleration, fallSpeed)
  gate.draw(ctx)
  gate.update(gameSpeed, canvas)
  console.log("running")
  requestAnimationFrame(gameLoop)
})
