const $ = require('jquery');
const _ = require('lodash');

function Renderer(game) {
  this.game = game;
}

Renderer.prototype.addTilesTo = function (target) {
  var tiles = this.game.collectAllTiles();
  tiles.forEach( function (tile) {
    target.find('#' + tile.rowIndex() + '-' + tile.columnIndex())
      .addClass('tile-' + tile.value)
      .text(tile.value);
  });
  return this;
};

Renderer.prototype.clearAllTileClasses = function (target) {
  target.find('.cell-container').removeClass().addClass('cell-container');
  return this;
};

Renderer.prototype.clearAllValues = function (target) {
  target.find('.cell-container').empty();
  return this;
};

Renderer.prototype.addRandomTile = function () {
  this.game.board.addTile();
  return this;
};


module.exports = Renderer;
