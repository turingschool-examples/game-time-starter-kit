const Ball = require('./ball');
const Brick = require('./brick');
const World = require('./world');

class Paddle {
  constructor (properties, world, ball) {
    if (typeof properties !== 'object')  properties = {}
    this.height = properties.height || 10
    this.width = properties.width || 100
    this.x = properties.x || 400
    this.y = properties.y || 450
    this.world = world
    this.ball = ball
  };

  moveRight() {
    if (this.x + this.width === 900) return this.x
    this.x = this.x + 20;
    return this.x
  };

  moveLeft() {
    if (this.x === 0) return this.x
    this.x = this.x - 20;
    return this.x
  };
};

module.exports = Paddle;
