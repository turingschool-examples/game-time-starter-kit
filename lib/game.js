const $ = require('jquery');
const _ = require('lodash');
const Round = require('./round');

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let scores_array = []

function startGame(){
  $('#start-game').on('click', function(){
    var round = new Round({});
    var oldDirection = "left";

    var direction = function(){
      $(document).keydown(function(e){
        if (e.keyCode === 37 && (round.snake.positions.length < 2 || oldDirection !== "right")){
          direction = function(){
            round.snake.moveLeft();
            oldDirection = "left";
          };
        } else if (e.keyCode === 39 && (round.snake.positions.length < 2 || oldDirection !== "left")){
          direction = function(){
            round.snake.moveRight();
            oldDirection = "right";
          };
        } else if (e.keyCode === 40 && (round.snake.positions.length < 2 || oldDirection !== "down")){
          direction = function(){
            round.snake.moveUp();
            oldDirection = "up";
          };
        } else if (e.keyCode === 38 && (round.snake.positions.length < 2 || oldDirection !== "up")){
          direction = function(){
            round.snake.moveDown();
            oldDirection = "down";
          };
        }
      });
    }

    requestAnimationFrame(function gameLoop(){
      context.clearRect(0, 0, canvas.width, canvas.height);
      round.snake.draw(context)

      if(round.snakeIntersectsWall(canvas) || round.snake.snakeIntersectsItself()){
        gameEnds(canvas, context, round.snake, round.score);
      } else {
        if (round.snakeIntersectsPellet()){
          round.pellet.reset()
          round.doesPelletOverlapWithSnake()
          round.pellet.draw(context)
          round.snake.grow()
          round.increaseScore()
        };
        direction()
        round.pellet.draw(context)
        setTimeout(function(){requestAnimationFrame(gameLoop)}, round.snake.interval);
      }
    })
  })
};

function gameEnds(canvas, context, snake, score){
  alert("Game Over")
  scores_array.push(score)
  localStorage.setItem("scores", scores_array)
  $('#score').html(0);
  $('#highest_scores').html(localStorage.getItem("scores"))
  console.log(score, localStorage.getItem("scores"))
  context.clearRect(0, 0, canvas.width, canvas.height);
}

startGame();
