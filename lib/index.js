
const Game = require('./Game.js');
const Bells = require('./Bells.js')
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Rabbit = require('./Rabbit.js');

const game = new Game(context, canvas.width, canvas.height);
const rabbit = new Rabbit(250, 400, 30, 30);

window.addEventListener('keydown', game.rabbit.moveRabbit);
window.addEventListener('keyup', rabbit.velocityReset);




function gameLoop() {
    context.clearRect(0, 0, 500, 500);
    game.drawRabbit(context);
    // rabbit.jump();
    // rabbit.boundries();
    requestAnimationFrame(gameLoop);

}
gameLoop();
    
game.drawRandomBells(context);



 