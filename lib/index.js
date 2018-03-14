const GamePiece = require('./GamePiece.js');
const Rabbit = require('./Rabbit.js');
const Game = require('./Game.js');
const Bells = require('./Bells.js');


const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const rabbit = new Rabbit(250, 400, 30, 30);

window.addEventListener('keydown', rabbit.moveRabbit);


    
requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    rabbit.moveRabbit().draw(context);

    requestAnimationFrame(gameLoop);
})




 