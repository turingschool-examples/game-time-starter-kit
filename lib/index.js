const KeyListener = require("./keyListener");
const Game        = require("./game");
const Render      = require("./render");

const canvas  = document.getElementById("screen");


KeyListener.start();
var game = new Game(canvas.width, canvas.height);
requestAnimationFrame(gameLoop);


var tick = true;
function gameLoop(){
  if (tick) {
    game.update();
    Render([game.firstPlayer]);
    Render(game.players);
  }
  tick = !tick;
  requestAnimationFrame(gameLoop);
}
