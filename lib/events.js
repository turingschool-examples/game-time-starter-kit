const $ = require('jquery');
const Snake = require('./snake');

var snake = new Snake();

//up arrow moves snake up
  $(document).ready(function() {
    $(document).keydown(function(e) {
      if (e.keyCode === 38) {
        snake.moveUp();
        console.log('snake up');
      }
    });

  //up arrow moves snake down
  $(document).keydown(function(e) {
    if (e.keyCode === 40) {
      snake.moveDown();
      console.log("move down");
    }
  });

  //up arrow moves snake left
  $(document).keydown(function(e) {
    if (e.keyCode === 37) {
      snake.moveLeft();
      console.log("move left");
    }
  });

  //up arrow moves snake right
  $(document).keydown(function(e) {
    if (e.keyCode === 39) {
      snake.moveRight();
      console.log("move right");
    }
  });
});
