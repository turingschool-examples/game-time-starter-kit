var Frog = require('./frogger.js');
var Car = require('./cars.js');

var canvas = document.getElementById('canvas');
var context =  canvas.getContext('2d');

var frog = new Frog(375, 550, 50, 50);
var car = [];

car.push(new Car(800, 300, 65, 40));
car.push(new Car(-100, 400, 65, 40));
car.push(new Car(800, 500, 65, 40));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.frogDraw(context);
  car.forEach(function (car) {car.carDraw(context).carMove()});
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(event) {
  event.preventDefault();
  if(event.keyCode === 37) {
    frog.moveLeft();
  } else if(event.keyCode === 38) {
    frog.moveUp();
  } else if(event.keyCode === 39) {
    frog.moveRight();
  } else if(event.keyCode === 40) {
    frog.moveDown();
  }
});
