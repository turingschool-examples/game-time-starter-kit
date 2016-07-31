const Snake = require('./snake');
const Apple = require('./apple');

// function paint_cell(context)
// {
// context.fillStyle = 'black';
// context.fillRect(this.x, this.y, 10, 10);
// }

function World(width = 500, height = 500) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(this);
  this.apple = new Apple(this);
}

World.prototype.renderWorld = function(context) {
  var snake = this.snake;
  var apple = this.apple;
  context.clearRect(0,0,this.width,this.height);
  context.fillRect(apple.x, apple.y, apple.width, apple.height);
  context.fillStyle = 'black';
  context.fillRect(snake.x, snake.y, snake.width, snake.height);
  context.fillStyle = "red";
  for (var i=0; i< this.snake.tail.length; i++){
  context.fillRect(this.snake.tail[i].x, this.snake.tail[i].y, 10, 10);
  }
};

World.prototype.updateWorld = function(keyCode){
this.snake.update(keyCode);
//call checkCollision here
};

World.prototype.eatFood = function(){
  if (this.snake.x < this.apple.x + this.apple.width &&
   this.snake.x + this.snake.width > this.apple.x &&
   this.snake.y < this.apple.y + this.apple.height &&
   this.snake.height + this.snake.y > this.apple.y){
   this.apple = new Apple();
   this.snake.total ++;
   for (var i = 0; i < this.snake.tail.length-1; i++){
     this.snake.tail[i] = this.snake.tail[i+1];
   }
   this.snake.tail[this.snake.total-1] = RIGHTHERE (this.x, this.y);
  }
};

module.exports = World;
