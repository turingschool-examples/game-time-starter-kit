function Bullet(board) {
  this.board = board;
  this.x = this.board.players[0].x;
  this.y = this.board.players[0].y;
  this.board.bullets.push(this)
}

module.exports = Bullet;
