var highScores = [];
if (localStorage["high-scores"] !== undefined) {
  highScores = JSON.parse(localStorage["high-scores"]);
}
displayHighScores();

const Ball = require('./ball');
const GateBuilder = require('./gate-builder');
const GatePainter = require('./gate-painter');
const CollisionDetect = require('./collision-detect');
const Game = require('./game');
const Scoring = require('./score');

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

var ballSpeed = 5;
var acceleration = 0.5;
var fallSpeed = 5;
var gameInPlay = false;
var paused = null;
var lost = false;
var gates = [];
var ball = new Ball(canvas, {});
var game = new Game(canvas, ctx);
var score = [];
var scoreAdded = false;

new GateBuilder(gates, canvas);

canvas.addEventListener('click', function(){
  if (gameInPlay && !lost) {
    paused = true;
    gameInPlay = false;
  } else {
    gameInPlay = true;
    lost = false;
  }
});

requestAnimationFrame(function gameLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  checkIfPlayerLost(ball);
  if (gameInPlay && !lost) {
    drawGame(ctx, fallSpeed, acceleration, ballSpeed, canvas, gameInPlay, gates, ball, game);
    requestAnimationFrame(gameLoop);
  } else if (lost) {
    resetGame(ball, canvas, game, ctx);
    requestAnimationFrame(gameLoop);
  } else if (paused) {
    game.paused(ctx);
    requestAnimationFrame(gameLoop);
  } else {
    game.default(ctx);
    requestAnimationFrame(gameLoop);
  }
});

function checkIfPlayerLost(ball) {
  if (gameInPlay && ball.y < ball.r) {
    lost = true;
  }
}

function drawGame(ctx, fallSpeed, acceleration, ballSpeed, canvas, gameInPlay, gates, ball, game) {
  var img = new Image();
  img.src = "../assets/wall.png";
  ctx.drawImage(img, 0, 0);
  ball.draw(ctx);
  ball.update(fallSpeed, acceleration, canvas);
  new GatePainter(gates, ctx, game.speed, canvas);
  new CollisionDetect(ball, gates, score, game);
  game.update(game.score, ball);
  new Scoring(ctx, game.score);
  if (scoreAdded === true) {
    game.score = 0;
    scoreAdded = false;
  }
}

function resetGame(ball, canvas, game) {
  ball.y = 10;
  gates = [];
  new GateBuilder(gates, canvas);
  if (scoreAdded === false) {
    updateHighScores(game.score, highScores);
    displayHighScores();
  }
  if (highScores.includes(game.score)) {
    game.newHighScore(ctx);
  } else {
    game.lost(ctx);
  }
  scoreAdded = true;
}

function addScoreToHighScoreList(score) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(score + " points");
  node.appendChild(textnode);
  document.getElementById("high-score-list").appendChild(node);
}

function displayHighScores() {
  document.getElementById("high-score-list").innerHTML = '';
  highScores.forEach(function(score){
    addScoreToHighScoreList(score);
  });
}

function updateHighScores(gameScore, highScores, options){
  var opts = options || {numberOfScoresToKeep: 5};
  highScores.push(gameScore);
  highScores.sort(function(a, b){ return b-a; });
  if (highScores.length > opts.numberOfScoresToKeep) {
    highScores.pop();
  }
  localStorage["high-scores"] = JSON.stringify(highScores);
}
