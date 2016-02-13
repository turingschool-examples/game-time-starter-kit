const Node = require('../lib/node');
const Snake = require('../lib/snake')

function Game(canvas, context, snake, food){
    this.canvas = canvas;
    this.context = context;
    this.snake = snake;
    this.food = food;
    this.rakes = []
  };

Game.prototype.eatFace = function () {
  if (this.snake.x === this.food.x
  && this.snake.y === this.food.y){
    this.reposition_food();
    this.grow();
    // this.snake.head.nextNode = new Node({positionX: this.snake.x,
    //                                      positionY: this.snake.y,
    //                                      nextNode: null})
    // this.rakes.push(this.snake.head)
    // this.rakes.push(this.snake.head.nextNode)
  }
}

Game.prototype.repositionFood = function() {
  var numbers = Array(10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,
                      170,180,190,200,210,220,230,240,250,260,270,280,290,300,
                      310,320,330,340,350,360,370,380,390,400,410,420,430,440,
                      450,460,470,480)
  var number1 = numbers[Math.floor(Math.random()*numbers.length)];
  var number2 = numbers[Math.floor(Math.random()*numbers.length)];
  this.food.x = number1
  this.food.y = number2
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Game.prototype.draw = function () {
  this.rakes.push([this.snake.x, this.snake.y])
  this.rakes.forEach (function(rake) {
    this.context.fillStyle="#000000";
    this.context.fillRect(rake[0], rake[1], 10, 10);
    // this.context.clearRect(this.rakes[this.rakes.length - 1], this.rakes[this.rakes.length - 1], canvas.width, canvas.height);
    // this.rakes.pop()
  }.bind(this))
}

Game.prototype.grow = function () {
  var current = this.snake.head
  while(current.nextNode != null) {
    current = current.nextNode

  }
  current.nextNode = new Snake ({x: current.x , y: current.y, time: current.time}, context)
  console.log(this.snake.head)
  console.log(current.x)


  // this.rakes.push([this.x, this.y, this.width, this.height]);
  // console.log(this.rakes); console.log(this.snake.head); console.log(this.snake.head.nextNode)
}

module.exports = Game;
