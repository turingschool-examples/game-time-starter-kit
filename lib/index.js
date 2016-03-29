var KeyListener = require("./keyListener");
var Game        = require("./game");
var Render      = require("./render");

KeyListener.start();
var game = new Game();
requestAnimationFrame(gameLoop);

function gameLoop(){
  game.update();
  Render(game.firstPlayer);
  requestAnimationFrame(gameLoop);
}
