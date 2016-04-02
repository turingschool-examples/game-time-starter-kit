const Player = require("./player");
const KeyPressed = require("./keyPressed");

var Game = function(width, height){
  this.width = width;
  this.height = height;
  this.KeyPressed = KeyPressed;
  this.occupiedPositions = [];
  this.createPlayers();
  this.firstPlayer = new Player(this, {});
};

Game.prototype.createPlayers = function () {
  this.players = [];

  var playerOne = {x: Math.floor(this.width / 8),     y: Math.floor(this.height / 2)};
  var playerTwo = {x: Math.floor(this.width / 8) * 7, y: Math.floor(this.height / 2)};
  this.players.push(new Player(this, playerOne));
  this.players.push(new Player(this, playerTwo));
};

Game.prototype.logPosition = function(position){
  this.occupiedPositions[position[0]] = this.occupiedPositions[position[0]] || [];
  this.occupiedPositions[position[0]][position[1]] = true;
};

function movePlayers (players) {
  players.forEach(function(player) { player.move(); });
}

Game.prototype.update = function () {
  movePlayers(this.players);

  var self = this;
  // this.players.forEach(function(player) { player.move(); });
  this.players.forEach(function(player) { self.logPosition(player.position()); });
  this.firstPlayer.orient();
  this.firstPlayer.move();
  if (this.firstPlayer.died()) {
    console.log('collision!!! at '+this.firstPlayer.position().toString());
  }
  this.logPosition(this.firstPlayer.position());
};

module.exports = Game;
