
const Game = require('./Game.js');
const Bells = require('./Bells.js')
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const Rabbit = require('./Rabbit.js');

const game = new Game(context, canvas.width, canvas.height);
const rabbit = new Rabbit(250, 500, 30, 30);

window.addEventListener('keydown', game.rabbit.moveRabbit);
window.addEventListener('keyup', rabbit.velocityReset);


function gameLoop() {
    context.clearRect(0, 0, 500, 600);
    game.drawRabbit(context);
    // console.log(game.rabbit)
    game.collisionDetection(game.rabbit, game.bells);
    if (Math.floor(50 * Math.random()) === 25){
        game.generateRandomBells(context);
    }
    game.drawBells(context);
    game.bellRecycle();
    // rabbit.boundries();
    // console.log(game.bellsArray);
    
    requestAnimationFrame(gameLoop); 
}

gameLoop();
    



 