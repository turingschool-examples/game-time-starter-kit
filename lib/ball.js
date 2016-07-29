class Ball {
  constructor (properties, world) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 16;
    this.width = properties.width || 16;
    this.x = properties.x || 442;
    this.y = properties.y || 434;
    this.speed = properties.speed || 4;
    this.world = world;
    this.on_right_wall = false;
  };

moveBall() {
  this.y = this.y - this.speed + 1;
  this.x = this.x + this.speed;
};

  // moveUp() {
  //   this.y = this.y + 1;
  //   return this.y;
  // };
  //
  // moveDown() {
  //   this.y = this.y - 1;
  //   return this.y;
  // };
  //
  // moveUpAndLeft() {
  //   this.x = this.x - 1;
  //   this.y = this.y + 1;
  //   return this.y, this.x;
  // };
  //
  // moveUpAndRight() {
  //   this.x = this.x + 1;
  //   this.y = this.y + 1;
  //   return this.y, this.x;
  // };
  //
  // moveDownAndLeft() {
  //   this.x = this.x - 1;
  //   this.y = this.y - 1;
  //   return this.y, this.x;
  // };
  //
  // moveDownAndRight() {
  //   this.x = this.x + 1;
  //   this.y = this.y - 1;
  //   return this.y, this.x;
  // };
};

module.exports = Ball;
