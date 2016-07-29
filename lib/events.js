module.exports = function listenForEvents(world, document) {
  var snake = world.snake;

  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 38) {snake.move(1);}

    if (e.keyCode === 40) {snake.move(2);}

    if (e.keyCode === 37) {snake.move(3);}

    if (e.keyCode === 39) {snake.move(4);}
  });
}
