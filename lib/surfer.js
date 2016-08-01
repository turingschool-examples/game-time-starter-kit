function Surfer(options) {
  this.x = options.x || 20;
  this.y = options.y || 130;
  this.width = 50;
  this.height = options.height || 60;
  this.right = this.x + this.width; //40 default
  this.world = options.world;
  this.gravity = 0.5;
  this.velocity = 0;
  this.bottom = this.y + this.height || 190;
  this.canvas = options.canvas;
  this.floor = options.floor;
  this.image = new Image();
  this.image.src = `./images/surfer.png`;
  // this.surfer = drawImage(Image,20,190);

}

Surfer.prototype.jump = function () {
  if (this.y + this.velocity + this.height > this.canvas.height - 10) {
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

module.exports = Surfer;
