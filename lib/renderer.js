const $ = require('jquery');
const _ = require('lodash');

function Renderer(board) {
  this.board = board;
}

Renderer.prototype.renderTiles = function () {
  var board = $(`<div class='tile'></div>`);

  return board;
};

Renderer.prototype.renderBoardAndAppendTo = function (target) {
  this.renderTiles().appendTo(target);
  return this;
};

module.exports = Renderer;
