const Paddle = require('./paddle');
const Ball   = require('./ball')
const Brick = require('./brick')

class World {
  constructor() {
    this.height = 500;
    this.width = 900;
    this.paddles = []
    this.ball = new Ball
    this.bricks = []
  }

  addPaddle(paddle) {
   paddle.world = this;
   this.paddles.push(paddle);
  }

  rightArrowPressed() {
    this.paddles.forEach(paddle => {
      paddle.moveRight();
    });
  }

  leftArrowPressed() {
    this.paddles.forEach(paddle => {
      paddle.moveLeft();
    });
  }
}

module.exports = World;
