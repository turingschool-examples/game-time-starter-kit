const Snake = require('./snake');

function World(width, height) {
  this.width = width || 500;
  this.height = height || 500;
  this.snake = new Snake(this);
};

module.exports = World;
