const _ = require('lodash');
const Tile = require('./tile');

function Board(game) {

  this.spaces = [[null, null, null, null],
                 [null, null, null, null],
                 [null, null, null, null],
                 [null, null, null, null]];

  this.game = game;

}

Board.prototype.freeSpaces = function () {
  var freeSpaces = [];

  this.spaces.forEach(function (row, rowIndex) {

    row.forEach(function (space, columnIndex) {
      if (space == null) {

        freeSpaces.push([columnIndex, rowIndex]);
      }
    });
  });
  return freeSpaces;
};

Board.prototype.addTile = function () {
  var tile = new Tile(null, this);
  var freeSpaces = this.freeSpaces();
  var randomFreeSpace = freeSpaces[Math.floor(Math.random() * freeSpaces.length)];
  tile.position = randomFreeSpace;
  this.insertTile(tile);
  return tile;
};

Board.prototype.insertTile = function (tile) {
  var columnIndex = tile.position[0];
  var rowIndex = tile.position[1];
  this.spaces[rowIndex][columnIndex] = tile;
};

Board.prototype.addTwoTiles = function () {
  this.addTile();
  this.addTile();
};

Board.prototype.insertTileAt = function (position, tile) {
  var columnIndex = position[0];
  var rowIndex = position[1];
  tile.position = position;
  this.spaces[columnIndex][rowIndex] = tile;
}

module.exports = Board;
