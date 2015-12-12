function Bullet(board) {
  this.board = board;
  this.center = {
                  x: this.board.players[0].center.x,
                  y: this.board.players[0].center.y - (this.board.players[0].size.height / 2) - 1
                };
  this.size = { width: 5, height: 5 };
  this.velocity = { y: -6 };
  this.active = true;
  this.board.bullets.push(this);
}

Bullet.prototype.moveUp = function() {
  this.center.y += this.velocity.y;
}

module.exports = Bullet;
