var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function Frog(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

Frog.prototype.moveLeft = function () {
  this.x = this.x - 5;
  return this;
};

Frog.prototype.moveUp = function () {
  this.y = this.y - 5;
  return this;
};

Frog.prototype.moveRight = function () {
  this.x = this.x + 5;
  return this;
};

Frog.prototype.moveDown = function () {
  this.y = this.y + 5;
  return this;
}

Frog.prototype.frogDraw = function(context){
  context.fillStyle = 'black';
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};


module.exports = Frog;
