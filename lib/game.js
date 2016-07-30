const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
const Snake = require('./snake');
const World = require('./world');
const Apple = require('./apple');
const listenForEvents = require('./events');

// var snake = new Snake();
var world = new World(canvas.width, canvas.height);



document.addEventListener('keydown', function(e) {
  world.updateWorld(e.keyCode);
});


requestAnimationFrame(function gameLoop() {

  world.renderWorld(context, world);
  world.updateWorld();
  world.eatFood();
  // if (world.snake.x === world.apple.x + world.apple.width &&  world.snake.y < world.apple.y + world.apple.height) {
  //   world.snake.gameOver();
  // }
  // if (world.snake.x < world.apple.x + world.apple.width &&
  //  world.snake.x + world.snake.width > world.apple.x &&
  //  world.snake.y < world.apple.y + world.apple.height &&
  //  world.snake.height + world.snake.y > world.apple.y){
  //  //world.snake.Grow() function goes here
  // }
  requestAnimationFrame(gameLoop);
});

// listenForEvents(world, document);
