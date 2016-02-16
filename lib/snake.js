const Food = require('../lib/food');

function Snake(options, context) {
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.context = context;
  this.direction = "right";
  this.previousTime = options.time;
  this.interval = 90;
  this.nextSnake = options.nextSnake || null;
}

var image = document.getElementById("source");

Snake.prototype.draw = function () {
  this.context.fillStyle="#000000";
  this.context.drawImage(image, this.x, this.y, this.width, this.height);
  // while(current.nextSnake != null) {
  //   current = current.nextSnake
  //   current.context.fillStyle="#000000";
  //   current.context.fillRect(current.x, current.y, current.width, current.height);
  // }
  if (this.nextSnake) {
    this.nextSnake.draw();
  }
}

Snake.prototype.move = function (currentTime) {
  if (currentTime - this.previousTime > this.interval) {
    this.previousTime = currentTime
    if (this.direction === 'right') {
      this.x === 500 ? this.x = 0 : this.x = this.x + 10;

    } else if (this.direction === 'down') {
      this.y === 500 ? this.y = 0 : this.y = this.y + 10;

    } else if (this.direction === 'up') {
      this.y === 0 ? this.y = 500 : this.y = this.y - 10;

    } else if (this.direction === 'left') {
      this.x === 0 ? this.x = 500 : this.x = this.x - 10;
    }
    if (this.nextSnake){
      this.nextSnake.move(currentTime);
      this.nextSnake.changeDirection(this.direction);
    }
  }
}

Snake.prototype.changeDirection = function (direction) {
  this.direction = direction;
}

module.exports = Snake;
