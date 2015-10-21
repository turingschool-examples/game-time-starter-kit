const $ = require('jquery');
const _ = require('lodash');

function Renderer(board) {
  this.board = board;
}

Renderer.prototype.renderBoard = function () {
  var board = $(`<div class='board'></div>`);
  var gridContainer = $(`<div class='grid-container'></div>`);
  var tileContainer = $(`<div class='tile-container'></div>`);
  var rowContainer = $(`<div class='row-container'></div>`);
  var rowTwoContainer = $(`<div class='row-container'></div>`);
  var rowThreeContainer = $(`<div class='row-container'></div>`);
  var rowFourContainer = $(`<div class='row-container'></div>`);

  gridContainer.append(rowContainer);
  gridContainer.append(rowTwoContainer);
  gridContainer.append(rowThreeContainer);
  gridContainer.append(rowFourContainer);

  board.append(gridContainer, tileContainer);

  return board;
};

Renderer.prototype.renderBoardAndAppendTo = function (target) {
  this.renderBoard().appendTo(target);
  return this;
};

module.exports = Renderer;
