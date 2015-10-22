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

        freeSpaces.push([rowIndex, columnIndex]);
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
  var rowIndex = tile.position[0];
  var columnIndex = tile.position[1];
  this.spaces[rowIndex][columnIndex] = tile;
};

Board.prototype.addTwoTiles = function () {
  this.addTile();
  this.addTile();
};

Board.prototype.insertTileAt = function (position, tile) {
  var rowIndex = position[0];
  var columnIndex = position[1];
  tile.position = position;
  this.spaces[rowIndex][columnIndex] = tile;
};

Board.prototype.checkSpaceAt = function (position) {
  var positionValidity = this.isPositionValid(position);
  if ( positionValidity ) {
    var rowIndex = position[0];
    var columnIndex = position[1];
    return this.spaces[rowIndex][columnIndex];
  } else {
    return "No preceding space."
  }
};

Board.prototype.isPositionValid = function (position) {
  if ( this.isRowValid(position[0] ) && this.isColumnValid(position[1]) ) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.isRowValid = function (rowIndex) {
  var height = this.spaces.length;

  if ( (rowIndex >= 0) && (rowIndex < height) ) {
    return true;
  }  else {
    return false;
  }

};

Board.prototype.isColumnValid = function (columnIndex) {
  var width = this.spaces[0].length;

  if ( (columnIndex >= 0) && (columnIndex < width) ) {
    return true;
  }  else {
    return false;
  }

};

Board.prototype.shiftLeft = function () {
  this.spaces = this.spaces.map(function (row) {
    return row.sort();
  });
  this.updateTilePositions();
};

Board.prototype.updateTilePositions = function () {
  this.spaces.forEach( function (row, rowIndex) {
    row.forEach(function (space, columnIndex) {
      if (space instanceof Tile) {
        space.position = [rowIndex, columnIndex]
      }
    });
  });
};

module.exports = Board;
