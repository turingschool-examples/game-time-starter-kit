const Board = require('./board');

function Game () {
  this.score = 0;
  this.board = new Board(this);

  this.board.addTwoTiles();
}

Game.prototype.updateScore = function (points) {
  this.score += points;
};

module.exports = Game;
