const Player = require("./player");
const KeyPressed = require("./keyPressed");

var Game = function(width, height){
  this.width = width;
  this.height = height;
  this.KeyPressed = KeyPressed;
  this.occupiedPositions = [];
  this.firstPlayer = new Player(this, {});
};

Game.prototype.logPosition = function(position){
  this.occupiedPositions[position[0]] = this.occupiedPositions[position[0]] || [];
  this.occupiedPositions[position[0]][position[1]] = true;
};

Game.prototype.update = function () {
  this.firstPlayer.orient();
  this.firstPlayer.move();
  if (this.firstPlayer.died()) {
    console.log('collision!!! at '+this.firstPlayer.position().toString());
  }
  this.logPosition(this.firstPlayer.position());
};

module.exports = Game;
