const canvas = document.getElementById('surfer-game');
const context = canvas.getContext('2d');

const Rock = require('./rocks');
const World = require('./world');
const Surfer = require('./surfer');

var spacebarWasPressed = 'false';
var rocks = createRocks();
var world = new World(canvas.width, canvas.height, new Surfer({}), rocks);


function renderWorld(context, world) {
  context.clearRect(0, 0, world.width, world.height);
  context.fillRect(world.surfer.x, world.surfer.y, world.surfer.width, world.surfer.height);
  rocks.forEach(function(rock) {
    context.fillRect(rock.x, rock.y, rock.width, rock.height);
  });
}

function createRocks() {
  return [
    new Rock({x: newRockLocation()}).small(),
    new Rock({x: newRockLocation()}).medium(),
    new Rock({x: newRockLocation()}).large()
  ];
}

function newRockLocation() {
  return Math.floor(Math.random() * (canvas.width*2 - canvas.width)) + canvas.width;
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    console.log('space');
    spacebarWasPressed;
  }
}, false );



requestAnimationFrame(function gameLoop() {
  renderWorld(context, world);
  rocks.forEach(function(rock) {
    world.isCollision(rock);
    rock.moveLeft();
    rock.resetPosition();
  });
  if (spacebarWasPressed = true) {
    world.surfer.velocity = -6;
    spacebarWasPressed = false;
  }
  world.surfer.jump();
  requestAnimationFrame(gameLoop);
});
