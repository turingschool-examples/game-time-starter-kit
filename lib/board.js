const Tile = require('./tile');
const _ = require('lodash');

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
  if (positionValidity) {
    return this.spaces[rowIndex][columnIndex];
  } else {
    return "No space found."
  }
};

Board.prototype.isPositionValid = function (rowIndex, columnIndex) {
  if (this.isRowValid(rowIndex) && this.isColumnValid(columnIndex)) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.isRowValid = function (rowIndex) {
  var height = this.spaces.length;

  if ((rowIndex >= 0) && (rowIndex < height)) {
    return true;
  } else {
    return false;
  }

};

Board.prototype.isColumnValid = function (columnIndex) {
  var width = this.spaces[0].length;

  if ((columnIndex >= 0) && (columnIndex < width)) {
    return true;
  } else {
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
  this.spaces.forEach(function (row, rowIndex) {
    row.forEach(function (space, columnIndex) {
      if (space instanceof Tile) {
        space.position = [rowIndex, columnIndex]
      }
    });
  });
};

Board.prototype.moveLeft = function () {
  this.shiftLeft();
  this.collapse();
  this.shiftLeft();
};

Board.prototype.moveDown = function () {
  this.spaces = this.transpose(this.spaces);
  this.spaces = this.spaces.map( function (row) {
    return row.reverse();
  });
  this.moveLeft();

  this.updateTilePositions();
};

Board.prototype.collapse = function () {
  var self = this;

  this.spaces.map(function (row, rowIndex) {
    if (row[0] == null) {
      return row;
    } else {
      row.map(function (space, columnIndex) {
        if (space == null) {
          return space;
        } else if (self.checkSpaceAt(rowIndex, columnIndex + 1) == null) {
          return space;
        } else if (self.checkSpaceAt(rowIndex, columnIndex + 1) == "No space found.") {
          return space;
        } else if (space.value == self.checkSpaceAt(rowIndex, columnIndex + 1).value) {
          space.value *= 2;
          self.spaces[rowIndex][columnIndex + 1] = null;
          return space;
        } else {
          return space;
        }
      });
    }
  });
};

Board.prototype.transpose = function (spaces) {

  // Calculate the width and height of the Array
  var w = spaces.length ? spaces.length : 0,
    h = spaces[0] instanceof Array ? spaces[0].length : 0;

  // In case it is a zero matrix, no transpose routine needed.
  if (h === 0 || w === 0) {
    return [];
  }

  var i, j, transposedData = [];

  // Loop through every item in the outer array (height)
  for (i = 0; i < h; i++) {
    // Insert a new row (array)
    transposedData[i] = [];

    // Loop through every item per item in outer array (width)
    for (j = 0; j < w; j++) {
      // Save transposed data.
      transposedData[i][j] = spaces[j][i];
    }
  }

  return transposedData;
};

module.exports = Board;
