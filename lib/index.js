const canvas = document.getElementById('surfer-game');
const Game = require('./game');
const KEYS = require('./constants/keys');

var game = new Game(canvas);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === KEYS.spacebar) {
    if (game.world.surfer.bottom > 189 && game.active) {
      game.world.surfer.velocity = -13;
    }
    if (!game.active) { game = new Game(canvas); }
  }
});

requestAnimationFrame(function gameLoop() {
  if (game.active) {
    game.cycle();
  }
  requestAnimationFrame(gameLoop);
});

module.exports = canvas;
