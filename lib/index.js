const canvas = document.getElementById("game-canvas");

const ctx = canvas.getContext('2d');

const Snake = require('./snake');

let snake = new Snake({ ctx: ctx });


Snake.prototype.draw = function() {
  this.ctx.fillStyle = "#FF0000";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.draw();
  snake.moveRightDirection();
  requestAnimationFrame(animate);
}

animate();
