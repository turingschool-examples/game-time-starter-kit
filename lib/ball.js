function Ball(options, canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.r = options.r > 0 && options.r < 20 && options.r || 8; // can be fixed all the time?
  this.x = options.x > 0 && options.x < canvas.width && options.x || 0 + this.r;
  this.y = options.y > 0 && options.y < canvas.height && options.y || 0 + this.r;
  this.sAngle = 0
  this.eAngle = 2 * Math.PI
}

Ball.prototype.draw = function() {
  this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height );
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
  this.ctx.stroke();
  this.ctx.fillStyle = "blue";
  this.ctx.fill();
  return this;
};

Ball.prototype.moveRight = function() {
  this.x++;
  this.draw();
  return this;
}
Ball.prototype.moveLeft = function() {
  this.x--;
  this.draw();
  return this;
}

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   blocks.forEach(function (block) { block.draw().move(); });
//   requestAnimationFrame(gameLoop);
// });


// module.exports = Ball

var canvas = document.getElementById('game');

ball = new Ball({}, canvas)
ball.draw();

var keyState = {};

document.onkeydown = function(e) {

  switch(e.keyCode){
    case 37:
      ball.moveLeft();
      break;
    case 39:
      ball.moveRight();
      break;
  }
}
