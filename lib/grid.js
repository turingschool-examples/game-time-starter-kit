function Grid(width, height, lights) {
  this.width = width;
  this.height = height;
  this.lights = [];
}

Grid.prototype.addLight = function (light) {
  light.grid = this;
  this.lights.push(light);
};

Grid.prototype.createTable = function () {

}

module.exports = Grid;
