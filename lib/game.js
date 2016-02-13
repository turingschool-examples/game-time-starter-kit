const $ = require('jquery');
const Snake = require('./snake');
const Pellet = require('./pellet')

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

function startGame(){
  var snake = new Snake({});
  var pellet = new Pellet({});
  var score = 0

  var direction = function(){
    $(document).keydown(function(e){
      if (e.keyCode === 37){
        direction = function(){
          snake.moveLeft(new Date());
        };
      } else if (e.keyCode === 39){
        direction = function(){
          snake.moveRight(new Date());
        };
      } else if (e.keyCode === 40){
        direction = function(){
          snake.moveUp(new Date());
        };
      } else if (e.keyCode === 38){
        direction = function(){
          snake.moveDown(new Date());
        };
      }
    });
  };

  $('#start-game').on('click', function(){
    requestAnimationFrame(function gameLoop(){
      context.clearRect(0, 0, canvas.width, canvas.height);
      snake.draw(context)
      if (snakeIntersectsPellet(snake, pellet)){
        pellet.reset()
        pellet.draw(context)
        snake.grow()
        increaseScore(score)
      };

      direction()
      pellet.draw(context)

      if(snakeIntersectsWall(snake, canvas)){
        gameEnds(canvas, context, snake);
      } else {
        requestAnimationFrame(gameLoop);
      }
    })
  })
};

function increaseScore(score){
  score ++;
  $('#score').html(score);
}

function snakeIntersectsPellet(snake, pellet){
  return ((Math.abs(snake.positions[0][0] - pellet.x) < 10) && (Math.abs(snake.positions[0][1] - pellet.y) < 10))
};

function snakeIntersectsWall(snake, canvas){
  return (snake.positions[0][0] < 0 || snake.positions[0][1] < 0 || snake.positions[0][0] > 400 || snake.positions[0][1] > 300)
};

function gameEnds(canvas, context, snake, score){
  alert("The snake crashed into a wall!")
  resetGameCanvas(canvas, context, snake, score);
  startGame();
}

function resetGameCanvas(canvas, context, snake, score){
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.positions = [];
  score = 0;
  $('#score').html(score);
}

startGame();
