var Frog = require('./frogger.js');
var Car = require('./cars.js');

var canvas = document.getElementById('canvas');
var context =  canvas.getContext('2d');

var frog = new Frog(375, 550, 40, 40);

var car1 = [];
var car2 = [];
var car3 = [];
var car4 = [];
car1.push(new Car(800, 300, 65, 40));
car1.push(new Car(400, 300, 65, 40));
car1.push(new Car(-300, 300, 65, 40));
car1.push(new Car(100, 300, 65, 40));
car2.push(new Car(-100, 400, 65, 40));
car2.push(new Car(300, 400, 65, 40));
car2.push(new Car(500, 400, 65, 40));
car3.push(new Car(600, 500, 65, 40));
car3.push(new Car(700, 500, 65, 40));
car3.push(new Car(300, 500, 65, 40));
car3.push(new Car(100, 500, 65, 40));
car4.push(new Car(800, 600, 80, 40));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.frogDraw(context);
  car1.forEach(function (car) {car.carDraw(context).carMove()});
  car2.forEach(function (car) {car.carDraw(context).carMove()});
  car3.forEach(function (car) {car.carDraw(context).carMove()});
  car4.forEach(function (car) {car.carDraw(context).carMove()});
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
