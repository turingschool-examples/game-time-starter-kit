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

Ball.prototype.isCollidingWith = function(thing) {
return (this.x < thing.x + thing.width &&
   this.x + this.width > thing.x &&
   this.y < thing.y + thing.height &&
   this.height + this.y > thing.y);
 };

Ball.prototype.bounce = function(thing){
  if (((this.x + this.width) > thing.x) && (this.x < thing.x + thing.width) && ((this.y >= (thing.y + thing.height - 4)))) {
    this.invertY();
    }
  else if (((this.x + this.width) > thing.x) && (this.x < thing.x + thing.width) && (((this.y + this.height) <= (thing.y + 4)))){
  this.invertY();
  }
  else {
    this.invertX();
  }
};

// Ball.prototype.bounce = function(collider) {
//   var ax = this.x;
//   var ay = this.y;
//   var bx = collider.x;
//   var by = collider.y;
//   var bh = collider.height/2;
//   var bw = collider.width/2;
//   var dx = Math.abs((ax - bx) - bw);
//   var dy = Math.abs((ay - by) - bh);
//   if (dx > dy) {
//     this.invertX();
//   }
//   else {
//     this.invertY();
//   }
// };



module.exports = Ball;
