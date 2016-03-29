var KeyPressed = require("./keyPressed");

function Player(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speed = 3;
  this.speedX = this.speed;
  this.speedY = 0;
}

Player.prototype.move = function(){
  if (KeyPressed.left)  { this.speedX = -Math.abs(this.speed); this.speedY = 0;}
  if (KeyPressed.right) { this.speedX =  Math.abs(this.speed); this.speedY = 0;}
  if (KeyPressed.up)    { this.speedY = -Math.abs(this.speed); this.speedX = 0;}
  if (KeyPressed.down)  { this.speedY =  Math.abs(this.speed); this.speedX = 0;}

  this.x += this.speedX;
  this.y += this.speedY;

  return this;
};

module.exports = Player;
