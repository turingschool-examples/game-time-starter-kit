function Board(game) {
  this.spaces = [[null, null, null, null],
                 [null, null, null, null],
                 [null, null, null, null],
                 [null, null, null, null]];

  this.game = game;
}

Board.prototype.freeSpaces = function () {
  var spaces = this.spaces;
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

module.exports = Board;
