function Snake(world, x, y, width, height){
  this.world = world;
  this.x = 250;
  this.y = 250;
  this.height = 10;
  this.width = 10;
}

Snake.prototype.moveUp = function(){
  this.y = this.y - 10;
};

Snake.prototype.moveDown = function(){
  this.y = this.y + 10;
};

Snake.prototype.moveRight = function(){
  this.x = this.x + 10;
};

Snake.prototype.moveLeft = function(){
  this.x = this.x - 10;
};

module.exports = Snake;
