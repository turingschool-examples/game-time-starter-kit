class Brick {

constructor(properties) {
  this.height = properties.height || 5;
  this.width = properties.width || 10;
  this.x = properties.x || 100;
  this.y = properties.y || 100;
  }

}

module.exports = Brick;
