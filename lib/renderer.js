const $ = require('jquery');
const _ = require('lodash');

function Renderer(game) {
  this.game = game;
}

/*
Renderer.prototype.renderTiles = function () {
  var board = $(`<div class='tile'></div>`);

  return board;
};
*/

Renderer.prototype.addTilesTo = function (target) {
  var tiles = this.game.collectAllTiles();
  tiles.forEach( function (tile) {
    target.find('#' + tile.rowIndex() + '-' + tile.columnIndex())
      .addClass('tile-' + tile.value)
      .text(tile.value);
  });
};

Renderer.prototype.renderBoardAndAppendTo = function (target) {

  this.renderTiles().appendTo(target);
  return this;
};

module.exports = Renderer;
