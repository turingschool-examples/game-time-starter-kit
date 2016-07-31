const Paddle = require('./paddle');
const Brick = require('./brick');
const World = require('./world');

class Ball {
  constructor (properties, world, paddle) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 16;
    this.width = properties.width || 16;
    this.x = properties.x || 442;
    this.y = properties.y || 404;
    this.speedx = properties.speedx || 4;
    this.speedy = properties.speedy || -3;
    this.world = world;
    this.paddle = paddle;
  };

  moveBall() {
    this.y = this.y + this.speedy;
    this.x = this.x + this.speedx;
  };

  collisionWithPaddle(paddleY, paddleX, paddleWidth) {
    if(this.x > paddleX && this.x + this.width < paddleX + paddleWidth  && this.y + this.height === paddleY) {
      return this.speedy = -this.speedy
    };
  };
};

module.exports = Ball;
