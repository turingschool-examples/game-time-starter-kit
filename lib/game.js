const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');
const listenForEvents = require('./events');

// var snake = new Snake();
var world = new World(canvas.width, canvas.height);

function renderWorld(context, world) {
  var snake = world.snake;
  context.clearRect(0,0,world.width,world.height);

  // world.snake.forEach(function (snake) {
  context.fillRect(snake.x, snake.y, snake.width, snake.height);
  // context.fillStyle = "red";
  // });
}


requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  requestAnimationFrame(gameLoop);
});

listenForEvents(world, document);


// function callback() {
//   renderWorld(context, world);
// }
//
// setInterval(callback, 500);
