const Paddle = require('./paddle');
var paddle = new Paddle({});

function Ball(options) {
  this.height = 10;
  this.width = 10;
  this.x = options.x || paddle.x + paddle.width/2 - this.width/2;
  this.y = options.y || (paddle.y - this.height);
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
