const Player = require('./player');

function Board(width, height) {
  this.width = width || 1250;
  this.height = height || 600;
  this.meteors = [];
  this.players = [];
}

Board.prototype.addPlayer = function () {
  return new Player(this);
};

module.exports = Board;
