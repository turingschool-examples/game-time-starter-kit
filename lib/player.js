const Board = require('./board');

function Player(board) {
  this.board = board;
  this.center = { x: this.board.width / 2, y: this.board.height - 10 };
  this.size = { width: 16, height: 16 };
  this.impactCoordinates = {
                            xmin: this.center.x - (this.size.width / 2),
                            xmax: this.center.x + (this.size.width / 2),
                            y: this.center.y - (this.size.height / 2)
                           };
  this.board.players.push(this);
}

Player.prototype.moveLeft = function() {
  this.center.x += -7;
  this.board.checkCollision();
}

Player.prototype.moveRight = function() {
  this.center.x += 7;
  this.board.checkCollision();
}

module.exports = Player;
