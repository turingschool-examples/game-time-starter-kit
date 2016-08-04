
function Paddle(options) {
  options = options || {};
  this.width = options.width || 100;
  this.height = options.height || 10;
  this.x = typeof options.x === 'undefined' ? 325 : options.x;
  this.y = options.y || 470;
  this.world = options.world;
  this.speed = 40;
}

Paddle.prototype.moveLeft = function() {
  this.x -= this.speed;
};

Paddle.prototype.moveRight = function() {
  this.x += this.speed;
};

module.exports = Paddle;
