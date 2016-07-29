var $ = require ('jquery');

const canvas = document.getElementById('arkannoyed-canvas');
const context = canvas.getContext('2d');
const World = require('./world');
const Brick = require('./bricks');
const Levels = require('./level');

var world = new World(canvas.width, canvas.height);
var ball = world.ball;
// world.addBrick();


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
  function drawBrick(brick){
    context.fillStyle = 'blue';
    context.fillRect(brick.x, brick.y, brick.width, brick.height);
  }
function drawLevel(){
  var sampleBrick = {x: 30, y:30, width:60, height:30};

  var level1 = [sampleBrick, sampleBrick, sampleBrick, sampleBrick, sampleBrick, sampleBrick];
  world.renderLevel(level1);
  debugger
  // var level1Layout = world.renderLevel(level1);
  level1Layout.forEach(drawBrick(brick));
}

  drawLevel();
  drawPaddle();
  drawBall();
}

renderWorld(context, world);

function tick(world) {
  world.tick();
}

requestAnimationFrame(function gameLoop(){
  renderWorld(context, world);
  tick(world);
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow(); }
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 37) { world.leftArrow(); }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 32) { world.spaceBar(); }
});
