// lib/world.js //
const Rock = require('./rocks');
const Surfer = require('./surfer');

function World(width, height, surfer, rock, rocks) {
 this.width = width || 600;
 this.height = height || 150;
 this.surfer = surfer;
 this.rock = rock;
 this.rocks = [];
}

World.prototype.isCollision = function() {
  var frontsTouching = this.rock.x < this.surfer.right;
  var backsTouching = this.rock.right > this.surfer.x;
  var surferBottomTouchingRockTop = this.rock.y < this.surfer.bottom;
  if (frontsTouching && backsTouching && surferBottomTouchingRockTop) {
    return true;
  }
};


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
