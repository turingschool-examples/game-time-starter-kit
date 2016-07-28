var $ = require ('jquery');

const canvas = document.getElementById('arkannoyed-canvas');
const context = canvas.getContext('2d');

const World = require('./world');

var world = new World(canvas.width, canvas.height);
var ball = world.ball;

function genesis(context, world) {
  context.clearRect(0, 0, world.width, world.height);
  context.fillStyle = 'blanchedalmond';
  context.fillRect(0, 0, world.width, world.height);
  function drawPaddle(){
    context.fillStyle = 'blue';
    context.fillRect(world.paddle.x, world.paddle.y, world.paddle.width, world.paddle.height);
  }
  function drawBall(){
    context.fillStyle = 'blue';
    context.fillRect(world.ball.x, world.ball.y, world.ball.height, world.ball.width);
    world.ballStart();
  }
  drawPaddle();
  drawBall();
  world.isBallHittingAWall(ball);
}

genesis(context, world);

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow(); }
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 37) { world.leftArrow(); }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 32) {
      requestAnimationFrame(function gameLoop(){
      genesis(context, world);
      requestAnimationFrame(gameLoop);
      });
  }
});
