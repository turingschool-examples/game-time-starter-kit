const $ = require('jquery');
const Snake = require('../lib/snake');

 let canvas = document.getElementById("canvas");
 let context = canvas.getContext('2d');
 snakeDidTurn();

 var x = 50;
 var y = 50;
 var width = 10;
 var height = 10;
 var snake = new Snake({x: x, y: y, width: width, height: height}, context);

 requestAnimationFrame(function gameLoop() {
   context.clearRect(0, 0, canvas.width, canvas.height);
   snake.draw();
   snake.move();
   requestAnimationFrame(gameLoop);
 });

function snakeDidTurn(){
  window.addEventListener('keyup', function(event){
    if (event.keyCode === 40){
      snake.changeDirectionDown();
    } else if (event.keyCode === 39){
      snake.changeDirectionUp();
    } else if (event.keyCode === 38){
      snake.changeDirectionRight();
    } else if (event.keyCode === 37){
      snake.changeDirectionLeft();
    }
  })
}
