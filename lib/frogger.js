function Frog(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = 40;
  this.height = 40;
};

Frog.prototype.moveLeft = function () {
  if(this.x <= 25) {
    this.x = 0;
  } else {
    this.x = this.x - 50;
    return this;
  };
};

Frog.prototype.moveUp = function () {
  if(this.y <= 25) {
    this.y = 0;
  } else {
    this.y = this.y - 50;
    return this;
  };
};

Frog.prototype.moveRight = function () {
  if(this.x >= 760) {
    this.x = 760;
  } else {
    this.x = this.x + 50;
    return this;
  };
};

Frog.prototype.moveDown = function () {
  if(this.y >= 560) {
    this.y = 560;
  } else {
    this.y = this.y + 50;
    return this;
  };
};

Frog.prototype.frogDraw = function(context){
  context.fillStyle = 'green';
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

module.exports = Frog;
