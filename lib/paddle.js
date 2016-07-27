class Paddle {
  constructor (properties, world) {
    if (typeof properties !== 'object')  properties = {}
    this.height = properties.height || 5
    this.width = properties.width || 10
    this.x = properties.x || 50
    this.y = properties.y || 30
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
