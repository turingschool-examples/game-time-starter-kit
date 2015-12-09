function Player(board) {
  this.board = board;
  this.center = { x: this.board.width / 2, y: this.board.height - 10 };
  this.size = { x: 16, y: 16 };
  this.board.players.push(this);
}

module.exports = Player;
