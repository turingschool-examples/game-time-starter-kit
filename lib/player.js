function Player(board, x) {
  this.board = board;
  this.x = x || this.board.width / 2;
  this.y = this.board.height - 10;
  this.board.players.push(this);
}

module.exports = Player;
