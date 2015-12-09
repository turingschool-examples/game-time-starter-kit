function Bullet(board) {
  this.board = board;
  this.size = { x: 5, y: 5 };
  this.center = { x: this.board.players[0].center.x, y: this.board.players[0].center.y };
  this.board.bullets.push(this);
}

module.exports = Bullet;
