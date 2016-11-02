require('./frogger.js');
require('./cars.js');

var canvas = document.getElementById('canvas');
var context =  canvas.getContext('2d');

var frog = new Frog(100, 100, 50, 50);
var carOne = new Car(800, 300, 65, 40);
var carTwo = new Car(-100, 400, 65, 40);
var carThree = new Car(800, 500, 65, 40);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.frogDraw(context);
  car.carDraw(context);
  car.carMove();
  requestAnimationFrame(gameLoop);
});
