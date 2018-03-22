
const Game = require('./Game.js');
const Rabbit = require('./Rabbit.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const game = new Game(context, canvas.width, canvas.height);
const rabbit = new Rabbit(250, 500, 30, 30);

$(window).on('keydown', game.rabbit.moveRabbit);
$(window).on('keyup', rabbit.velocityReset);

// $('.score_amount').text(game.score);

$('.next-level_button').on('click', () => {
  game.startNextLevel();
  $('.next-level_screen').hide();
  $('#game').show();
  $('.score_counter').show();
  gameLoop();
});

$('.start_button').on('click',() => {
  $('.score_counter').show();
  game.toggleGameLoop();
  if (game.runGameLoop) {
    gameLoop();
  } 
});

$('.restart_button').on('click',() => {
  window.location.reload(true);
});

const nextLevelScreen = () => {
    $('.score_counter').hide();
    $('.next-level_screen').show();
    $('#game').hide();
};

const loseScreen = () => {
        $('#game').remove();
        $('.end-game_section').show();
        $('score_counter').hide();  
};

const gameLoop = () => {
  if (game.runGameLoop) {
    $('#game').show();
    $('.main_container').hide();
    $('.next-level_screen').hide();
    context.clearRect(0, 0, 500, 600);
    game.drawRabbit(context);
    game.collisionDetection(game.rabbit, game.bells);
    game.bellFrequency(context);
    game.drawBells(context);
    game.winLevel(game.rabbit);
    game.hitBottom(game.rabbit);
    requestAnimationFrame(gameLoop); 
  } else if ( !game.runGameLoop) {
      if(game.rabbit.y <= -10) {
        nextLevelScreen();
      } else{
        loseScreen();  
      }
  };
};