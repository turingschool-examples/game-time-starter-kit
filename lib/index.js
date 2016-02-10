const $ = require('jquery');
const Snake = require('../lib/snake');
const Food = require('../lib/food');

 let canvas = document.getElementById("canvas");
 let context = canvas.getContext('2d');
 snakeDidTurn();

 var x = 50;
 var y = 50;
 var width = 10;
 var height = 10;
 var snake = new Snake({x: x, y: y, width: width, height: height}, context);
 var food = new Food({x: 300, y: 50, width: 10, height: 10}, context);

 requestAnimationFrame(function gameLoop() {
   context.clearRect(0, 0, canvas.width, canvas.height);
   snake.draw();
   snake.move();
   food.draw();
   food.move_food();
   requestAnimationFrame(gameLoop);
 });

function snakeDidTurn(){
  window.addEventListener('keyup', function(event){
    if (event.keyCode === 40){
      snake.changeDirectionDown();
    } else if (event.keyCode === 39){
      snake.changeDirectionRight();
    } else if (event.keyCode === 38){
      snake.changeDirectionUp();
    } else if (event.keyCode === 37){
      snake.changeDirectionLeft();
    }
  })
}
