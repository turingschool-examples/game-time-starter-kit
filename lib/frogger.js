var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


function Frog(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

var frog = new Frog(100, 100, 50, 50);

Frog.prototype.moveLeft = function () {
  this.x = this.x - 5;
  return this;
};

Frog.prototype.moveUp = function () {
  this.y = this.y - 5;
  return this;
};

Frog.prototype.moveRight = function () {
  this.x = this.x + 5;
  return this;
};

Frog.prototype.moveDown = function () {
  this.y = this.y + 5;
  return this;
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.frogDraw(context);
  requestAnimationFrame(gameLoop);
});

Frog.prototype.frogDraw = function(context){
  context.fillStyle = 'black';
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

document.addEventListener('keydown', function(event) {
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


module.exports = Frog;
