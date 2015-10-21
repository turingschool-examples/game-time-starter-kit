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

Renderer.prototype.drawGrid = function () {
  var canvas = $("#grid");
  var context = canvas.getContext('2d');
  context.fillStyle = '#bbada0';
};

module.exports = Renderer;
