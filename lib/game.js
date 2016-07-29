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
  // if (e.keyCode === 38) {snake.move(1);}
  //
  // if (e.keyCode === 40) {snake.move(2);}
  //
  // if (e.keyCode === 37) {snake.move(3);}
  //
  // if (e.keyCode === 39) {snake.move(4);}
});
// function tick(world) {
//   world.tick();
// }

requestAnimationFrame(function gameLoop() {

  world.renderWorld(context, world);
  world.updateWorld();
  requestAnimationFrame(gameLoop);
});

// listenForEvents(world, document);
