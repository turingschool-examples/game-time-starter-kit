function Snake(options){
  this.x = options.x || 300;
  this.y = options.y || 150;
  this.height = options.height || 10;
  this.width = options.width || 10;
}

Snake.prototype.moveUp = function(){
  this.y ++;
};

Snake.prototype.moveDown = function(){
  this.y --;
}

Snake.prototype.moveRight = function(){
  this.x ++;
}

Snake.prototype.moveLeft = function(){
  this.x --;
}

Snake.prototype.draw = function(context){
  context.fillRect(this.x, this.y, this.height, this.width);
  return this
}

module.exports = Snake;
