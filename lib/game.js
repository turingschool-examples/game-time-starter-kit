const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');

var world = new World(canvas.width, canvas.height);
function renderWorld(context, world) {
  context.clearRect(0,0,world.width,world.height);

  world.snake.forEach(function (snake) {
    context.fillRect(snake.x, snake.y, snake.width, snake.height);
  });
}
