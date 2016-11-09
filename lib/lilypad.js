function Lilypad() {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Lilypad.prototype.drawHome = function () {
  context.fillStyle = 'transparent';
  context.fillRect = (this.x, this.y, this.width, this.height);
  return this;
}

module.exports = Lilypad;
