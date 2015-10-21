const $ = require('jquery');

function Renderer (board) {
  this.board = board;
}

Renderer.prototype.renderBoard = function () {
  var board = $(`<div class='board'></div>`);
  var gridContainer = $(`<div class='grid-container'></div>`);
  var tileContainer = $(`<div class='tile-container'></div>`);

  board.append(gridContainer, tileContainer);
  return board;
};

Renderer.prototype.renderBoardAndAppendTo = function (target) {
  this.renderBoard().appendTo(target);
  return this;
};

module.exports = Renderer;
