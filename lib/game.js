const Snake = require('../lib/snake');


function Game(canvas, context, snake, food){
    this.canvas = canvas;
    this.context = context;
    this.snake = snake;
    this.food = food;
    this.score = 0;
    this.possibleLocations = Array(10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,
                                  170,180,190,200,210,220,230,240,250,260,270,280,290,300,
                                  310,320,330,340,350,360,370,380,390,400,410,420,430,440,
                                  450,460,470,480);
  }



Game.prototype.eatFace = function () {
  if (this.snake.x === this.food.x && this.snake.y === this.food.y) {
    this.grow(3);
    if (this.snake.interval === 35) {
      this.grow(2);
      this.score += 20;
    }
    this.repositionFood();
    this.score += 10;
  }
};


Game.prototype.repositionFood = function() {
  var number1 = this.possibleLocations[Math.floor(Math.random()*this.possibleLocations.length)];
  var number2 = this.possibleLocations[Math.floor(Math.random()*this.possibleLocations.length)];
  this.food.x = number1;
  this.food.y = number2;
};

Game.prototype.grow = function (num) {
  var counter = 0
  while(counter != num) {
    counter += 1
    var current = this.snake;
    while(current.nextSnake != null) {
      current = current.nextSnake;
    }
    current.nextSnake = new Snake ({x: current.x, y: current.y, nextSnake: null, direction: current.direction}, this.context);
  }
};

Game.prototype.collisionDetector = function () {
  var counter = 0;
  var current = this.snake;
  while(current.nextSnake != null) {
    current = current.nextSnake;
    counter = counter + 1;
    if (this.snake.x === current.x &&
      this.snake.y === current.y &&
      counter > 5){
        return 'collision';
      }
    }
  };
module.exports = Game;
