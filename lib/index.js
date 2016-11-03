var Frog = require('./frogger.js');
var Car = require('./cars.js');

var canvas = document.getElementById('canvas');
var context =  canvas.getContext('2d');

var frog = new Frog(375, 550, 40, 40);

var car1 = []; //this is the top line of cars
var car2 = [];
var car3 = [];
var car4 = [];

car1.push(new Car({x: 500, y: 350, width: 100, color: "goldenrod"}));
  car1.push(new Car({x: 200, y: 350, width: 100, color: "goldenrod"}));
car1.push(new Car({x: -50, y: 350, width: 100, color: "goldenrod"}));
// car1.push(new Car({x: -500, y: 350, width: 100, color: "goldenrod"}));

car2.push(new Car({x: 250, y: 400, width: 65, color: "rebeccaPurple"}));
car2.push(new Car({x: 100, y: 400, width: 65, color: "rebeccaPurple"}));
// car2.push(new Car({x: 50, y: 400, width: 65, color: "rebeccaPurple"}));
car2.push(new Car({x: -200, y: 400, width: 65, color: "rebeccaPurple"}));

car3.push(new Car({x: 150, y: 450, width: 50, color: "tomato"}));
car3.push(new Car({x: -25, y: 450, width: 50, color: "tomato"}));
car3.push(new Car({x: -200, y: 450, width: 50, color: "tomato"}));
// car3.push(new Car({x: 0, y: 450, width: 50, color: "tomato"}));

car4.push(new Car({x: 400, y: 500, width: 30, color: "mediumTurquoise"}))
car4.push(new Car({x: 250, y: 500, width: 30, color: "mediumTurquoise"}))
car4.push(new Car({x: 100, y: 500, width: 30, color: "mediumTurquoise"}))
car4.push(new Car({x: -100, y: 500, width: 30, color: "mediumTurquoise"}))

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
  console.log(frog.x, frog.y);
});
