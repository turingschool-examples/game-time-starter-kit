const Snake = require('./snake');
const Apple = require('./apple');

function World(width = 500, height = 500) {
  this.width = width;
  this.height = height
  this.snake = new Snake(this);
  this.apple = new Apple(this);
};

World.prototype.isSnakeColliding = function () {
  var snake = this.snake;
  // return this.enemies.find(function (enemy) {
  //   return blocky.isCollidingWith(enemy);
  // });
};


module.exports = World;
