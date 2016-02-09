const $ = require('jquery');
const Snake = require('./snake');


function startGame(){
  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');
  var snake = new Snake({});

  $('#start-game').on('click', function(){
      context.fillRect(snake.x, snake.y, snake.height, snake.width);
  })
};

startGame();

// requestAnimationFrame(function gameLoop() {
  // clear frame before drawing new stuff
  // object.draw()
  // check for Game Over

});
