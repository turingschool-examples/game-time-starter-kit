var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function Car(options) {
  this.x = options.x;
  this.y = options.y;
  this.width = options.width;
  this.height = options.height || 40;
  this.color = options.color;
}

function Car(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Car.prototype.carDraw = function(context){
  // context.fillStyle = "darkCyan";
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
