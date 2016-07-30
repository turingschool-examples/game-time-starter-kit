const Paddle = require('./paddle');
const Ball   = require('./ball')
const Brick = require('./brick')
const Detector = require('./detector')

class World {
  constructor() {
    this.height = 500;
    this.width = 900;
    this.paddles = []
    this.balls = []
    this.bricks = []
    this.ball = new Ball
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
      // ball.checkRightWallCollision();
    })
  }

//   // checkRightWallCollision(ball) {
//   //   let result = ball.x + ball.width >= world.width;
//   //   if (result) ball.onRightWall = true;
//   //   return ball.moveBallUpAndLeft ();
//   //   // return result;
//   // }
// }

module.exports = World;
