const canvas = document.getElementById('surfer-game');
const Game = require('./game');

var game = new Game(canvas);
var spacebarWasPressed = false;


document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    console.log('space');
    spacebarWasPressed = true;
  }
}, false );

requestAnimationFrame(function gameLoop() {
  game.renderWorld(this.context, this.world);
  game.collision.checkRocks();
  game.rocks.forEach(function(rock) {
    rock.moveLeft();
    rock.resetPosition();
    // if the reset position of x is within the 300 of other rock x then reset position again
      // check rock x vs rock2 x vs rock3 x
  });
  if (spacebarWasPressed) {
    game.world.surfer.velocity = -10;
    spacebarWasPressed = false;
  }
  game.world.surfer.jump();
  game.tick++;
  requestAnimationFrame(gameLoop);
});
