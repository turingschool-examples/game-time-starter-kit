const Player = require('./player');
const Meteor = require('./meteor');
function Board(width, height) {
  this.width = width || 1250;
  this.height = height || 600;
  this.meteors = [];
  this.players = [];
}

Board.prototype.addPlayer = function() {
  return new Player(this);
};

Board.prototype.addMeteor = function() {
  return new Meteor(this);
}

module.exports = Board;
