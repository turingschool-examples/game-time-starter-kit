function Ball(options) {
  this.height = 10;
  this.width = 10;
  this.x = options.x || 395;
  this.y = options.y || 460;
  this.speed = 4;
  this.world = options.world;
  this.directionX = this.speed;
  this.directionY = -this.speed;
}

Ball.prototype.invertX = function() {
  this.directionX = -this.directionX;
};

Ball.prototype.invertY = function () {
  this.directionY = -this.directionY;
};

Ball.prototype.invert = function() {
  this.directionY = -this.directionY;
  this.directionX = -this.directionX;
};

Ball.prototype.isCollidingWith = function(object) {
if (this.x < object.x + object.width &&
   this.x + this.width > object.x &&
   this.y < object.y + object.height &&
   this.height + this.y > object.y) {
     this.invertY();
   }
 };

//Ball.prototype.whereWasCollision = function(object) {
// check object.x-ball.x ( or centers? )  call invert
//functions based on the math of the difference between
//x's and y's
// };

module.exports = Ball;
