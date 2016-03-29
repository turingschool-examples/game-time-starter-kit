var KeyListener = require("./keyListener");
var Player = require("./player");

var canvas  = document.getElementById("screen");
var ctx = canvas.getContext("2d");

// initialize the game
  // create players
  // start listeners
  // start gameLoop

// gameLoop

canvas.focus();

KeyListener.start();

var firstPlayer = new Player(50, 50, 10, 10);

requestAnimationFrame(function gameLoop() {
  firstPlayer.move();
  ctx.fillRect(firstPlayer.x, firstPlayer.y, firstPlayer.width, firstPlayer.height);
  requestAnimationFrame(gameLoop);
});
