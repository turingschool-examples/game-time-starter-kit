var Player = require("./player");

var Game = function(){
  this.firstPlayer = new Player(50, 50, 10, 10);
};

Game.prototype.update = function () {
  this.firstPlayer.move();
};

module.exports = Game;
