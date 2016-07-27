const Paddle = require('./paddle');
const Ball   = require('./ball')
const Brick = require('./brick')

class World {
  constructor() {
    this.height = 100;
    this.width = 200;
    this.paddle = new Paddle
    this.ball = new Ball
    this.bricks = []
  }

  addPaddle(paddle) {
   paddle.world = this;
  }
}

module.exports = World;
