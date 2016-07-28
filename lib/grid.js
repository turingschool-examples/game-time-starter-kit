function Grid(rows, columns, lights) {
  this.rows = rows;
  this.columns = columns;
  this.lights = [];
}

Grid.prototype.addLight = function (light) {
  light.grid = this;
  this.lights.push(light);
};

Grid.prototype.createTable = function () {

}

module.exports = Grid;
