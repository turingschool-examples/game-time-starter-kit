var Frog = require('./frogger.js');
var Car = require('./cars.js');
var Log = require('./logs.js');
var Turtle = require('./turtles.js');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var frog = new Frog(375, 550, 40, 40);

var car1 = []; //this is the top line of cars
var car2 = [];
var car3 = [];
var car4 = [];

var log1 = [];
var log2 = [];

var turtle1 = [];
var turtle2 = [];

car1.push(new Car({x: 500, y: 350, width: 100, color: "goldenrod"}));
car1.push(new Car({x: 200, y: 350, width: 100, color: "goldenrod"}));
car1.push(new Car({x: -50, y: 350, width: 100, color: "goldenrod"}));
// car1.push(new Car({x: -500, y: 350, width: 100, color: "goldenrod"}));
car2.push(new Car({x: 250, y: 400, width: 65, color: "rebeccaPurple"}));
car2.push(new Car({x: 100, y: 400, width: 65, color: "rebeccaPurple"}));
car2.push(new Car({x: -200, y: 400, width: 65, color: "rebeccaPurple"}));
// car2.push(new Car({x: 50, y: 400, width: 65, color: "rebeccaPurple"}));
car3.push(new Car({x: 150, y: 450, width: 50, color: "tomato"}));
car3.push(new Car({x: -25, y: 450, width: 50, color: "tomato"}));
car3.push(new Car({x: -200, y: 450, width: 50, color: "tomato"}));
// car3.push(new Car({x: 0, y: 450, width: 50, color: "tomato"}));
car4.push(new Car({x: 400, y: 500, width: 30, color: "mediumTurquoise"}))
car4.push(new Car({x: 250, y: 500, width: 30, color: "mediumTurquoise"}))
car4.push(new Car({x: 100, y: 500, width: 30, color: "mediumTurquoise"}))
car4.push(new Car({x: -100, y: 500, width: 30, color: "mediumTurquoise"}))

log1.push(new Log({x: 400, y: 300}));
log1.push(new Log({x: 0, y: 300}));
log1.push(new Log({x: -300, y: 300}));
log2.push(new Log({x: 350, y: 200}));
log2.push(new Log({x: -50, y: 200}));
// log3.push(new Log({x: , y:, 200}));

turtle1.push(new Turtle({x: 200, y: 250}));
turtle1.push(new Turtle({x: 150, y: 250}));
turtle1.push(new Turtle({x: 100, y: 250}));
turtle1.push(new Turtle({x: 50, y: 250}));
turtle2.push(new Turtle({x: 175, y: 150}));
turtle2.push(new Turtle({x: 125, y: 150}));
turtle2.push(new Turtle({x: 75, y: 150}));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.frogDraw(context);
  car1.forEach(function (car) {car.carDraw(context).carMove()});
  car2.forEach(function (car) {car.carDraw(context).carMove()});
  car3.forEach(function (car) {car.carDraw(context).carMove()});
  car4.forEach(function (car) {car.carDraw(context).carMove()});
  log1.forEach(function (log) {log.logDraw(context).logMove()});
  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37) {
    event.preventDefault();
    frog.moveLeft();
  } else if(event.keyCode === 38) {
    event.preventDefault();
    frog.moveUp();
  } else if(event.keyCode === 39) {
    event.preventDefault();
    frog.moveRight();
  } else if(event.keyCode === 40) {
    event.preventDefault();
    frog.moveDown();
  }
  console.log(frog.x, frog.y);
});
