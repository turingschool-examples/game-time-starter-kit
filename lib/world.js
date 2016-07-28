const Snake = require('./snake');

function World(width = 500, height = 500) {
  this.width = width;
  this.height = height
  this.snake = new Snake(this);
};



module.exports = World;
