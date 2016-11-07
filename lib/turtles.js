function Turtle(options) {
  this.x = options.x || 40;
  this.y = options.y || 40; 
  this.width = options.width || 40;
  this.height = options.height || 40;
}

Turtle.prototype.turtleDraw = function(context, turtleImg) {
  context.fillStyle = this.color;
  context.drawImage(turtleImg, this.x, this.y, this.width, this.height);
  return this;
};

Turtle.prototype.turtleMove = function() {
  this.x--;
  if (this.x < 0){
    this.x = 850;
  }
  return this;
};

module.exports = Turtle;
