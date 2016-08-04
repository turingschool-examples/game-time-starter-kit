function World(width, height, floor, surfer, rocks) {
  this.width = width || 600;
  this.height = height || 200;
  this.surfer = surfer;
  this.rocks = rocks;
  this.floor = floor;
}

module.exports = World;
