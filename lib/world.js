// lib/world.js //
const Rock = require('./rocks');
const Surfer = require('./surfer');

function World(width, height, surfer, rocks) {
  this.width = width || 600;
  this.height = height || 200;
  this.surfer = surfer;
  this.rocks = rocks;
  this.ground = this.height - 10;
}



World.prototype.isCollision = function(rock) {
  var frontsTouching = rock.x < this.surfer.right;
  var backsTouching = rock.right > this.surfer.x;
  var surferBottomTouchingRockTop = rock.y < this.surfer.bottom;
  // var surferTopTouchingRockBottom = rock.bottom > this.surfer.y;
  if (frontsTouching && backsTouching && surferBottomTouchingRockTop) {
    console.log('collision');
    // gameOver();
    // return true;
  }
};

// function gameOver(world) {
//   this.world.gameOver();
//   if (world.isCollision()) {
//     console.log('game over');
//
//   }
// }

// World.prototype.gameOver = function() {
//   if (this.isCollision()) {
//     console.log('game over');
//     // this.resetGame();
//   }
// };
//
// World.prototype.resetGame = function() {
//   if (this.gameOver()) {
//     // var world = new World({});
//
//   }
// };

// World.prototype.tick = function () {
//  this.surfer.tick();
//  for (var rock of this.rocks) {
//    rock.tick();
//  }
// }

module.exports = World;
