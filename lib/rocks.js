function Rock(options) {
 this.width = options.width || 25;
 this.height = options.height || 25;
 // this.x = options.x || 625;
 this.x = this.placeRock(); // returns an x value
 this.y = options.y || 190 - this.height;
 this.bottom = this.y + this.height;
 this.right = this.x + this.width;
 this.world = options.world;
 this.surfer = options.surfer;
 this.game = options.game;
 this.speed = 6;
}

Rock.prototype.isOffScreenLeft = function () {
  return this.x < 0 - this.width;
};

Rock.prototype.moveLeft = function () {
  if (this.isOffScreenLeft()) {
    this.placeRock();
    return;
  }
  this.x = this.x - this.speed;
  this.right = this.x + this.width;
  return this;
};

Rock.prototype.small = function () {
  this.y = 165;
  this.width = 25;
  this.height = 25;
  return this;
};

Rock.prototype.medium = function () {
  this.y = 150;
  this.width = 40;
  this.height = 40;
  return this;
};

Rock.prototype.large = function () {
  this.y = 135;
  this.width = 55;
  this.height = 55;
  return this;
};

Rock.prototype.placeRock = function () {
  // resetting: make sure tthse are not on top of each other

  // previous postion = q
  // check against new value and make sure it's 200px greater than q

  // when defining this x var, make sure it's not too close to this.previousX
  // up here it will still be the x val of rock 1
  // while loop --> until the "new" x meets the conds based on prevX
  var x = Math.floor(Math.random() * (3000 - 600)) + 600;

  // if (this.x + 200 < x) { return x += 200; }
  // var x = this.x + 200 > this.previousX ?
  // var x = x + 200  > previousX ? x : x + 200; (ternary)

  this.x = x;
  return this.x;
};

module.exports = Rock;
