var $ = require ('jquery');

const canvas = document.getElementById('arkannoyed-canvas');
const context = canvas.getContext('2d');

const World = require('./world');
const Ball = require('./ball');
const Paddle = require('./paddle');

var world = new World(canvas.width, canvas.height);
// var ball = world.ball;

function genesis(context, world) {
  context.clearRect(0, 0, world.width, world.height);
  context.fillStyle = 'blanchedalmond';
  context.fillRect(0, 0, world.width, world.height);
  function drawPaddle(){
    world.paddle.x = world.width/2 - world.paddle.width/2;
    world.paddle.y = world.height - world.paddle.height*2;
    context.fillStyle = 'blue';
    context.fillRect(world.paddle.x, world.paddle.y, world.paddle.width, world.paddle.height);
  }
  function drawBall(){
    world.ball.x = world.paddle.x + world.paddle.width/2 - world.ball.width/2;
    world.ball.y = world.paddle.y - world.ball.height;
    context.fillStyle = 'blue';
    context.fillRect(world.ball.x, world.ball.y, world.ball.height, world.ball.width);
  }
  drawPaddle();
  drawBall();
}

requestAnimationFrame(function gameLoop(){
  genesis(context, world);
  // world.ball.bounceUpRight();
  requestAnimationFrame(gameLoop);
});
