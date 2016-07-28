// lib/rocks.js //
const World = require('./world');
const Surfer = require('./surfer');


function Rock(options) {
 this.x = options.x || 625;
 this.y = options.y || 150;
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
  this.x = this.x - 3;
  return this;
};

Rock.prototype.small = function () {
  this.width = 25;
  this.height = 25;
  return this;
};

Rock.prototype.medium = function () {
  this.width = 40;
  this.height = 40;
  return this;
};

Rock.prototype.large = function () {
  this.width = 55;
  this.height = 55;
  return this;
};

Rock.prototype.resetPosition = function () {
  if (this.isOffScreenLeft()) {
    this.x = Math.floor(Math.random() * (1200 - 600)) + 600;
  }
  return this;
};


// Rock.prototype.startOver = function () {
//   if (this.isOffScreenLeft) {
//     return this.isOffScreenRight;
//   }
// };

// Rock.prototype.tick = function () {
//  this.x++;
//  }
module.exports = Rock;
