function Tile (position, board, value) {
  this.position = position;
  this.board = board;
  this.value = value;
}

Tile.prototype.checkPrecedingSpace = function () {
  var rowIndex = this.position[0];
  var columnIndex = this.position[1];
  return this.board.checkSpaceAt(rowIndex, columnIndex - 1);
};

Tile.prototype.rowIndex = function () {
  return this.position[0];
};

Tile.prototype.columnIndex = function () {
  return this.position[1];
};

module.exports = Tile;
