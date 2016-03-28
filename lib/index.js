var canvas  = document.getElementById("screen");
var context = canvas.getContext("2d");

function gameloop(){
  context.fillRect(10,10,10,10);

  requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);
