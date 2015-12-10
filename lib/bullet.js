function Bullet(board) {
  this.board = board;
  this.center = {
                  x: this.board.players[0].center.x,
                  y: this.board.players[0].center.y
                };
  this.size = { width: 5, height: 5 };
  this.velocity = { y: -6 };
  this.impactCoordinates = {
                             xmin: this.center.x - (this.size.width / 2),
                             xmax: this.center.x + (this.size.width / 2),
                             y: this.center.y - (this.size.height / 2)
                           };

  this.board.bullets.push(this);
}

Bullet.prototype.moveUp = function() {
  this.center.y += this.velocity.y;
}

module.exports = Bullet;
