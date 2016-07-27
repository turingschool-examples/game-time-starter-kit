// lib/rocks.js //
const World = require('./world');
const Surfer = require('./surfer');

// var rocks = [large, small, medium, large2, large3, small2, medium2];
// how close can they be together
// how quickly do they come up
// create random number function
// how does the world talk to them.


function Rock(options) {
 this.x = options.x || 625;
 this.y = options.y || 100;
 this.width = options.width || 25;
 this.height = options.height || 40;
 this.right = this.x + this.width;
 this.world = options.world;
 this.surfer = options.surfer;
}

Rock.prototype.isOffScreenLeft = function () {
  return this.x < 0 - this.width;
};

Rock.prototype.isOffScreenRight = function () {
  return this.x > World.width + this.width;
};

Rock.prototype.moveLeft = function () {
  this.x = this.x - 10;
  return this;
};

Rock.prototype.small = function () {
  this.width = 25;
  this.height = 25;
};

Rock.prototype.medium = function () {
  this.width = 40;
  this.height = 40;
};

Rock.prototype.large = function () {
  this.width = 55;
  this.height = 55;
};
// var large = new Rock('large');
//
// Rock.prototype.large = function () {
//   this.y = 90;
//   this.width = 50;
//   this.height = 60;
// };


// Rock.prototype.startOver = function () {
//   if (this.isOffScreenLeft) {
//     return this.isOffScreenRight;
//   }
// };

// Rock.prototype.tick = function () {
//  this.x++;
//  }
module.exports = Rock;
