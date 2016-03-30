var Player = require("./player");
var isColliding = require("./isColliding");

var Game = function(){
  this.firstPlayer = new Player({});
  this.occupiedPositions = [];
  this.travels = [];
};

Game.prototype.update = function () {
  this.firstPlayer.orient();
  this.firstPlayer.move();
  this.travels.push(this.firstPlayer.position())
  if (isColliding(this.firstPlayer, this.occupiedPositions)) {
    debugger
    console.log('collision!!!');
  } else {
    this.occupiedPositions[this.firstPlayer.x] = [];
    this.occupiedPositions[this.firstPlayer.x][this.firstPlayer.y] = true;
  }
};

module.exports = Game;
