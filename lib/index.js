
const Game = require('./Game.js');
const Rabbit = require('./Rabbit.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const game = new Game(context, canvas.width, canvas.height);
const rabbit = new Rabbit(250, 500, 30, 30);

$(window).on('keydown', game.rabbit.moveRabbit);
$(window).on('keyup', rabbit.velocityReset);
$('.next-level_button').on('click', () => {
  game.startNextLevel();
  gameLoop();
});

$('.start_button').on('click', function() {
  $('.score_counter').show();
  game.toggleGameLoop();
  if (game.runGameLoop) {
    gameLoop();
  } 
});

$('.restart_button').on('click', function() {
  window.location.reload(true);
});

function gameLoop() {
  if (game.runGameLoop) {
    $('#game').show();
    $('.main_container').hide();
    $('.next-level_screen').hide();
    context.clearRect(0, 0, 500, 600);
    game.drawRabbit(context);
    game.collisionDetection(game.rabbit, game.bells);
    game.bellFrequency(context);
    game.drawBells(context);
    game.endLevel(game.rabbit);
    game.hitBottom(game.rabbit);
    requestAnimationFrame(gameLoop); 
  }
}