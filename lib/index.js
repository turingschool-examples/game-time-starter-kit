var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

const Paddle = require('./paddle');
// const Ball   = require('./ball')
// const Brick = require('./brick')
const World = require('./world')

var world = new World(canvas.width, canvas.height);
var paddle = new Paddle()
world.addPaddle(paddle);

function renderWorld(context) {
  // world.context.fillStyle="red";
  context.clearRect(0, 0, world.width, world.height);
    // context.fillRect(paddle.x, paddle.y, paddle.height, paddle.width);
}



requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  requestAnimationFrame(gameLoop);
})
