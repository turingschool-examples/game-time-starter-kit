const Snake = require('../lib/snake')


function Game(canvas, context, snake, food){
    this.canvas = canvas;
    this.context = context;
    this.snake = snake;
    this.food = food;
    this.score = 0;
    this.crazyIntervals = [-20, 10, 30, -30]
    this.possibleLocations = Array(10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,
                                  170,180,190,200,210,220,230,240,250,260,270,280,290,300,
                                  310,320,330,340,350,360,370,380,390,400,410,420,430,440,
                                  450,460,470,480)
  };



Game.prototype.eatFace = function () {
  if (this.snake.x === this.food.x
  && this.snake.y === this.food.y){
    this.grow();
    this.grow();
    this.grow();
    if (this.snake.interval === 30){
      this.grow();
      this.grow();
    }
    this.reposition_food();
    this.score += 10;
  }
}


Game.prototype.reposition_food = function() {
  var number1 = this.possibleLocations[Math.floor(Math.random()*this.possibleLocations.length)];
  var number2 = this.possibleLocations[Math.floor(Math.random()*this.possibleLocations.length)];
  this.food.x = number1
  this.food.y = number2
}

Game.prototype.grow = function () {
  var current = this.snake
  while(current.nextSnake != null) {
    current = current.nextSnake
  }
  current.nextSnake = new Snake ({x: current.x - 10, y: current.y, time: new Date(), nextSnake: null}, this.context)
}

Game.prototype.collisionDetector = function () {
  var counter = 0
  var current = this.snake
  while(current.nextSnake != null) {
    current = current.nextSnake
    counter = counter + 1
    if (this.snake.x === current.x &&
      this.snake.y === current.y &&
      this.snake.interval != 30 &&
      counter > 6){
        return 'collision'
      } else if (this.snake.x === current.x &&
        this.snake.y === current.y &&
        counter > 12){
          return 'collision'
        }
      }
    }

module.exports = Game;
