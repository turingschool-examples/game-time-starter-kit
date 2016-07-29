function Snake(world, x, y, width, height){
  this.world = world;
  this.x = 250;
  this.y = 250;
  this.height = 10;
  this.width = 10;
}

Snake.prototype.moveUp = function(){
  this.y = this.y - 1;
};

Snake.prototype.moveDown = function(){
  this.y = this.y + 1;
};

Snake.prototype.moveRight = function(){
  this.x = this.x + 1;
};

Snake.prototype.moveLeft = function(){
  this.x = this.x - 1;
};

Snake.prototype.move = function(direction){
  if (direction === 1) {this.moveUp();};
  if (direction === 2) {this.moveDown();};
  if (direction === 3) {this.moveLeft();};
  if (direction === 4) {this.moveRight();};
};
//
// Snake.prototype.isSnakeColliding = function(){
//
// };
//
// Snake.prototype.snakeIsMoving = function(direction) {
//
// };

module.exports = Snake;
