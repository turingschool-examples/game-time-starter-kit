function Player(board) {
  this.board = board;
  this.center = { x: this.board.width / 2, y: this.board.height - 10 };
  this.size = { width: 16, height: 16 };
  this.impactArea =
  this.board.players.push(this);
}

Player.prototype.moveLeft = function() {
  this.center.x += -7;
}

Player.prototype.moveRight = function() {
  this.center.x += 7;
}

module.exports = Player;
