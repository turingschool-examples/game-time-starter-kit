
function Light(x, y, height, width, state, grid) {
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
  this.state = true || false;
  this.grid = grid;
}

Light.prototype.turnOn = function() {
  this.state = true;
  return this;
}

Light.prototype.turnOff = function() {
  this.state = false;
  return this;
}

module.exports = Light;
