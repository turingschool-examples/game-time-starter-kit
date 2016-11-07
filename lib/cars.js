function Car(options) {
  this.x = options.x || 150;
  this.y = options.y || 200;
  this.width = options.width;
  this.height = options.height || 40;

}

Car.prototype.carDraw1 = function(context, orangeCar) {
  context.fillStyle = 'transparent';
  context.drawImage(orangeCar, this.x, this.y, this.width, this.height);
  return this;
};

Car.prototype.carDraw2 = function(context, greenCar) {
  context.fillStyle = 'transparent';
  context.drawImage(greenCar, this.x, this.y, this.width, this.height);
  return this;
};

Car.prototype.carDraw3 = function(context, pinkCar) {
  context.fillStyle = 'transparent';
  context.drawImage(pinkCar, this.x, this.y, this.width, this.height);
  return this;
};

Car.prototype.carDraw4 = function(context, redCar) {
  context.fillStyle = 'transparent';
  context.drawImage(redCar, this.x, this.y, this.width, this.height);
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
