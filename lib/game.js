var canvas  = document.getElementById("screen");
var ctx = canvas.getContext("2d");
var Player = require("./player");
var KeyListener = require("./keyListener");

canvas.focus();

KeyListener.start();

var Game = function(){
  var firstPlayer = new Player(50, 50, 10, 10);

  requestAnimationFrame(function gameLoop() {
    firstPlayer.move();
    ctx.fillRect(firstPlayer.x, firstPlayer.y, firstPlayer.width, firstPlayer.height);
    requestAnimationFrame(gameLoop);
  });
};

module.exports = Game;

// initialize the game
  // create players
  // start listeners
  // start gameLoop

// gameLoop
