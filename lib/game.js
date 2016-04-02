const Player = require("./player");
const KeyPressed = require("./keyPressed");

var Game = function(width, height){
  this.width = width;
  this.height = height;
  this.KeyPressed = KeyPressed;
  this.occupiedPositions = [];
  this.createPlayers();
  this.firstPlayer = new Player({game: this, controls: 'arrows'});
};

Game.prototype.createPlayers = function () {
  this.players = [];
  var playerOne = { game: this, controls: 'wasd',
                    x: Math.floor(this.width / 8),
                    y: Math.floor(this.height / 2) };
  var playerTwo = { game: this, controls: 'arrows',
                    x: Math.floor(this.width / 8) * 7,
                    y: Math.floor(this.height / 2) };

  this.players.push(new Player(playerOne));
  this.players.push(new Player(playerTwo));

  this.players[1].faceLeft();
};

// Game.prototype.logPosition = function(position){
//   this.occupiedPositions[position[0]] = this.occupiedPositions[position[0]] || [];
//   this.occupiedPositions[position[0]][position[1]] = true;
// };

function orientPlayers (players) {
  players.forEach(function(player) { player.orient(); });
}
function movePlayers (players) {
  players.forEach(function(player) { player.move(); });
}
Game.prototype.logPositions = function (players) {
  var self = this;
  players.forEach(function(player) {
    self.occupiedPositions[player.x] = self.occupiedPositions[player.y] || [];
    self.occupiedPositions[player.x][player.y] = true;
   });
};

Game.prototype.update = function () {
  orientPlayers(this.players);
  movePlayers(this.players);

  if (this.firstPlayer.died()) {
    console.log('collision!!! at '+ this.firstPlayer.position().toString());
  }

  this.logPositions(this.players);
};

module.exports = Game;
