function Lilypad(options) {
  this.x = options.x;
  this.y = options.y;
  this.width = 60;
  this.height = 60;
}

Lilypad.prototype.drawHome = function (context) {
  context.fillStyle = "transparent";
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

module.exports = Lilypad;
