var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

canvas.addEventListener( "keydown", doKeyDown, true);

function Ball(options){
  this.r = options.r > 0 && options.r < 20 && options.r || 8; // can be fixed all the time?
  this.x = options.x > 0 && options.x < canvas.width && options.x || 0 + this.r;
  this.y = options.y > 0 && options.y < canvas.height && options.y || 0 + this.r;
  this.sAngle = 0
  this.eAngle = 2 * Math.PI
}

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.r, this.x, this.y, this.sAngle, this.eAngle);
  ctx.stroke();
  ctx.fill();
  return this;
};

Ball.prototype.moveRight = function() {
  if (doKeyDown(37)) {
    this.x++;
  }
  return this;
}

function doKeyDown(e) {
  alert( e.keyCode == 37 )
}

// keyPressed = function() {
//         keys[keyCode] = true;
//     };

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   blocks.forEach(function (block) { block.draw().move(); });
//   requestAnimationFrame(gameLoop);
// });

module.exports = Ball;
