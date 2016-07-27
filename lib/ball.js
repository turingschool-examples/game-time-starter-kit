function Ball(options) {
  this.x = options.x || 450;
  this.y = options.y || 350;
  this.height = 10;
  this.width = 10;
  this.speed = 2;
  this.world = options.world;
}

Ball.prototype.bounceUpRight = function() {
  this.x +=this.speed;
  this.y -=this.speed;
};

Ball.prototype.bounceUpLeft = function() {
  this.x -=this.speed;
  this.y -=this.speed;
};

Ball.prototype.bounceDownRight = function() {
  this.x +=this.speed;
  this.y +=this.speed;
};

Ball.prototype.bounceDownLeft = function() {
  this.x -=this.speed;
  this.y -=this.speed;
};


module.exports = Ball;
