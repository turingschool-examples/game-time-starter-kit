var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

const Paddle = require('./paddle');
const Ball   = require('./ball')
// const Brick = require('./brick')
const World = require('./world')

var world = new World(canvas.width, canvas.height);
var paddle = new Paddle
var ball = new Ball
world.addPaddle(paddle);

function renderWorld(context) {
  context.fillRect(0, 0, world.width, world.height);
  context.clearRect(paddle.x, paddle.y, paddle.height, paddle.width);
  // context.arc(ball.x, ball.y, 10, 0, Math.PI*2);
}

// renderWorld(context)



requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  requestAnimationFrame(gameLoop);
})
