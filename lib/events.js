module.exports = function listenForEvents(world, document) {
  var snake = world.snake;

  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 38) {while (snake.y >= 10){snake.moveUp();}}

    if (e.keyCode === 40) {snake.moveDown();}

    if (e.keyCode === 37) {snake.moveLeft();}

    if (e.keyCode === 39) {snake.moveRight();}
  });
}
