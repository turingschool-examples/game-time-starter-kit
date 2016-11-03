var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function Turtle(options) {
  this.x = options.x;
  this.y = options.y;
  this.width = options.width || 40;
  this.height = options.height || 40;
  this.color = options.color || 'darkOliveGreen';
}

Turtle.prototype.turtleDraw = function(context) {
  context.fillStyle = this.color;
  context.fillRect = (this.x, this.y, this.width, this.height);
  return this;
};

Turtle.prototype.turtleMove = function(context) {
  context.scale = (-1, 1);
  this.x++;
  if (this.x > canvas.width){
    this.x = -20;
  }
  return this;
};

module.exports = Turtle;
