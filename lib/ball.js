module.exports = Ball;

function Ball(options, canvas){
  this.r = options.r > 0 && options.r < 20 && options.r || 8; // can be fixed all the time?
  this.x = options.x > 0 && options.x < canvas.width && options.x || 0 + this.r;
  this.y = options.y > 0 && options.y < canvas.height && options.y || 0 + this.r;
  this.sAngle = 0
  this.eAngle = 2 * Math.PI
  this.keyboarder = new Keyboarder
}



Ball.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
  return this;
};

Ball.prototype.update = function(fallSpeed, keyboarder, ballspeed){
  this.y += fallSpeed;
  if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
    this.x -= ballspeed
  } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
    this.x += ballspeed
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
