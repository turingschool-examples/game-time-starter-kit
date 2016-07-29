// lib/surfer.js //
const Rock = require('./rocks');
const World = require('./world');


function Surfer(options) {
  this.x = options.x || 20;
  this.y = options.y || 130;
  this.width = 50;
  this.height = options.height || 60;
  this.right = this.x + this.width; //40 default
  this.world = options.world;
  this.gravity = 0.2;
  this.velocity = 0;
  this.bottom = this.y + this.height || 190;
}

Surfer.prototype.maxJumpHieght = function() {
  this.maxJumpHieght = 70;
  return this;
};

Surfer.prototype.jump = function () {
    if (this.y + this.velocity + 60 > 190) {
        // If so, move us back to ground level and set velocity to zero
        this.velocity = 0;
        this.y = 190 - 60;
        this.bottom = this.y + this.height;
    } else {
        // Otherwise, move what is indicated by velocity
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.bottom = this.y + this.height;
    }
};

// Surfer.prototype.
// Surfer.prototype.velocity = function() {
//   if (this.y + this.velocity + 70 > 130) {
//       // If so, move us back to ground level and set velocity to zero
//       this.velocity = 0;
//       this.y = 130 - 70;
//       this.bottom = 160 - 70;
//   } else {
//       // Otherwise, move what is indicated by velocity
//       this.velocity += this.gravity;
//       this.y += this.velocity;
//       this.bottom += this.velocity;
//   }
// };
// Surfer.prototype.jump = function () {
//   this.y = this.y-70;
//   this.bottom = this.bottom-70;
//   this.velocity();
//   return this;
// };




// Surfer.prototype.tick = function () {
//  Check for jumping
// }

module.exports = Surfer;
