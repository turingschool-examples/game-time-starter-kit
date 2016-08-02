const Paddle = require('./paddle');
var paddle = new Paddle();
function Ball(options) {
  this.height = 12;
  this.width = 12;
  this.x = (paddle.x + paddle.width/2);
  this.y = options.y || 457;
  this.speed = options.speed || 4;
  this.world = options.world;
  this.paddle = new Paddle();
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
  var ballBottom = this.y + this.height;
  var ballTop = this.y;
  var ballLeft = this.x -4;
  var ballRight= this.x + this.width + 4;
  var thingBottom = thing.y + thing.height;
  var thingTop = thing.y;
  var thingLeft = thing.x;
  var thingRight = thing.x + thing.width;

    if ((ballRight > thingLeft) && (ballLeft < thingRight) && ((ballTop >= (thingBottom - 4))
  )) {
      this.invertY();
      }
    else if ((ballRight > thingLeft) && (ballLeft < thingRight) && ((ballBottom <= (thingTop + 4)))){
     this.invertY();
    }
    else {
      this.invertX();
    }
  };

//   if ((ballTop <= thingBottom || ballBottom >= thingTop) && (ballRight >= thingLeft)){
//     this.invertX();
//     }
//   else if ((ballTop <= thingBottom || ballBottom >= thingTop) && (ballLeft <= thingRight)){
//    this.invertX();
//   }
//   else {
//     this.invertY();
//     console.log('Yinverted');
//   }
// };



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
