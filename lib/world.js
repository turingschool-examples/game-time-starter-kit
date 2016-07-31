// lib/world.js //
const Rock = require('./rocks');
const Surfer = require('./surfer');
const Game = require('./game');

function World(width, height, floor, surfer, rocks) {
  this.width = width || 600;
  this.height = height || 200;
  this.surfer = surfer;
  this.rocks = rocks;
  this.floor = floor;
}




// function gameOver(world) {
//   // all three objs...
//
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
