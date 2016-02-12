const BallHelper = require('./helpers/ball-helpers')

function Ball(options, canvas){
  this.r = BallHelper.radius(options);
  this.x = BallHelper.xPosition(options, canvas);
  this.y = BallHelper.yPosition(options, canvas) || 0 + this.r;
  this.sAngle = 0
  this.eAngle = 2 * Math.PI
  this.keyboarder = new Keyboarder
}

Ball.prototype.draw = function(ctx) {
  var that = this
  BallHelper.drawBallOnCanvas(ctx, that);
  return this;
};

Ball.prototype.update = function(fallSpeed, keyboarder, ballspeed, canvas){
  var topOfCanvas = 0 + this.r
  if (this.y === topOfCanvas) {
    console.log("You lose")
    this.y = this.r
  } else if (this.y < (canvas.height - this.r)) {
    this.y += fallSpeed
  }
  var leftPixel = this.x - 1
  var rightPixel = this.x + 1
  if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT) && leftPixel > 8) {
    this.x -= ballspeed
  } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT) && rightPixel < (canvas.width - this.r)) {
    this.x += ballspeed
  } else if (this.y === canvas.height) {
    this.y = canvas.height
  }
}


Ball.prototype.moveRight = function() {
  this.x++;
  return this;
}

Ball.prototype.moveLeft = function() {
  this.x--;
  return this;
}


var Keyboarder = function() {
  var keyState = {};

  document.onkeydown = function(e) {
    keyState[e.keyCode] = true;
  }

  document.onkeyup = function(e) {
    keyState[e.keyCode] = false;
  }

  this.isDown = function(keyCode) {
    return keyState[keyCode] === true;
  };

  this.KEYS = { LEFT: 37, RIGHT: 39 };
}

module.exports = Ball;
