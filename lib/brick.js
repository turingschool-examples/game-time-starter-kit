const Paddle = require('./paddle');
const Ball   = require('./ball');
const World = require('./world');

class Brick {
  constructor (properties, world) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 20;
    this.width = properties.width || 60;
    this.x = properties.x || 100;
    this.y = properties.y || 100;
    this.world = world
  };
};

module.exports = Brick;
