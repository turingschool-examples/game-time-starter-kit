const canvas = document.getElementById("game-canvas");

const ctx = canvas.getContext('2d');

const Snake = require('./snake');

let snake = new Snake({ ctx: ctx });


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.draw();
  snake.moveRightDirection();
  requestAnimationFrame(animate);
}

animate();
