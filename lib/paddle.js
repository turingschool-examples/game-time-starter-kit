function Paddle(properties) {
  this.height = properties.height || 5;
  this.width = properties.width || 10;
  this.x = properties.x || 50;
  this.y = properties.y || 30;
}

Paddle.prototype.moveRight = function() {
  this.x = (this.x + this.width) + 1;
  }

Paddle.prototype.moveLeft = function() {
  
}

module.exports = Paddle;
