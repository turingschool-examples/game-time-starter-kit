var canvas  = document.getElementById("screen");
var ctx = canvas.getContext("2d");

function Player(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Player.prototype.draw = function(){
  ctx.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Player.prototype.move = function(){
  this.x++;
  return this;
};

var firstPlayer = new Player(50, 50, 10, 10);
var secondPlayer = new Player(75,75, 10, 10);

requestAnimationFrame(function gameLoop() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  firstPlayer.move().draw();
  secondPlayer.draw().move();

  requestAnimationFrame(gameLoop);
});
