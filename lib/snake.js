function Snake(options){
  this.x = options.x || 300;
  this.y = options.y || 150;
  this.positions = [[300,150]];
  this.height = options.height || 10;
  this.width = options.width || 10;
}

Snake.prototype.moveUp = function(){
  this.positions[0][1] ++;
};

Snake.prototype.moveDown = function(){
  this.positions[0][1] --;
}

Snake.prototype.moveRight = function(){
  this.positions[0][0] ++;
}

Snake.prototype.moveLeft = function(){
  this.positions[0][0] --;
}

Snake.prototype.grow = function(){
  this.positions.push([])
}

Snake.prototype.draw = function(context){
  context.fillStyle="#000000";
  context.fillRect(this.positions[0][0], this.positions[0][1], this.height, this.width);
  return this
}

module.exports = Snake;
