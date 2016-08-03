// var $ = require ('jquery');
const canvas = document.getElementById('arkannoyed-canvas');
const context = canvas.getContext('2d');
const World = require('./world');
const Levels = require('./level');

var almond = new Image();
var world = new World(canvas.width, canvas.height, 0);
var currentLevelCounter = 0;
world.translateLevel(Levels[currentLevelCounter]);
world.renderLevel(world.newLevel);
world.renderCourt(world.newLevel);

function drawCanvas(){
  context.clearRect(0, 0, world.width, world.height);
  context.fillStyle = '#00253b';
  context.fillRect(0, 0, world.width, world.height);
}

function drawPaddle(){
  context.fillStyle = '#919191';
  context.fillRect(world.paddle.x, world.paddle.y, world.paddle.width, world.paddle.height);
}

function drawBall(){
  almond.src = '../img/little-almond.png';
  // context.fillStyle = '#ffebcd';
  context.drawImage(almond, world.ball.x, world.ball.y, world.ball.height, world.ball.width);
}

function drawCurrentCourt(){
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

function renderWorld() {
  drawCanvas();
  drawCurrentCourt();
  drawPaddle();
  drawBall();
}

function renderStartScreen(text){
  context.textAlign = 'center';
  context.fillStyle = 'blanchedalmond';
  context.font = '50px Arial';
  context.fillText(text, canvas.width/2, canvas.height * 0.66);
}

function countDown(number, delay){
  window.setTimeout(function(){
    renderWorld(context, world);
    context.fillStyle = 'blanchedalmond';
    context.fillText('Get Ready...', canvas.width/2, canvas.height * 0.66);
    context.fillText(number, canvas.width/2, canvas.height * 0.75);
  }, delay);
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX;
  if(relativeX - world.paddle.width >= 0 && relativeX <= canvas.width) {
    world.paddle.x = relativeX - world.paddle.width;
  }
}

function tick(world) {
  world.tick();
}

function nextLevel(){
  world = new World(canvas.width, canvas.height, 0);  currentLevelCounter++;
  world.translateLevel(Levels[currentLevelCounter]);
  world.renderLevel(world.newLevel);
  world.renderCourt(world.newLevel);
  renderWorld();
  worldStart();
}

function worldStart(){
  renderStartScreen('Get Ready...');
  countDown('3', 0);
  countDown('2', 1000);
  countDown ('1', 2000);
  window.setTimeout(function(){
    world.gameState = 1;
    enterLoop();}, 3000);
}

function enterLoop(){
  requestAnimationFrame(function gameLoop() {
    if (world.gameState === 1){
      renderWorld();
      tick(world);
      requestAnimationFrame(gameLoop);
    }
    else if (world.gameState === 2){
      world.gameState = 0;
      worldStart();
    }
    else if (world.gameState === 3){
      world.gameState = 0;
      drawCanvas();
      nextLevel();
    }
    else {
      requestAnimationFrame(gameLoop);
    }
  });
}

renderWorld();

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow(); }
  if (event.keyCode === 37) { world.leftArrow(); }
  if (event.keyCode === 32) { worldStart();}
});

document.addEventListener("mousemove", mouseMoveHandler, false);
