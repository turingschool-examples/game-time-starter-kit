class Paddle {
  constructor (properties, world) {
    if (typeof properties !== 'object')  properties = {}
    this.height = properties.height || 100
    this.width = properties.width || 10
    this.x = properties.x || 400
    this.y = properties.y || 450
    this.world = world
  };

  moveRight() {
    this.x = this.x + 1;
    return this.x
  };

  moveLeft() {
    this.x = this.x - 1;
    return this.x
  };
};

module.exports = Paddle;
