function Ball(options) {
  this.height = 10;
  this.width = 10;
  this.x = options.x;
  this.y = options.y;
  this.speed = 2;
  this.world = options.world;
  this.directionX = this.speed;
  this.directionY = -this.speed;

}

Ball.prototype.start = function() {
  this.x += this.directionX;
  this.y += this.directionY;
};

Ball.prototype.invertX = function() {
  this.directionX = -this.directionX;
};

Ball.prototype.invertY = function (){
  this.directionY = -this.directionY;
};

Ball.prototype.invert = function(){
  this.directionY = -this.directionY;
  this.directionX = -this.directionX;
};

module.exports = Ball;
