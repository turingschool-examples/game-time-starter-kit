const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');

// var snake = new Snake();
var world = new World(canvas.width, canvas.height);
function renderWorld(context, world) {
  // context.clearRect(0,0,world.width,world.height);

  // world.snake.forEach(function (snake) {
  var snake = world.snake;
  // context.fillStyle = "red";
  // });
}
//
var snake = world.snake

requestAnimationFrame(function gameLoop() {
  var something = context.fillRect(snake.x, snake.y, snake.width, snake.height);
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 38) {
    snake.moveUp();
    console.log('snake up');
  }

  if (e.keyCode === 40) {
    snake.moveDown();
    console.log("snake down");
  }

  if (e.keyCode === 37) {
    snake.moveLeft();
    console.log("snake left");
  }

  if (e.keyCode === 39) {
    snake.moveRight();
    console.log("snake right");
  }
});


// function callback() {
//   renderWorld(context, world);
// }
//
// setInterval(callback, 500);
