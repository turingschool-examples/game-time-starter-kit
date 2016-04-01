const KeyListener = require("./keyListener");
const Game        = require("./game");
const Render      = require("./render");

const canvas  = document.getElementById("screen");


KeyListener.start();
var game = new Game(canvas.width, canvas.height);
requestAnimationFrame(gameLoop);

function gameLoop(){
  game.update();
  Render(game.firstPlayer);
  requestAnimationFrame(gameLoop);
}
