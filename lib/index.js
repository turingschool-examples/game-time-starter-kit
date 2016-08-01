// var $ = require ('jquery');
const canvas = document.getElementById('arkannoyed-canvas');
const context = canvas.getContext('2d');
const World = require('./world');
const Levels = require('./level');

var world = new World(canvas.width, canvas.height, 0);
world.translateLevel(Levels[1]);
world.renderLevel(world.newLevel);
world.renderCourt(world.newLevel);

function renderWorld(context, world) {

  context.clearRect(0, 0, world.width, world.height);
  context.fillStyle = '#00253b';
  context.fillRect(0, 0, world.width, world.height);

  function drawPaddle(){
    context.fillStyle = '#919191';
    context.fillRect(world.paddle.x, world.paddle.y, world.paddle.width, world.paddle.height);
  }

  function drawBall(){
    context.fillStyle = '#ffebcd';
    context.fillRect(world.ball.x, world.ball.y, world.ball.height, world.ball.width);
  }

  function drawCurrentLevel(){

    world.court.forEach(function (brick) {
    if (brick.status === 1) {
      context.fillStyle = '#a7b90f';
      }
    if (brick.status === 3) {
      context.fillStyle = '#d9380c';
    }
    if (brick.status === 2){
      context.fillStyle = 'blanchedalmond';
    }
    if (brick.status < 0){
      context.fillStyle = '#919191';
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

function worldStart(){
  context.textAlign = 'center';
  context.fillStyle = 'blanchedalmond';
  context.font = '50px Arial';
  context.fillText('Get Ready...', canvas.width/2, canvas.height * .66);
  context.fillText('3', canvas.width/2, canvas.height * .75);
    window.setTimeout(function(){
      renderWorld(context, world);
      context.fillStyle = 'blanchedalmond';
      context.fillText('Get Ready...', canvas.width/2, canvas.height * .66);
      context.fillText('2', canvas.width/2, canvas.height * .75);
    }, 1000);
    window.setTimeout(function(){
      renderWorld(context, world);
      context.fillStyle = 'blanchedalmond';
      context.fillText('Get Ready...', canvas.width/2, canvas.height * .66);
      context.fillText('1', canvas.width/2, canvas.height * .75);
    }, 2000);
    window.setTimeout(function(){
      world.gameState = 1;}, 3000);
}

requestAnimationFrame(function gameLoop() {
  if (world.gameState === 1){
  renderWorld(context, world);
  tick(world);
  requestAnimationFrame(gameLoop);}
  else {
    requestAnimationFrame(gameLoop);
  }
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow(); }
  if (event.keyCode === 37) { world.leftArrow(); }
  if (event.keyCode === 32) { worldStart();}
});

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var relativeX = e.clientX;
    if(relativeX - world.paddle.width >= 0 && relativeX <= canvas.width) {
        world.paddle.x = relativeX - world.paddle.width;
    }
}
