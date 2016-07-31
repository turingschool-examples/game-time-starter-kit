// var $ = require ('jquery');
const canvas = document.getElementById('arkannoyed-canvas');
const context = canvas.getContext('2d');
const World = require('./world');
const Levels = require('./level');

var world = new World(canvas.width, canvas.height);
world.translateLevel(Levels[0]);
world.renderLevel(world.newLevel);
world.renderCourt(world.newLevel);

function renderWorld(context, world) {

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
  }

  function drawCurrentLevel(){

    world.court.forEach(function (brick) {
    if (brick.status === 1) {
      context.fillStyle = 'blue';
      }
    if (brick.status === 2) {
      context.fillStyle = 'red';
    }
    context.fillRect(brick.x, brick.y, brick.width, brick.height);
    });
  }

  drawCurrentLevel();
  drawPaddle();
  drawBall();
}

renderWorld(context, world);

function tick(world) {
  world.tick();
}

requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  tick(world);
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow(); }
  if (event.keyCode === 37) { world.leftArrow(); }
  // if (event.keyCode === 71) { world.godMode(); }
});

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var relativeX = e.clientX;
    if(relativeX - world.paddle.width >= 0 && relativeX <= canvas.width) {
        world.paddle.x = relativeX - world.paddle.width;
    }
}
