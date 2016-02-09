function Snake(options, context){
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;

}

Snake.prototype.scoot = function () {
  this.x++;
}


Snake.prototype.draw = function () {
  context.fillRect(50, 50, 10, 10);

}
Snake.prototype.moveDown = function () {
  document.addEventListener('keydown')
  this.y++;
}

module.exports = Snake;
