var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
require('./cars.js');

function Frog(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

var frog = new Frog(100, 100, 50, 50);

// Frog.prototype.move = function () {
//   this.y++;
//   return this;
// };

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.frogDraw(context);
  frog.move();
  car.carDraw(context);
  car.carMove();
  requestAnimationFrame(gameLoop);
});

Frog.prototype.frogDraw = function(context){
  context.fillStyle = 'black';
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};


module.exports = Frog;
