const canvas = document.getElementById('surfer-game');
const Game = require('./game');
const KEYS = require('./constants/keys');

var game = new Game(canvas);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === KEYS.spacebar) {
    console.log('space');
    if (game.world.surfer.bottom > 189 && game.startGame) {
      game.world.surfer.velocity = -13;
    }
  if (!game.startGame) {
      game = new Game(canvas);
    }
  }
});

requestAnimationFrame(function gameLoop() {
  if (game.startGame) {
    // game.cycle(); put all of the below code in the tick function

    game.renderWorld(this.context, this.world);
    game.animateSurfer();
    // var obstacles = game.rocks.concat(game.seagulls);
    // create "tick" function -> stuff that should happen every frame
    if(game.collision.checkForCollision(game.rocks)) { game.gameOver();}
    game.rocks.forEach(function(rock) {
      rock.moveLeft();
    });
    game.world.surfer.jump();
    game.tick++;
    if (game.tick % 5 === 0) {game.time++;}
    game.speedUpRock();
  }
  requestAnimationFrame(gameLoop);
});
