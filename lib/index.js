// const $ = require('jquery');
const Snake = require('../lib/snake');

 let canvas = document.getElementById("canvas");
 let context = canvas.getContext('2d');
 document.addEventListener('keydown', keyPressed);

 var x = 50;
 var y = 50;
 var width = 10;
 var height = 10;
 var snake = new Snake({});

 requestAnimationFrame(function gameLoop() {
  //  snake.draw
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.fillRect(x++, y, width, height);
   requestAnimationFrame(gameLoop);
 });

function keyPressed(event){
  debugger
  if (event.keyCode === '40'){

    snake.moveDown();
  } else if (event.keyCode === '39'){
    snake.moveRight();
  } else if (event.keyCode === '38'){
    snake.moveUp();
  } else if (event.keyCode === '37'){
    snake.moveLeft();
  }
}
