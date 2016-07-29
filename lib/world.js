const Paddle = require('./paddle');
const Ball   = require('./ball')
const Brick = require('./brick')

class World {
  constructor() {
    this.height = 500;
    this.width = 900;
    this.paddles = []
    this.balls = []
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

  addBrick(brick) {
    brick.world = this;
    this.bricks.push(brick);
  }

  addBall(ball) {
    // ball.world = this;
    this.balls.push(ball);
  }

  spaceBarPressed() {
    this.balls.forEach(ball => {
      ball.moveBall();
    })
  }
}

module.exports = World;
