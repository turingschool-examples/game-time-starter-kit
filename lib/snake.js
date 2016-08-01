const Apple = require('./apple');

function Snake(world, x = 250, y = 250){
  this.world = world;
  this.x = x;
  this.y = y;
  this.height = 10;
  this.width = 10;
  this.direction = 0;
  this.tail = [];
  this.total = () => this.tail.length;
}

{
  x,
  y,
  tail: [
    { x,y,direction },
    { x,y,direction },
    { x,y,direction },
    { x,y,direction },
  ]
}

Snake.prototype.moveUp = function(keyCode){
  this.y = this.y - 1;
  if (this.y < -2) {
    this.gameOver();
  }
};

Snake.prototype.moveDown = function(){
  this.y = this.y + 1;
  if (this.y > 491) {
    this.gameOver();
  }
};

Snake.prototype.moveRight = function(){
  this.x = this.x + 1;
  if (this.x > 491) {
    this.gameOver();
  }
  // if (this.x === apple.x + apple.width && apple.y > snake.y > apple.y + apple.height) {
  //   this.gameOver();
  // }
};

Snake.prototype.moveLeft = function(){
  this.x = this.x - 1;
  if (this.x < -2) {
    this.gameOver();
  }
};

Snake.prototype.move = function(direction){
  if (direction === 1) {this.moveUp();}
  if (direction === 2) {this.moveDown();}
  if (direction === 3) {this.moveLeft();}
  if (direction === 4) {this.moveRight();}
  this.direction = direction;
};

Snake.prototype.gameOver = function() {
  window.alert ('Game Over');
  window.location.reload();
};

Snake.prototype.update = function(keyCode){
  if (keyCode === 38) {this.move(1);}
  if (keyCode === 40) {this.move(2);}
  if (keyCode === 37) {this.move(3);}
  if (keyCode === 39) {this.move(4);}
  if (keyCode === undefined) {this.move(this.direction);}
};

module.exports = Snake;
