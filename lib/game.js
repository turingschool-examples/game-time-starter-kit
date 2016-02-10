const $ = require('jquery');
const Snake = require('./snake');
const Pellet = require('./pellet')

function startGame(){
  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');
  var snake = new Snake({});
  var pellet = new Pellet({});

  var direction = function(){
    $(document).keydown(function(e){
      if (e.keyCode === 37){
        direction = function(){
          snake.moveLeft();
        };
      } else if (e.keyCode === 39){
        direction = function(){
          snake.moveRight();
        };
      } else if (e.keyCode === 40){
        direction = function(){
          snake.moveUp();
        };
      } else if (e.keyCode === 38){
        direction = function(){
          snake.moveDown();
        };
      }
    });
  };

  $('#start-game').on('click', function(){
    requestAnimationFrame(function gameLoop(){
      context.clearRect(0, 0, canvas.width, canvas.height);
      snake.draw(context)
      direction()
      pellet.draw(context)
      if (snakeIntersectsPellet(snake, pellet)){
        pellet.reset()
        pellet.draw(context)
        // snake.grow
        // up score
      };


      //   check for Game Over
      requestAnimationFrame(gameLoop);
    })
  })
};

function snakeIntersectsPellet(snake, pellet){
  return ((Math.abs(snake.x - pellet.x) < 10) && (Math.abs(snake.y - pellet.y) < 10))
};

startGame();
