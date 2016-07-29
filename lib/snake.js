function Snake(world, x, y, width, height){
  this.world = world;
  this.x = 250;
  this.y = 250;
  this.height = 10;
  this.width = 10;
  this.direction = 0;
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
  this.direction = direction;
};

Snake.prototype.update = function(keyCode){
  if (keyCode === 38) {this.move(1);}
  if (keyCode === 40) {this.move(2);}
  if (keyCode === 37) {this.move(3);}
  if (keyCode === 39) {this.move(4);}
  if (keyCode === undefined) {this.move(this.direction);}
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
