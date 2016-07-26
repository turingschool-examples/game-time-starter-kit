module.exports = Snake;

function Snake(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

//move snake
Snake.prototype.moveDirection = function() {
  var currentDirection = this.direction;
  if(currentDirection === 'right') {
    this.moveRightDirection();
  }
  if(currentDirection === 'left') {
    this.moveLeftDirection();
  }
  if(currentDirection === 'up') {
    this.moveUpDirection();
  }
  if(currentDirection === 'down') {
    this.moveDownDirection();
  }
};

Snake.prototype.moveRightDirection = function() {
  this.direction = 'right';
  this.x = this.x + 1;
};

Snake.prototype.moveLeftDirection = function() {
  this.direction = 'left';
  this.x = this.x - 1;
};

Snake.prototype.moveUpDirection = function() {
  this.direction = 'up';
  this.y = this.y + 1;
};

Snake.prototype.moveDownDirection = function() {
  this.direction = 'down';
  this.y = this.y - 1;
};

//snake grow
Snake.prototype.grow = function() {
  this.width = this.width + 2;
};

Snake.prototype.draw = function() {
  this.ctx.fillStyle = "#FF0000";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
