const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const Brick = require('../lib/bricks');
const level1 = require('../lib/level');

// var ball = new Ball({height:10, width:10});

function World(width, height, paddle, ball) {
  this.width = width;
  this.height = height;
  this.currentLevel = [];
  this.paddle = new Paddle();
  this.ball = new Ball({});
}

World.prototype.addLevel = function(level) {
  level.world = this;
  this.levels.push(level);
};

World.prototype.addBrick = function() {
  this.bricks.push(new Brick({}));
};

World.prototype.ballStart = function() {
  this.ball.x += this.ball.directionX;
  this.ball.y += this.ball.directionY;
};

World.prototype.isBallHittingAWall = function(ball){
  if (ball.y <= 0){ball.invertY();}
  if ((ball.y + ball.height) >= this.height){ball.invertY();}
  if (ball.x <= 0){ball.invertX();}
  if ((ball.x + ball.width) >= this.width){ball.invertX();}
};

World.prototype.rightArrow = function() {
  if ((this.paddle.x + this.paddle.width) <= this.width) {
    this.paddle.moveRight();
  }
};

World.prototype.leftArrow = function() {
  if (this.paddle.x >= 0) {
    this.paddle.moveLeft();
  }
};

World.prototype.isBallColliding = function(object) {
  return this.ball.isCollidingWith(object);
};

World.prototype.tick = function() {
  this.isBallHittingAWall(this.ball);
  this.isBallColliding(this.paddle);
  this.ballStart();
};

World.prototype.renderLevel = function(level){
  this.currentLevel = [];
  for (var i = 0; i < level.length; i++){
    var brickX = (i * 65)+5;
    level[i].x = brickX;
    this.currentLevel.push(level[i]);
  }
};


module.exports = World;

// World.prototype.

// centerOne = { x: 50, y: 50 }
// Object {x: 50, y: 50}
// centerTwo = { x: 55, y: 45 }
// Object {x: 55, y: 45}
// function checkRelation(one, two) {
//   return {
//     x: one.x - two.x,
//     y: one.y - two.y
//   }
// }
// undefined
// checkRelation(centerOne, centerTwo)
// Object {x: -5, y: 5}



// World.prototype.isBlockyColliding = function () {
//   var blocky = this.blocks[0];
//   return this.enemies.find(function (enemy) {
//     return blocky.isCollidingWith(enemy);
//   });
// };

// Block.prototype.isCollidingWith = function (block) {
//   var isWithinTheWidth = block.x >= this.x && block.x <= this.bottomRight().x;
//   var isWithinTheHeight = block.y >= this.y && block.y <= this.bottomRight().y;
//   return isWithinTheWidth && isWithinTheHeight;
// };

// World.prototype.wallTracker = function(){
//   if (this.ball.y <= 0){
//     this.ball.y = -this.ball.y;
//   }
//   if (this.ball.x <= 0){
//     this.ball.x =-this.ball.x;
//   }
// };
