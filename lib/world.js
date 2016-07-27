function World(snake, width, height) {
  this.width = 500;
  this.height = 500;
  this.snake = snake;
  if (snake) { snake.world = this; }
};

module.exports = World;
