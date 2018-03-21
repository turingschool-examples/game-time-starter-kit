
const Game = require('./Game.js');
const Bells = require('./Bells.js')
const Rabbit = require('./Rabbit.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const game = new Game(context, canvas.width, canvas.height);
const rabbit = new Rabbit(250, 500, 30, 30);

window.addEventListener('keydown', game.rabbit.moveRabbit);
window.addEventListener('keyup', rabbit.velocityReset);

$('.start_button').on('click', function(){
    game.toggleGameLoop();
    if (game.runGameLoop){
        gameLoop();
}});


function gameLoop() {
    if (game.runGameLoop) {
        $('#game').show();
        $('.main_container').hide();
        $('.next-level_screen').hide();
    // debugger;
    // game.scrolling(35);
    context.clearRect(0, 0, 500, 600);
    game.drawRabbit(context);
    // console.log(game.rabbit)
    game.collisionDetection(game.rabbit, game.bells);
    if (Math.floor(35 * Math.random()) === 25){
        game.generateRandomBells(context);
    }
    game.drawBells(context);
    game.bellRecycle();
    // rabbit.boundries();
    // console.log(game.bellsArray);
    game.nextLevel(game.rabbit);
    requestAnimationFrame(gameLoop); 
    }
}

// gameLoop();
  

// when the collision happens, how do i change the capped fixed scroll. 



 