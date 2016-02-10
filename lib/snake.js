function Snake(options, context){
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.context = context;
  this.direction = "right";
}

Snake.prototype.draw = function () {
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

Snake.prototype.move = function () {
    if (this.direction === 'right') {
      this.x = this.x + 1;
    } else if (this.direction === 'left'){
      this.x = this.x -1;
    } else if (this.direction === 'up'){
      this.y = this.y - 1;
    } else if (this.direction === 'down') {
      this.y = this.y + 1;
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
