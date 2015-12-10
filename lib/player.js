const Board = require('./board');

function Player(board) {
  this.board = board;
  this.center = { x: this.board.width / 2, y: this.board.height - 10 };
  this.size = { width: 16, height: 16 };
  this.velocity = { left: -7, right: 7 };
  this.board.players.push(this);
}

Player.prototype.moveLeft = function() {
  this.center.x += this.velocity.left;
}

Player.prototype.moveRight = function() {
  this.center.x += this.velocity.right;
}

Player.prototype.range = function() {
  return {
    xmin: this.center.x - (this.size.width / 2),
    xmax: this.center.x + (this.size.width / 2),
    ymin: this.center.y - (this.size.height / 2),
    ymax: this.center.y + (this.size.height / 2)
 }
};

module.exports = Player;
