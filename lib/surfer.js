function Surfer(options) {
  this.x = options.x || 20;
  this.y = options.y || 130;
  this.width = 50;
  this.height = 60;
  this.right = this.x + this.width;
  this.gravity = 1;
  this.velocity = 0;
  this.bottom = this.y + this.height || 190;
  this.image = new Image();
  this.image.src = `./img/surfer.png`;
}

Surfer.prototype.jump = function () {
  if (this.belowGround()) {
    // If so, move us back to ground level and set velocity to zero
    this.resetAtGround();
  } else {
    // Otherwise, move what is indicated by velocity
    this.up();
  }
};

Surfer.prototype.belowGround = function () {
  return this.y + this.velocity + this.height > 190;
};

Surfer.prototype.up = function () {
  this.velocity += this.gravity;
  this.y += this.velocity - this.gravity;
  this.bottom = this.y + this.height;
};

Surfer.prototype.resetAtGround = function () {
  this.velocity = 0;
  this.y = 190 - this.height;
  this.bottom = this.y + this.height;
};


module.exports = Surfer;
