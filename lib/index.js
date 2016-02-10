const $ = require('jquery');
const Ball = require('./ball')

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

let ball = new Ball({})

requestAnimationFrame(function gameLoop(){
  ball.draw(ctx)
  requestAnimationFrame(gameLoop())
})
