// lib/surfer.js //
const Rock = require('./rocks');
const World = require('./world');


function Surfer(options) {
  this.x = options.x || 20;
  this.y = options.y || 130; // 60
  this.width = 50;
  this.height = options.height || 60;
  this.right = this.x + this.width; //40 default
  this.world = options.world;
  this.bottom = this.y + this.height;
  // this.velocity = options.velocity;
  // this.gravity = options.gravity; // 9.8ms squared
  // this.power = options.power;
}


Surfer.prototype.jump = function () {
  this.y = this.y-70;
  this.bottom = this.bottom-70;
  return this;
};

Surfer.prototype.velocity = function() {

};

Surfer.prototype.gravity = function() {

};


// velocity = power / height

// if return pushed
// if surfer bottom is closer to world.floor increase
// if


// Surfer.prototype.tick = function () {
//  Check for jumping
// }

module.exports = Surfer;
