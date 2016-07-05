const $ = require('jquery');
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const Game = require('../lib/game');

 let canvas = document.getElementById("canvas");
 let ctx = canvas.getContext('2d');

 snakeDidTurn();

 function chooseLevel(){
   window.addEventListener('keyup', function(event){
     if (event.keyCode === 69){
       snake.interval = 150;
     } else if (event.keyCode === 77){
       snake.interval = 110;
     } else if (event.keyCode === 72){
       snake.interval = 70;
     } else if (event.keyCode === 67){
       snake.interval = 30;
     } else {
       return false;
     }
   });
 }

 var x = 50;
 var y = 50;
 var width = 10;
 var height = 10;
 var interval = chooseLevel();
 var time = new Date();
 var food = new Food({x: 300, y: 50, width: 10, height: 10}, ctx);
 var snake = new Snake({x: x, y: y, width: width, height: height,
                       time: time, nextSnake: null, interval: interval }, ctx);
 var game = new Game(canvas, ctx, snake, food);
// if (snake.level){
 requestAnimationFrame(function gameLoop() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   snake.setInterval();
   snake.draw();
   snake.move(new Date());
   food.draw();
   game.eatFace();
   score(game.score);
   if (game.collisionDetector() === 'collision'){
     alert("Learn how to rake, bro.");
     init();
   }
   requestAnimationFrame(gameLoop);
 });
 // }


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
    time = new Date();
    food = new Food({x: 300, y: 50, width: 10, height: 10}, ctx);
    snake = new Snake({x: x, y: y, width: width, height: height,
                         time: time, nextSnake: null}, ctx);
    game = new Game(canvas, ctx, snake, food);

 }
