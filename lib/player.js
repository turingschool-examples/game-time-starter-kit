function Player(board) {
  this.board = board;
  this.center = { x: this.board.width / 2, y: this.board.height - 10 };
  this.size = { x: 16, y: 16 };
  this.board.players.push(this);
}

Player.prototype.moveLeft = function() {
  this.center.x += -7;
}

Player.prototype.moveRight = function() {
  this.center.x += 7;
}

module.exports = Player;
