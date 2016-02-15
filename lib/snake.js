const Food = require('../lib/food');
const Node = require('../lib/node');

function Snake(options, context) {
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.context = context;
  this.direction = "right";
  this.previousTime = options.time;
  this.interval = 150;
  this.nextSnake = options.nextSnake || null
}

Snake.prototype.draw = function () {
  // this.context.fillStyle="#000000";
  // this.context.fillRect(this.x, this.y, this.width, this.height);
  if (this.nextSnake === null) {
    this.context.fillStyle="#000000";
    this.context.fillRect(this.x, this.y, this.width, this.height);
  } else if (this.nextSnake){
    this.nextSnake.context.fillRect(this.x, this.y, this.width, this.height);
  }
}

Snake.prototype.move = function (currentTime) {
  if (currentTime - this.previousTime > this.interval) {
    this.previousTime = currentTime
    if (this.direction === 'right') {
      this.x === 500 ? this.x = 0 : this.x = this.x + 10;
      if (this.nextSnake) {
        this.nextSnake.x === 500 ? this.nextSnake.x = 0 : this.nextSnake.x = this.x - 10;
      }
    } else if (this.direction === 'left'){
      this.x === 0 ? this. x = 500 : this.x = this.x - 10;
      if (this.nextSnake) {
        this.nextSnake.x === 500 ? this.nextSnake.x = 0 : this.nextSnake.x = this.x + 10;
      }
    } else if (this.direction === 'up'){
      this.y === 0 ? this.y = 500 : this.y = this.y - 10;
      if (this.nextSnake) {
        this.nextSnake.y === 500 ? this.nextSnake.y = 0 : this.nextSnake.y = this.y - 10;
      }
    } else if (this.direction === 'down') {
      this.y === 500 ? this.y = 0 : this.y = this.y + 10;
      if (this.nextSnake) {
        this.nextSnake.y === 500 ? this.nextSnake.y = 0 : this.nextSnake.y = this.y + 10;
      }
    }
  }
}

// check to see if nextSnake is undefined

Snake.prototype.changeDirectionDown = function () {
  this.direction = 'down';
  this.nextSnake.direction = this.direction;
}

Snake.prototype.changeDirectionUp = function () {
  this.direction = 'up';
  this.nextSnake.direction = this.direction;
}

Snake.prototype.changeDirectionLeft = function () {
  this.direction = 'left';
  this.nextSnake.direction = this.direction;
}

Snake.prototype.changeDirectionRight = function () {
  this.direction = 'right';
  this.nextSnake.direction = this.direction;
}

module.exports = Snake;
