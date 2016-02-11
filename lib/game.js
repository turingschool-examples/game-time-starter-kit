function Game(canvas, context, snake, food){
    this.canvas = canvas;
    this.context = context;
    this.snake = snake;
    this.food = food;
  };

Game.prototype.eatFace = function () {
  if (this.snake.x === this.food.x
  && this.snake.y === this.food.y){
    this.repositionFood();
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


  module.exports = Game;
