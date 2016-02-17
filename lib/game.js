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


    $('#set-easy-level').on('click', function(){
        round.snake.interval = 100;
      })
      $('#set-med-level').on('click', function(){
        round.snake.interval = 50;
      })
      $('#set-hard-level').on('click', function(){
        round.snake.interval = 30;
      })



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
  alert("The Snake Died! You suck.")
  scores_array.push(score)
  scores_array.sort(function(a, b){return b-a})
  scores_array = scores_array.splice(0, 10)
  localStorage.setItem("scores", scores_array)
  $('#score').html(0);
  var scores_html = ""

  for(var i = 0; i < scores_array.length; i++) {
    scores_html = scores_html +
          "<tr><td>"
          + (i + 1) + "."
          + "</td><td>"
          + scores_array[i]
          + "</td></tr>"
  }

  $('#table_body').html(scores_html)
  context.clearRect(0, 0, canvas.width, canvas.height);
}

startGame();
