const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const Brick = require('../lib/bricks');

// var ball = new Ball({height:10, width:10});

function World(width, height, paddle, ball) {
  this.width = width;
  this.height = height;
  this.bricks = [];
  this.levels = [];
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
  if ((this.paddle.x + this.paddle.width) < this.width) {
    this.paddle.moveRight();
  }
};

World.prototype.leftArrow = function() {
  if (this.paddle.x > 0) {
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

module.exports = World;


//world.prototype.renderbricks
//array.map of level array to bricks array
//assign x and y coordinates to all bricks
//set basic brick status to 1
//
//bricks.foreach to filter by brick status
//if ball collides with brick, status --
//if brick status = 0 it's filtered out
//level ends when all brick status <= 0
//draw.bricks on all bricks in bricks array
//bricks are removed from bricks array when status 0
//
//draw bricks function/array foreach on all bricks
//in the bricks array
//
//get tricky with it and have different text chars
//for different starting status
//some bricks could start with status 2 and take
//2 hits to clear.  some could start -1 and
//never be cleared.

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
