function Game(canvas, context, snake, food){
    this.canvas = canvas;
    this.context = context;
    this.snake = snake;
    this.food = food;
  };

Game.prototype.eatFace = function () {
  if (this.snake.x === this.food.x ){
    this.reposition_food();
  }
}

Game.prototype.reposition_food = function() {
  this.food.x = getRandomInt(0, 489)
  this.food.y = getRandomInt(0, 489)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


  module.exports = Game;
