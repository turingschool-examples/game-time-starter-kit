var KeyPressed = require("./keyPressed");

function Player(options){
  this.x = options.x || 50;
  this.y = options.y || 50;
  this.width = options.width || 10;
  this.height = options.height || 10;
  this.speed = options.speed || 2;
  this.speedX = this.speed;
  this.speedY = 0;
}

Player.prototype.orient = function(){
  if (KeyPressed.left)  { this.faceLeft();}
  if (KeyPressed.right) { this.faceRight();}
  if (KeyPressed.up)    { this.faceUp();}
  if (KeyPressed.down)  { this.faceDown();}

  return this;
};

Player.prototype.faceLeft = function () {
  this.speedX = -Math.abs(this.speed);
  this.speedY = 0;
};

Player.prototype.faceRight = function () {
  this.speedX = Math.abs(this.speed);
  this.speedY = 0;
};

Player.prototype.faceUp = function () {
  this.speedX = 0;
  this.speedY = -Math.abs(this.speed);
};

Player.prototype.faceDown = function () {
  this.speedX = 0;
  this.speedY = Math.abs(this.speed);
};

Player.prototype.position = function () {
  return [this.x, this.y];
};

Player.prototype.move = function(){
  this.x += this.speedX;
  this.y += this.speedY;

  return this;
};

module.exports = Player;
