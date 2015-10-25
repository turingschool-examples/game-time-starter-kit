const Game = require('./game');
const Renderer = require('./renderer');
const $ = require('jquery');

var gameRenderer = startGame();

function startGame() {
  var game = new Game();
  var renderer = new Renderer(game);

  var target = $('.container');

  renderer.addTilesTo(target);

  return renderer;
}

function detectUserInput() {

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        gameRenderer.game.board.moveLeft();
        syncBoard();
        break;
      case 38:
        gameRenderer.game.board.moveUp();
        syncBoard();
        break;
      case 39:
        gameRenderer.game.board.moveRight();
        syncBoard();
        break;
      case 40:
        gameRenderer.game.board.moveDown();
        syncBoard();
        break;
    }
  };
}

function syncBoard() {
  var target = $('.container');

  gameRenderer.clearAllTileClasses(target)
    .clearAllValues(target)
    .addRandomTile()
    .addTilesTo(target);
}

detectUserInput();