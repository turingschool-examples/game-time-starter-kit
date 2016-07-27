const Paddle = require('./paddle');
// const Ball   = require('./ball')
class World {
  constructor() {
    this.height = 200;
    this.width = 200;
    this.paddle = new Paddle()
    // this.ball = new Ball
    this.brick = []
  }
}

module.exports = World;
