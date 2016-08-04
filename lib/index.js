// var $ = require ('jquery');
const canvas = document.getElementById('arkannoyed-canvas');
const context = canvas.getContext('2d');
const World = require('./world');
const Levels = require('./level');

var lifeCounter = document.getElementById('life-counter-js');
var almond = new Image();
var world = new World(canvas.width, canvas.height, 0);
var currentLevelCounter = 0;
var maxLevels = 12;
gameInit();
renderWorld();
world.gameState = 0;


function gameInit() {
world.translateLevel(Levels[currentLevelCounter]);
world.renderLevel(world.newLevel);
world.renderCourt(world.newLevel);
}

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

function updateLives(text){
  lifeCounter.textContent= text;
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
    renderWorld();
    context.fillStyle = 'blanchedalmond';
    context.fillText('Get Ready...', canvas.width/2, canvas.height * 0.66);
    context.fillText(number, canvas.width/2, canvas.height * 0.75);
  }, delay);
}

function displayGameOver(){
  context.fillStyle = 'blanchedalmond';
  context.fillText('Game Over.', canvas.width/2, canvas.height * 0.66);
  document.getElementById("reset").disabled = false;
}

function displayGameWon() {
  context.fillStyle = 'blanchedalmond';
  context.fillText('Congratulations, you won!', canvas.width/2, canvas.height * 0.66);
  document.getElementById("reset").disabled = false;
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
  if (currentLevelCounter === maxLevels) {
    displayGameWon();
  }
  else {
    world = new World(canvas.width, canvas.height, 0);  currentLevelCounter++;
    world.translateLevel(Levels[currentLevelCounter]);
    world.renderLevel(world.newLevel);
    world.renderCourt(world.newLevel);
    renderWorld();
    worldStart();
  }
}

function prevLevel() {
  world = new World(canvas.width, canvas.height, 0);  currentLevelCounter--;
  world.translateLevel(Levels[currentLevelCounter]);
  world.renderLevel(world.newLevel);
  world.renderCourt(world.newLevel);
  renderWorld();
  worldStart();
}

function worldStart(){
  updateLives(world.lives);
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
    else if (world.gameState === 4){
      world.gameState = 0;
      drawCanvas();
      prevLevel();
    }
    else if (world.gameState === 5){
      updateLives('0');
      displayGameOver();
    }
    else {
      requestAnimationFrame(gameLoop);
    }
  });
}

function resetPage() {
  document.location.reload(true);
}

renderWorld();


document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { world.rightArrow(); }
  if (event.keyCode === 37) { world.leftArrow(); }
});

document.addEventListener("mousemove", mouseMoveHandler, false);

document.getElementById("start").addEventListener("click", function() {
  worldStart();
  this.disabled=true;
});

document.getElementById("level-up").addEventListener("click", function() {
if (currentLevelCounter < maxLevels) {
    if (world.gameState === 0) {
      world = new World(canvas.width, canvas.height, 0);
      currentLevelCounter++;
      world.translateLevel(Levels[currentLevelCounter]);
      world.renderLevel(world.newLevel);
      world.renderCourt(world.newLevel);
      renderWorld();
    }
    if (world.gameState === 1) {
      world.gameState = 3;
    }
  }
});

document.getElementById("level-down").addEventListener("click", function() {
  if (currentLevelCounter > 0) {
    if (world.gameState === 0) {
      world = new World(canvas.width, canvas.height, 0);
      currentLevelCounter--;
      world.translateLevel(Levels[currentLevelCounter]);
      world.renderLevel(world.newLevel);
      world.renderCourt(world.newLevel);
      renderWorld();
    }
    if (world.gameState === 1) {
      world.gameState = 4;
    }
  }
});

document.getElementById("reset").addEventListener("click", resetPage);
