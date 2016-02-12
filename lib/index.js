const $ = require('jquery');
const Ball = require('./ball')
const Gate = require('./gate')
const CollisionDetect = require('./collision-detect')
// const GateBuilder = require('./gate-builder')

var gameSpeed = 1;
var ballSpeed = 5;
var minBallSpeed = -4;
var acceleration = 0.5;
var fallSpeed = 5;

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

var gates = []
var ball = new Ball({}, canvas)



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

requestAnimationFrame(function gameLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(ctx)
  ball.update(fallSpeed, acceleration, ballSpeed, canvas)
  displayGates(gates, ctx, gameSpeed, canvas)
  CollisionDetect(ball, gates)
  requestAnimationFrame(gameLoop)
})
