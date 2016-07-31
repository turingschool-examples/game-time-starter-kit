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
  requestAnimationFrame(gameLoop);
});

// listenForEvents(world, document);
