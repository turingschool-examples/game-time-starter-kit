const canvas = document.getElementById('surfer-game');
const Game = require('./game');

var game = new Game(canvas);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    console.log('space');
    if (game.world.surfer.bottom > 189) { game.world.surfer.velocity = -10; }
  }
});

requestAnimationFrame(function gameLoop() {
  game.renderWorld(this.context, this.world);
  // var obstacles = game.rocks.concat(game.seagulls);
  game.collision.checkForCollision(game.rocks);
  game.rocks.forEach(function(rock) {
    rock.moveLeft();
  });
  game.world.surfer.jump();
  game.tick++;
  if (game.tick % 5 === 0) {game.time++;}
  requestAnimationFrame(gameLoop);
});
