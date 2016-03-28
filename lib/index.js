var canvas  = document.getElementById("screen");
var ctx = canvas.getContext("2d");

function Player(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.keyboarder = new Keyboarder();
}

Player.prototype.draw = function(){
  ctx.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Player.prototype.move = function(){
  if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) { this.x--; }
  if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) { this.x++; }
  if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) { this.y++; }
  if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) { this.y--; }
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
var secondPlayer = new Player(75,75, 10, 10);

requestAnimationFrame(function gameLoop() {
  firstPlayer.move().draw();
  secondPlayer.draw().move();

  requestAnimationFrame(gameLoop);
});
