const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

// const Snake = require('./snake');
const World = require('./world');

// var snake = new Snake();
var world = new World(canvas.width, canvas.height);
function renderWorld(context, world) {
  context.clearRect(0,0,world.width,world.height);

  // world.snake.forEach(function (snake) {
  var snake = world.snake;
  // context.fillStyle = "red";
    context.fillRect(snake.x, snake.y, snake.width, snake.height);
  // });
}
//
// requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
//   requestAnimationFrame(gameLoop);
// });

function callback() {
  renderWorld(context, world);
}

setInterval(callback, 500);
