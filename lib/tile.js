function Tile (position, board) {
  this.board = board;
  this.value = 2;
  this.position = position;
}

Tile.prototype.checkPrecedingSpace = function () {
  var columnIndex = this.position[0];
  var rowIndex = this.position[1];
  return this.board.checkSpaceAt([columnIndex - 1, rowIndex]);
};

module.exports = Tile;
