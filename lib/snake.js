const Food = require('../lib/food');

function Snake(options, context){
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.context = context;
  this.direction = "right";
  this.previousTime = options.time;
  this.interval = 250;
}

var food = new Food({});

Snake.prototype.draw = function () {
  this.context.fillStyle="#000000";
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

Snake.prototype.move = function (currentTime) {
  if (currentTime - this.previousTime > this.interval) {
    this.previousTime = currentTime

    // debugger;

    if (this.direction === 'right') {
      this.x === 500 ? this.x = 0 : this.x = this.x + 10;
    } else if (this.direction === 'left'){
      this.x === 0 ? this. x = 500 : this.x = this.x - 10;
    } else if (this.direction === 'up'){
      this.y === 0 ? this.y = 500 : this.y = this.y - 10;
    } else if (this.direction === 'down') {
      this.y === 500 ? this.y = 0 : this.y = this.y + 10;
    }
  }
}

Snake.prototype.changeDirectionDown = function () {
  this.direction = 'down';
}

Snake.prototype.changeDirectionUp = function () {
  this.direction = 'up';
}

Snake.prototype.changeDirectionLeft = function () {
  this.direction = 'left';
}

Snake.prototype.changeDirectionRight = function () {
  this.direction = 'right';
}



module.exports = Snake;
