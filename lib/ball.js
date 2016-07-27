class Ball {
  constructor (properties) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 5;
    this.width = properties.width || 5;
    this.x = properties.x || 50;
    this.y = properties.y || 30;
  };

  moveUp() {
    this.y = this.y + 1;
    return this.y;
  };

  moveDown() {
    this.y = this.y - 1;
    return this.y;
  };

  moveUpAndLeft() {
    this.x = this.x - 1;
    this.y = this.y + 1;
    return this.y, this.x;
  };

  moveUpAndRight() {
    this.x = this.x + 1;
    this.y = this.y + 1;
    return this.y, this.x;
  };

  moveDownAndLeft() {
    this.x = this.x - 1;
    this.y = this.y - 1;
    return this.y, this.x;
  };

  moveDownAndRight() {
    this.x = this.x + 1;
    this.y = this.y - 1;
    return this.y, this.x;
  };
};

module.exports = Ball;
