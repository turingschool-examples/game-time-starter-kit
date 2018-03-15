
const Game = require('./Game.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const game = new Game(context, canvas.width, canvas.height);
// const rabbit = new Rabbit(250, 400, 30, 30);

window.addEventListener('keydown', game.rabbit.moveRabbit);

game.gameLoop();

