const $ = require('jquery');
const _ = require('lodash');

function Renderer(board) {
  this.board = board;
}

Renderer.prototype.renderBoard = function () {
  var board = $(`<div class='board'></div>`);

  return board;
};

Renderer.prototype.renderBoardAndAppendTo = function (target) {
  this.renderBoard().appendTo(target);
  return this;
};

module.exports = Renderer;
