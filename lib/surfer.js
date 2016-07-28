// lib/surfer.js //
const Rock = require('./rocks');
const World = require('./world');


function Surfer(options) {
  this.x = options.x || 20;
  this.y = options.y || 130;
  this.width = 50;
  this.height = options.height || 60;
  this.right = this.x + this.width; //40 default
  this.bottom = this.y + this.height; ///30
  this.world = options.world;
}


Surfer.prototype.jump = function () {
  this.y = this.y-70;
  return this;
};



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
