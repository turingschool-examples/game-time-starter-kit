const KeyPressed = require("./keyPressed");

function Player(options){
  this.x      = options.x || 50;
  this.y      = options.y || 50;
  this.width  = options.width || 10;
  this.height = options.height || 10;
  this.speed  = options.speed || 2;
  this.speedX = this.speed;
  this.speedY = 0;

  this.faceLeft  = this.faceDirection.bind(this, -Math.abs(this.speed), 0);
  this.faceRight = this.faceDirection.bind(this,  Math.abs(this.speed), 0);
  this.faceUp    = this.faceDirection.bind(this, 0, -(Math.abs(this.speed)));
  this.faceDown  = this.faceDirection.bind(this, 0,  (Math.abs(this.speed)));
}

Player.prototype.faceDirection = function(speedX, speedY){
  this.speedX = speedX;
  this.speedY = speedY;
};

Player.prototype.position = function () {
  return [this.x, this.y];
};

Player.prototype.move = function(){
  this.x += this.speedX;
  this.y += this.speedY;

  return this;
};

Player.prototype.orient = function(){
  if (KeyPressed.left)  {this.faceLeft();}
  if (KeyPressed.right) {this.faceRight();}
  if (KeyPressed.up)    {this.faceUp();}
  if (KeyPressed.down)  {this.faceDown();}

  return this;
};

module.exports = Player;
