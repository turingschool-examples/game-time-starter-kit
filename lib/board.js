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

Board.prototype.checkSpaceAt = function (rowIndex, columnIndex) {
  var positionValidity = this.isPositionValid(rowIndex, columnIndex);
  if ( positionValidity ) {
    return this.spaces[rowIndex][columnIndex];
  } else {
    return "No space found."
  }
};

Board.prototype.isPositionValid = function (rowIndex, columnIndex) {
  if ( this.isRowValid(rowIndex) && this.isColumnValid(columnIndex) ) {
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

Board.prototype.moveLeft = function() {
  this.shiftLeft();
  this.collapse();
  this.shiftLeft();
};

Board.prototype.collapse = function () {
  var self = this;

  var newSpaces = this.spaces.map( function (row, rowIndex) {
    if (row[0] == null) {
      return row;
    } else {
      var newRow = row.map(function (space, columnIndex) {
        if ( space == null ) {
          return space;
        } else if ( self.checkSpaceAt(rowIndex, columnIndex + 1) == null ) {
          return space;
        } else if ( self.checkSpaceAt(rowIndex, columnIndex + 1) == "No space found." ) {
          return space;
        } else if ( space.value == self.checkSpaceAt(rowIndex, columnIndex + 1).value ) {
          space.value *= 2;
          self.spaces[rowIndex][columnIndex + 1] = null;
          return space;
        } else { 
          return space;
        }
      });
      return newRow;
    }
  });
};

module.exports = Board;
