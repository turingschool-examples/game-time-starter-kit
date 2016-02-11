function Snake(options){
  this.x = options.x || 300;
  this.y = options.y || 150;
  this.positions = [[300,150]];
  this.height = options.height || 10;
  this.width = options.width || 10;
}

Snake.prototype.moveUp = function(){
  this.positions.y ++;
};

Snake.prototype.moveDown = function(){
  this.positions.y --;
}

Snake.prototype.moveRight = function(){
  this.positions.x ++;
}

Snake.prototype.moveLeft = function(){
  this.positions.x --;
}

Snake.prototype.grow = function(){
  this.positions.push([])
}

Snake.prototype.draw = function(context){
  context.fillStyle="#000000";
  this.positions.unshift([this.x, this.y])
  this.positions.pop()
  context.fillRect(this.x, this.y, this.height, this.width);
  return this
}

module.exports = Snake;
