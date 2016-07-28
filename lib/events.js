module.exports = function listenForEvents(world, document) {
  var snake = world.snake;

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
}
