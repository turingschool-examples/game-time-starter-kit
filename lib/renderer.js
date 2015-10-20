const $ = require('jquery');

function Renderer (board) {
  this.board = board; 
}

Renderer.prototype.renderBoard = function () {
  return $(`<div class='board'></div>`);
};

Renderer.prototype.renderBoardAndAppendTo = function (target) {
  this.renderBoard().appendTo(target);
  return this;
};

module.exports = Renderer;
