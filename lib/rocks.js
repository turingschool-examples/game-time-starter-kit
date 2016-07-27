// lib/rocks.js //
const World = require('./world');

// var rocks = [large, small, medium, large2, large3, small2, medium2];
// how close can they be together
// how quickly do they come up
// create random number function
// how does the world talk to them.


function Rock(options) {
 this.x = options.x || 625;
 this.y = options.y || 100;
 this.width = 25;
 this.height = options.height || 40;
 this.right = this.x + this.width;
}

Rock.prototype.isOffScreenLeft = function () {
  return this.x < 0 - this.width;
};

Rock.prototype.isOffScreenRight = function () {
  return this.x > World.width + this.width;
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
