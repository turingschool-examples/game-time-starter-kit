var KeyPressed = require("./keyPressed")
var KeyListener = require("./keyListener")
var canvas  = document.getElementById("screen");
var ctx = canvas.getContext("2d");

canvas.focus()
KeyListener.start()

function Player(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speed = 3
  this.speedX = this.speed;
  this.speedY = 0;
}

Player.prototype.draw = function(){
  ctx.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Player.prototype.move = function(){
  if (KeyPressed.left)  { this.speedX = -Math.abs(this.speed); this.speedY = 0;}
  if (KeyPressed.right) { this.speedX =  Math.abs(this.speed); this.speedY = 0;}
  if (KeyPressed.up)    { this.speedY = -Math.abs(this.speed); this.speedX = 0;}
  if (KeyPressed.down)  { this.speedY =  Math.abs(this.speed); this.speedX = 0;}

  this.x += this.speedX;
  this.y += this.speedY;

  return this;
};

var firstPlayer = new Player(50, 50, 10, 10);

requestAnimationFrame(function gameLoop() {
  firstPlayer.move().draw();

  requestAnimationFrame(gameLoop);
});
