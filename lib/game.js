const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const Snake = require('./snake');
const World = require('./world');
const Apple = require('./apple');
const listenForEvents = require('./events');

// var snake = new Snake();
var world = new World(canvas.width, canvas.height);

function renderWorld(context, world) {
  var snake = world.snake;
  var apple = world.apple;
  context.clearRect(0,0,world.width,world.height);

  context.fillRect(snake.x, snake.y, snake.width, snake.height);
  context.fillRect(apple.x, apple.y, apple.width, apple.height);
  apple.fillStyle = "red";

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
