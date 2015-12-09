function Bullet(board) {
  this.board = board;
  this.size = { x: 5, y: 5 };
  this.center = {
                  x: this.board.players[0].center.x,
                  y: this.board.players[0].center.y
                };
  this.velocity = { y: -6 };
  this.board.bullets.push(this);
}

Bullet.prototype.moveUp = function() {
  this.center.y += this.velocity.y
}

module.exports = Bullet;
