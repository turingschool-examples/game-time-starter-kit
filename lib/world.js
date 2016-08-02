const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const Brick = require('../lib/bricks');

function World(width, height, gameState) {
  this.width = width;
  this.height = height;
  this.court = [];
  this.newLevel = [];
  this.paddle = new Paddle();
  this.ball = new Ball({});
  this.gameState = gameState;
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

World.prototype.respawn = function() {
    this.ball = new Ball({});
  this.paddle = new Paddle();
  this.gameState = 2;
};

World.prototype.isBallHittingAWall = function(ball){
  if (ball.y <= 0){ball.invertY();}
  if ((ball.y + ball.height) >= this.height){this.respawn();}
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

World.prototype.startBall = function(){
  this.ball.speed = 4;
};

World.prototype.isBallColliding = function(object) {
  return this.ball.isCollidingWith(object);
};

World.prototype.isBallCollidingWithPaddle = function(paddle) {
  if (this.ball.isCollidingWith(paddle)) {

    this.ball.y = paddle.y - this.ball.height;
    this.ball.invertY();
  }
};

World.prototype.renderCourt = function(arr) {
  arr = arr.filter(function(i) {
    return i.status !==0;
    });
  this.court = arr;
};

World.prototype.isBallCollidingWithBrick = function(level) {
  for (var i=0; i < level.length; i++){
    if (this.isBallColliding(level[i])) {
      this.ball.bounce(level[i]);
      level[i].status--;
      this.renderCourt(level);
    }
  }
};

World.prototype.isCourtClear = function(level){
  var counter = 0;
  for (var i=0; i < level.length; i++){
    if (level[i].status > 0){counter ++;}
  }
    if (counter === 0){
      this.ball = new Ball({});
      this.paddle = new Paddle();
      this.gameState = 3;}
};

World.prototype.tick = function() {
  this.isBallHittingAWall(this.ball);
  this.isBallCollidingWithPaddle(this.paddle);
  this.isBallCollidingWithBrick(this.court);
  this.isCourtClear(this.court);
  this.ballStart();
};

World.prototype.translateLevel = function(level) {
  var levelString = level.join('');
  for (var i = 0; i < levelString.length; i++) {
    if (levelString.charAt(i) ==='#') {
      this.newLevel.push(new Brick({ status: 1 }));
    }
    if (levelString.charAt(i) === 'O') {
      this.newLevel.push(new Brick({ status: 0 }));
    }
    if (levelString.charAt(i) === 'U'){
       this.newLevel.push(new Brick({ status: -1 }));
    }
    if (levelString.charAt(i) === 'M'){
       this.newLevel.push(new Brick({ status: 3 }));
    }
  }
  return this.newLevel;
};

World.prototype.renderLevel = function(level) {
    this.court = [];
    var columnCount = 12;
    var rowCount = 8;
    var i = 0;
    for (var rows = 0; rows < rowCount; rows++) {
        for (var columns = 0; columns < columnCount; columns++) {
            level[i].x = 5 + (columns * 62);
            level[i].y = (rows * 27);
            this.court.push(level[i]);
            i++;
        }
    }
};


module.exports = World;

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
