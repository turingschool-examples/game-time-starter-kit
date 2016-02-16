const $ = require('jquery');
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const Game = require('../lib/game');

 let canvas = document.getElementById("canvas");
 let context = canvas.getContext('2d');

 snakeDidTurn();

 var x = 50;
 var y = 50;
 var width = 10;
 var height = 10;
 var time = new Date();
 var food = new Food({x: 300, y: 50, width: 10, height: 10}, context);
 // var snake2 = new Snake({x: x - 20, y: y, width: width, height: height,
 //                       time: time, nextSnake: null}, context);
 // var snake1 = new Snake({x: x - 10, y: y, width: width, height: height,
 //                       time: time, nextSnake: snake2}, context);
 var snake = new Snake({x: x, y: y, width: width, height: height,
                       time: time, nextSnake: null}, context);
 var game = new Game(canvas, context, snake, food);

 requestAnimationFrame(function gameLoop() {
   context.clearRect(0, 0, canvas.width, canvas.height);
   snake.draw();
   snake.move(new Date());
   food.draw();
   game.eatFace();
   requestAnimationFrame(gameLoop);
 });

 function snakeDidTurn(){
   window.addEventListener('keyup', function(event){
     if (event.keyCode === 40){
       snake.changeDirection('down');
     } else if (event.keyCode === 39){
       snake.changeDirection('right');
     } else if (event.keyCode === 38){
       snake.changeDirection('up');
     } else if (event.keyCode === 37){
       snake.changeDirection('left');
     }
   })
 }
