module.exports = Ball;

function Ball(options, canvas){
  this.r = options.r > 0 && options.r < 20 && options.r || 8; // can be fixed all the time?
  this.x = options.x > 0 && options.x < canvas.width && options.x || 0 + this.r;
  this.y = options.y > 0 && options.y < canvas.height && options.y || 0 + this.r;
  this.sAngle = 0
  this.eAngle = 2 * Math.PI
}

Ball.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
  return this;
};

Ball.prototype.update = function(fallSpeed){
  this.y += fallSpeed;
}


Ball.prototype.moveRight = function() {
  this.x++;
  return this;
}

Ball.prototype.moveLeft = function() {
  this.x--;
  return this;
}

function moveBall(ball){
  document.onkeydown = function(e) {
    switch(e.keyCode){
      case 37:
        console.log('left')
        ball.moveLeft();
        break;
      case 39:
        console.log('right')
        ball.moveRight();
        break;
      default:
        ball.x = ball.x
    }
  }

}

// var keyState = {};

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   blocks.forEach(function (block) { block.draw().move(); });
//   requestAnimationFrame(gameLoop);
// });


// // module.exports = Ball
//
// var canvas = document.getElementById('game');
//
// var ball = new Ball({}, canvas)
// ball.draw();
