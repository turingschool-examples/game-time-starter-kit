// lib/surfer.js //
const Rock = require('./rocks');
const World = require('./world');


function Surfer(options) {
  this.x = options.x || 20;
  this.y = options.y || 130; // 60
  this.width = 50;
  this.height = options.height || 60;
  this.right = this.x + this.width; //40 default
  this.bottom = this.y + this.height; ///30   120
  this.world = options.world;
}


Surfer.prototype.jump = function () {
  this.y = this.y-70;
  return this;
};

// Surfer.prototype.tick = function () {
//  // Check for jumping
// }

module.exports = Surfer;
