// lib/world.js //
const Rock = require('./rocks');
const Surfer = require('./surfer');

function World(width, height, surfer, rock, rocks) {
 this.width = width || 600;
 this.height = height || 150;
 this.Surfer = surfer;
 this.Rock = rock;
 this.rocks = rocks;
}



// Block.prototype.moveRight = function () {
//   this.x = this.x + 1;
//   return this;
// }

// it('should have a method called "moveRight()', function () {
//   var blocky = new Block(15, 30);
//   assert.isFunction(blocky.moveRight);
// });

// it('"moveRight()" should increment the "x" propety by 1', function () {
//   var blocky = new Block(15, 30);
//   blocky.moveRight();
//   assert.equal(blocky.x, 16);
// });

World.prototype.isCollision = function() {
  var frontsTouching = rock.x <== surfer.right;
  var backsTouching = rock.right >== surfer.x;
  var topTouching = rock.y >== surfer.bottom;
  if (frontsTouching === true || backsTouching === true && topTouching === true) {
    return true;
  }
};

// function gameOver() {
//
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
