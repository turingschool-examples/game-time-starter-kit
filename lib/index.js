
const Game = require('./Game.js');
const Bells = require('./Bells.js')
const Rabbit = require('./Rabbit.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const game = new Game(context, canvas.width, canvas.height);
const rabbit = new Rabbit(250, 500, 30, 30);

$(window).on('keydown', game.rabbit.moveRabbit);
$(window).on('keyup', rabbit.velocityReset);
$('.next-level_button').on('click', () => {
    console.log('clicked')
    game.startNextLevel()
    gameLoop()
});
// $('.next-level_button').on('click', game.toggleGameLoop);


$('.start_button').on('click', function(){
    $('.score_counter').show();
    game.toggleGameLoop();
    if (game.runGameLoop){
        gameLoop();
}});


function gameLoop() {
    console.log('running')
    if (game.runGameLoop) {
        $('#game').show();
        $('.main_container').hide();
        $('.next-level_screen').hide();
    context.clearRect(0, 0, 500, 600);
    game.drawRabbit(context);
    game.collisionDetection(game.rabbit, game.bells);
    game.bellFrequency(context);
    game.drawBells(context);
    // game.bellRecycle();
    game.endLevel(game.rabbit);
    requestAnimationFrame(gameLoop); 
    }
}

// gameLoop();
  

// when the collision happens, how do i change the capped fixed scroll. 



 