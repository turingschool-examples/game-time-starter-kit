function Car(options) {
  this.x = options.x;
  this.y = options.y;
  this.width = options.width;
  this.height = options.height || 40;
  this.color = options.color;
}

Car.prototype.carDraw = function(context){
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Car.prototype.carMove = function () {
  this.x++;
  if (this.x > canvas.width){
    this.x = -20;
  }
  return this;
};

module.exports = Car;
