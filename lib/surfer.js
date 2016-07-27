// lib/surfer.js //

//x, y, width, height, world

function Surfer(options) {
  this.x = options.x || 20;
  this.y = options.y || 110;
  this.width = 20;
  this.height = options.height || 30;
  this.right = this.x + this.width; //40 default
  this.bottom = this.y + this.height; ///30
}



// Surfer.prototype.isColliding = function () {
//  this.world.rocks.forEach(function (rock) {
//    if (rock.x > this.x && rock.x < this.x + this.width) {
//      this.world.annouceCollision()
//    }
//  });
// }
// Surfer.prototype.tick = function () {
//  // Check for jumping
// }

module.exports = Surfer;
