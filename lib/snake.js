function Snake(options){
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
}

Snake.prototype.scoot = function () {
  this.x++;
}

module.exports = Snake;
