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
    if (isColliding(this.firstPlayer, this.occupiedPositions)) {
      console.log('collision!!! at '+this.firstPlayer.position().toString());
    } else {
      this.occupiedPositions[this.firstPlayer.x] = this.occupiedPositions[this.firstPlayer.x] || [];
      this.occupiedPositions[this.firstPlayer.x][this.firstPlayer.y] = true;
    }
};

module.exports = Game;
