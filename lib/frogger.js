// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');

var frogX = (canvas.width - frogWidth)/2;
var frogY = (canvas.height - 30)
var frogWidth = 20;
var frogHeight = 20;

requestAnimationFrame(function gameLoop() {
  clearRect(0, 0, canvas.width, canvas.height);
  frogDraw();
  requestAnimationFrame(gameLoop);
})

function frogDraw(){
  context.beginPath();
  context.fillRect(frogX, frogY, frogWidth, frogHeight);
  context.closePath();
  // context.fillStyle = 'pink'

};


module.exports = Frogger;
