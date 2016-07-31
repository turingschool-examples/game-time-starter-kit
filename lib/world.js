const Paddle = require('./paddle');
const Ball   = require('./ball');
const Brick = require('./brick');

class World {
  constructor(ball) {
    this.height = 500;
    this.width = 900;
    this.paddles = []
    this.balls = []
    this.bricks = []
    this.ball = ball
  };

  addPaddle(paddle) {
   this.paddles.push(paddle);
 };

  rightArrowPressed() {
    this.paddles.forEach(paddle => {
      paddle.moveRight();
    });
  };

  leftArrowPressed() {
    this.paddles.forEach(paddle => {
      paddle.moveLeft();
    });
  };

  addBrick(brick) {
    this.bricks.push(brick);
  };

  addBall(ball) {
    this.balls.push(ball);
  };

  spaceBarPressed() {
    this.balls.forEach(ball => {
      ball.moveBall();
    });
  };

  paddleDetection() {
    let paddleX = this.paddles[0].x
    let paddleY = this.paddles[0].y
    let paddleWidth = this.paddles[0].width
    this.balls.forEach(ball => {
      ball.collisionWithPaddle(paddleY, paddleX, paddleWidth);
    });
  };
};

module.exports = World;
