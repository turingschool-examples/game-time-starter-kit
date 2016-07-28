var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var $ = require('jquery')

const Paddle = require('./paddle');
const Ball   = require('./ball')
// const Brick = require('./brick')
const World = require('./world')

var world = new World(canvas.width, canvas.height);
// var paddle = new Paddle
var ball = new Ball
// world.addPaddle(paddle);
world.addPaddle(new Paddle({}, world));

function renderWorld(context) {
  context.fillRect(0, 0, world.width, world.height);

  world.paddles.forEach(function (paddle) {
  context.clearRect(paddle.x, paddle.y, paddle.width, paddle.height);
});
  // context.arc(ball.x, ball.y, 10, 0, Math.PI*2);
}

// renderWorld(context)



requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  requestAnimationFrame(gameLoop);
})


document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) world.rightArrowPressed();
  if (event.keyCode === 37) world.leftArrowPressed();
})
