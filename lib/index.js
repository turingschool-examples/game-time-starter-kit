const $ = require('jquery');
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const Game = require('../lib/game');

 let canvas = document.getElementById("canvas");
 let ctx = canvas.getContext('2d');

 snakeDidTurn();

 var x = 50;
 var y = 50;
 var width = 10;
 var height = 10;
 var interval = chooseLevel();
 var food = new Food({x: 300, y: 50, width: 10, height: 10}, ctx);
 var snake = new Snake({x: x, y: y, width: width, height: height,
                        nextSnake: null, interval: interval }, ctx);
 var game = new Game(canvas, ctx, snake, food);
 var gameRunning = false;

function start() {
  gameRunning = true;
 requestAnimationFrame(function gameLoop() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   snake.setInterval();
   snake.draw();
   snake.move();
   food.draw();
   game.eatFace();
   score(game.score);
   if (game.collisionDetector() === 'collision'){
     alert("Learn how to rake, bro. Select your level and rake again!");
     init();
     gameRunning = false;
     return;
   }
   setTimeout(function() {requestAnimationFrame(gameLoop);}, snake.interval);
 });
}

 function chooseLevel(){
   window.addEventListener('keyup', function(event){
     if (!gameRunning) {
       if (event.keyCode === 69){
         snake.interval = 115;
         start();
       } else if (event.keyCode === 77){
         snake.interval = 85;
         start();
       } else if (event.keyCode === 72){
         snake.interval = 65;
         start();
       } else if (event.keyCode === 83){
         snake.interval = 35;
         start();
       } else {
         return false;
       }
     }
   });
 }


function score(score) {
  $("#score").html('<h4>Score:' + ' ' + score + '</h4>');
}

 function snakeDidTurn(){
   window.addEventListener('keydown', function(event){
     if (event.keyCode === 40){
       snake.changeDirection('down');
     } else if (event.keyCode === 39){
       snake.changeDirection('right');
     } else if (event.keyCode === 38){
       snake.changeDirection('up');
     } else if (event.keyCode === 37){
       snake.changeDirection('left');
     }
   });
 }

 function init(){
    x = 50;
    y = 50;
    width = 10;
    height = 10;
    food = new Food({x: 300, y: 50, width: 10, height: 10}, ctx);
    snake = new Snake({x: x, y: y, width: width, height: height,
                       nextSnake: null}, ctx);
    game = new Game(canvas, ctx, snake, food);

 }
