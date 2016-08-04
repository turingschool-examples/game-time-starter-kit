const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const Brick = require('../lib/bricks');

function World(width, height, gameState) {
  this.width = width;
  this.height = height;
  this.court = [];
  this.newLevel = [];
  this.paddle = new Paddle();
  this.ball = new Ball();
  this.gameState = gameState;
  this.lives = 3;
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
  if (ball.x <= 0){ball.invertX();}
  if ((ball.x + ball.width) >= this.width){ball.invertX();}
};

World.prototype.isBallHittingTheGround = function(ball){
  if ((ball.y + ball.height) >= this.height){
    this.lives--;
    if (this.lives >= 1){
      this.respawn();
    } else {
      this.gameState = 5;
    }
  }
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
var ball = this.ball;
  if (ball.isCollidingWith(paddle)) {
    ball.y = paddle.y - ball.height;
    if ((ball.x + ball.width > paddle.x) && ((ball.x + ball.width) < (paddle.x + 20))) {
      ball.left45();
    }
    if ((ball.x + ball.width > paddle.x + 20) && ((ball.x + ball.width) < (paddle.x + 40))) {
      ball.left60();
    }
    if ((ball.x >= paddle.x + 40) && (ball.x + ball.width <= paddle.x + 60)) {
      ball.invertY();
    }
    if ((ball.x > paddle.x + 60) && ((ball.x + ball.width) < (paddle.x + 80))) {
      ball.right60();
    }
    if ((ball.x > paddle.x + 80) && ((ball.x + ball.width < (paddle.x + paddle.width)))) {
      ball.right45();
    }
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
      this.gameState = 3;}
};

World.prototype.tick = function() {
  this.isBallHittingAWall(this.ball);
  this.isBallCollidingWithPaddle(this.paddle);
  this.isBallCollidingWithBrick(this.court);
  this.isCourtClear(this.court);
  this.isBallHittingTheGround(this.ball);
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
