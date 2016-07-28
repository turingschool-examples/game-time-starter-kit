function Ball(options) {
  this.height = 10;
  this.width = 10;
  this.x = options.x || 395;
  this.y = options.y || 460;
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
  this.x = -this.x;
};

Ball.prototype.invertY = function (){
  this.y = -this.y;
};

Ball.prototype.invert = function(){
  this.y = -this.y;
  this.x = -this.x;
};

module.exports = Ball;
