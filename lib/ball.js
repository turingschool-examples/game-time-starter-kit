const Paddle = require('./paddle');

var paddle = new Paddle();

function Ball(options) {
  options = options || {};
  this.height = 12;
  this.width = 12;
  this.x = options.x || 375;
  this.y = options.y || 458;
  this.speed = options.speed || 4;
  this.world = options.world;
  this.paddle = new Paddle();
  this.directionX = this.speed;
  this.directionY = -this.speed;
  this.defaultSpeed = this.speed;
}

Ball.prototype.invertX = function() {
  this.directionX = -this.directionX;
};

Ball.prototype.invertY = function () {
  this.directionY = -this.directionY;
};

Ball.prototype.invert = function() {
  this.directionY = -this.directionY;
  this.directionX = -this.directionX;
};

Ball.prototype.left45 = function() {
  this.directionY = -this.directionY;
  this.directionX = -this.defaultSpeed;
};

Ball.prototype.left60 = function() {
  this.directionY = (-this.defaultSpeed);
  this.directionX = (-this.defaultSpeed * 0.6);
};

Ball.prototype.right45 = function() {
  this.directionY = -this.directionY;
  this.directionX = (this.defaultSpeed);
};

Ball.prototype.right60 = function() {
  this.directionY = -this.directionY;
  this.directionX = (this.defaultSpeed * 0.6);
};

Ball.prototype.isCollidingWith = function(thing) {
return (this.x < thing.x + thing.width &&
   this.x + this.width > thing.x &&
   this.y < thing.y + thing.height &&
   this.height + this.y > thing.y);
 };

Ball.prototype.bounce = function(thing){
  var ballBottom = this.y + this.height;
  var ballTop = this.y;
  var ballLeft = this.x -4;
  var ballRight= this.x + this.width + 4;
  var thingBottom = thing.y + thing.height;
  var thingTop = thing.y;
  var thingLeft = thing.x;
  var thingRight = thing.x + thing.width;

    if ((ballRight > thingLeft) && (ballLeft < thingRight) && ((ballTop >= (thingBottom - 4))
  )) {
      this.invertY();
      }
    else if ((ballRight > thingLeft) && (ballLeft < thingRight) && ((ballBottom <= (thingTop + 4)))){
     this.invertY();
    }
    else {
      this.invertX();
    }
  };

module.exports = Ball;
