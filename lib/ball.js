function Ball(options) {
  this.x = options.x || 350;
  this.y = options.y || 450;
  this.height = 10;
  this.width = 10;
}

Ball.prototype.bounceUpRight = function() {
  this.x +=2;
  this.y -=2;
};

Ball.prototype.bounceUpLeft = function() {
  this.x -=2;
  this.y -=2;
};

Ball.prototype.bounceDownRight = function() {
  this.x +=2;
  this.y +=2;
};

Ball.prototype.bounceDownLeft = function() {
  this.x -=2;
  this.y -=2;
};


module.exports = Ball;
