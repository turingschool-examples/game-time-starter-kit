var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function Car(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

var car = new Car(800, 300, 65, 40);

Car.prototype.carDraw = function(context){
  context.fillStyle = "darkCyan";
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

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   car.carDraw(context);
//   car.carMove();
//   requestAnimationFrame(gameLoop);
// });
