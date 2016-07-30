
class Ball {
  constructor (properties, world) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 16;
    this.width = properties.width || 16;
    this.x = properties.x || 442;
    this.y = properties.y || 434;
    this.speedx = properties.speedx || 4;
    this.speedy = properties.speedy || -3;
    this.world = world;
    this.onRightWall = false;
    this.onTopWall = false;
    this.onLeftWall = false;
    this.onBottomWall = false;
  };

  moveBall() {
    this.y = this.y + this.speedy;
    this.x = this.x + this.speedx;
  };

};

module.exports = Ball;
