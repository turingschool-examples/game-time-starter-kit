var Frog = require('./frogger.js');
var Car = require('./cars.js');

var canvas = document.getElementById('canvas');
var context =  canvas.getContext('2d');

var frog = new Frog(375, 550, 40, 40);

var car1 = []; //this is the top line of cars
var car2 = [];
var car3 = [];
var car4 = [];

car1.push(new Car(800, 350, 100, 40));
car1.push(new Car(-200, 350, 100, 40));
car1.push(new Car(-400, 350, 100, 40));
car1.push(new Car(-600, 350, 100, 40));

car2.push(new Car(-100, 400, 65, 40));
car2.push(new Car(300, 400, 65, 40));
car2.push(new Car(500, 400, 65, 40));

car3.push(new Car(600, 450, 50, 40));
car3.push(new Car(700, 450, 50, 40));
car3.push(new Car(300, 450, 50, 40));
car3.push(new Car(100, 450, 50, 40));

car4.push(new Car(800, 500, 80, 40));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.frogDraw(context);
  car1.forEach(function (car)
  {car.carDraw(context).carMove()
    function collision() {
      if(frog.x < Car.x + Car.width &&
      frog.x + frog.width > Car.x &&
      frog.y < Car.y + Car.height &&
      frog.height + frog.y > Car.y) {
        console.log(3)
      }
    }
  });
  car2.forEach(function (car)
   {car.carDraw(context).carMove()
     function collision() {
       if(frog.x < Car.x + Car.width &&
       frog.x + frog.width > Car.x &&
       frog.y < Car.y + Car.height &&
       frog.height + frog.y > Car.y) {
         console.log(3)
       }
     }
   });
  car3.forEach(function (car)
   {car.carDraw(context).carMove()
     function collision() {
       if(frog.x < Car.x + Car.width &&
       frog.x + frog.width > Car.x &&
       frog.y < Car.y + Car.height &&
       frog.height + frog.y > Car.y) {
         console.log(3)
       }
     }
   });
  car4.forEach(function (car)
  {car.carDraw(context).carMove()
    function collision() {
      if(frog.x < Car.x + Car.width &&
      frog.x + frog.width > Car.x &&
      frog.y < Car.y + Car.height &&
      frog.height + frog.y > Car.y) {
        console.log(3)
      }
    }
  });
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
