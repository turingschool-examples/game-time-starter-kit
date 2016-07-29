const Snake = require('./snake');
const Apple = require('./apple');

function World(width = 500, height = 500) {
  this.width = width;
  this.height = height
  this.snake = new Snake(this);
  this.apple = new Apple(this);
};

// World.prototype.tick = function () {
//   function makeSnakeMove (snake)
// }

// World.prototype.isSnakeColliding = function () {
//   var snake = this.snake;
//   // return this.enemies.find(function (enemy) {
//   //   return blocky.isCollidingWith(enemy);
//   // });
// };

World.prototype.renderWorld = function(context) {
  var snake = this.snake;
  var apple = this.apple;
  context.clearRect(0,0,this.width,this.height);
  context.fillRect(apple.x, apple.y, apple.width, apple.height);
  context.fillStyle = 'black'
  context.fillRect(snake.x, snake.y, snake.width, snake.height);
  context.fillStyle = "red"
  };

World.prototype.updateWorld = function(keyCode){
this.snake.update(keyCode);
//call checkCollision here
}

module.exports = World;

World.prototype.checkCollision = function(){

};
