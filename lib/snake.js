function Snake(options, context) {
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.context = context;
  this.direction = options.direction || 'right'
  this.interval = options.interval
  this.nextSnake = options.nextSnake || null;
}

var image = document.getElementById("source");

Snake.prototype.setInterval = function () {
  if (this.nextSnake){
    this.nextSnake.interval = this.interval;
  }
  if (this.nextSnake) {
  this.nextSnake.setInterval();
  }
};

Snake.prototype.draw = function () {
  this.context.fillStyle="#000000";
  this.context.drawImage(image, this.x, this.y, this.width, this.height);
  if (this.nextSnake) {
    this.nextSnake.draw();
  }
};

Snake.prototype.scoot = function() {
  this.pullBehind();
  if (this.direction === 'right') {
    this.x === 500 ? this.x = 0 : this.x = this.x + 10;
  } else if (this.direction === 'down') {
    this.y === 500 ? this.y = 0 : this.y = this.y + 10;
  } else if (this.direction === 'up') {
    this.y === 0 ? this.y = 500 : this.y = this.y - 10;
  } else if (this.direction === 'left') {
    this.x === 0 ? this.x = 500 : this.x = this.x - 10;
  }
}

Snake.prototype.pullBehind = function() {
  if (this.nextSnake) {
    this.nextSnake.pullBehind();
    this.nextSnake.x = this.x;
    this.nextSnake.y = this.y;
  }
}

Snake.prototype.changeDirection = function (direction) {
  this.direction = direction;
};

module.exports = Snake;
