
function Paddle(options) {
  options = options || {};
  this.width = options.width || 100;
  this.height = options.height || 10;
  this.x = options.x || 350;
  this.y = options.y || 470;
  this.world = options.world;
  this.speed = 20;
}

Paddle.prototype.moveLeft = function() {
  this.x -= this.speed;
};

Paddle.prototype.moveRight = function() {
  this.x += this.speed;
};

module.exports = Paddle;
