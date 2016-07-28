// lib/world.js //
const Rock = require('./rocks');
const Surfer = require('./surfer');

function World(width, height, surfer, rocks) {
  this.width = width || 600;
  this.height = height || 200;
  this.surfer = surfer;
  this.rocks = rocks;
}

World.prototype.isCollision = function(rock) {
  var frontsTouching = rock.x < this.surfer.right;
  var backsTouching = rock.right > this.surfer.x;
  var surferBottomTouchingRockTop = rock.y < this.surfer.bottom;
  if (frontsTouching && backsTouching && surferBottomTouchingRockTop && !rock.isOffScreenLeft()) {
    console.log('collision');
    return true;
  }
};

World.prototype.addEvents = function() {
  document.addEventListener('keydown', function(e) {
    if (e.target === '32') {
      console.log('space'); }
      // this.surfer.jump(); }
  });
};
// World.prototype.addSurfer = function(surfer) {
//   // surfer.world = this;
//   // this.surfers.push(surfer);
// };

// function gameOver() {
//   alert('gameOver');
// }

//

//  for (var i = 0; i < 4; i++) {
//    this.rocks.push(new Rock(width + 50, 10, 10, this));
//  }
// }
// World.prototype.tick = function () {
//  this.surfer.tick();
//  for (var rock of this.rocks) {
//    rock.tick();
//  }
// }

module.exports = World;
