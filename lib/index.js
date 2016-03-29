var canvas  = document.getElementById("screen");
var ctx = canvas.getContext("2d");

canvas.focus()

function Player(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speed = 3
  this.speedX = this.speed;
  this.speedY = 0;
  this.keyboarder = new Keyboarder();
}

Player.prototype.draw = function(){
  ctx.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Player.prototype.move = function(){
  if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT))  { this.speedX = -Math.abs(this.speed); this.speedY = 0;}
  if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) { this.speedX =  Math.abs(this.speed); this.speedY = 0;}
  if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN))  { this.speedY =  Math.abs(this.speed); this.speedX = 0;}
  if (this.keyboarder.isDown(this.keyboarder.KEYS.UP))    { this.speedY = -Math.abs(this.speed); this.speedX = 0;}
  this.x += this.speedX;
  this.y += this.speedY;

  return this;
};

function Keyboarder () {
  var keyState = {};
  window.addEventListener('keydown', function(event) {
      keyState[event.keyCode] = true;
  });

  window.addEventListener('keyup', function(event) {
      keyState[event.keyCode] = false;
  });

  this.isDown = function(keyCode) { return keyState[keyCode] === true; };
  this.KEYS = { LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40};
}

var firstPlayer = new Player(50, 50, 10, 10);

requestAnimationFrame(function gameLoop() {
  firstPlayer.move().draw();

  requestAnimationFrame(gameLoop);
});
