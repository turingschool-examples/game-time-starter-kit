const canvas = document.getElementById('surfer-game');
const Game = require('./game');

var game = new Game(canvas);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    console.log('space');
    if (game.world.surfer.bottom > 189 && game.startGame) {
      game.world.surfer.velocity = -13;
    }
  if (!game.startGame) {
      console.log('restart');
    }
  }
});


if (game.startGame) {
  requestAnimationFrame(function gameLoop() {
    game.renderWorld(this.context, this.world);
    game.animateSurfer();
    // var obstacles = game.rocks.concat(game.seagulls);
    if(game.collision.checkForCollision(game.rocks)) { game.gameOver();}
    game.rocks.forEach(function(rock) {
      rock.moveLeft();
    });
    game.world.surfer.jump();
    game.tick++;
    if (game.tick % 5 === 0) {game.time++;}
    game.speedUpRock();
    // game.context.clearRect(0, 0, game.world.width, game.world.height);
    // console.log('game is not active');
    if (game.startGame) {requestAnimationFrame(gameLoop);}
  });
}
