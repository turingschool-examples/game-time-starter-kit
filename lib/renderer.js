const $ = require('jquery');

function Renderer (board) {
  this.board = board;
}

Renderer.prototype.renderBoard = function () {
  return $(`<div class='board'><canvas id='grid' width='500' height='500'></canvas></div>`);
};

Renderer.prototype.renderBoardAndAppendTo = function (target) {
  this.renderBoard().appendTo(target);
  return this;
};

module.exports = Renderer;
