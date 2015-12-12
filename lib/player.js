function Player(board) {
  this.board = board;
  this.center = { x: this.board.width / 2, y: this.board.height - 10 };
  this.size = { width: 16, height: 16 };
  this.velocity = { left: -7, right: 7 };
  this.active = true;
  this.board.players.push(this);
}

Player.prototype.moveLeft = function() {
  this.center.x += this.velocity.left;
}

Player.prototype.moveRight = function() {
  this.center.x += this.velocity.right;
}

module.exports = Player;
