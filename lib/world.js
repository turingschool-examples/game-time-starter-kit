const Paddle = require('./paddle');
const Ball   = require('./ball')
const Brick = require('./brick')

class World {
  constructor() {
    this.height = 500;
    this.width = 900;
    this.paddle = new Paddle
    this.ball = new Ball
    this.bricks = []
  }

  addPaddle(paddle) {
   paddle.world = this;
  }
}

module.exports = World;
