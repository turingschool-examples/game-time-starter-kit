const Player = require("./player");
const KeyPressed = require("./keyPressed");
const Fruit = require("./fruit");
const Grid = require("./grid");

var Game = function(width, height){
  this.grid = new Grid(10, width, height);
  this.width = width;
  this.height = height;
  this.KeyPressed = KeyPressed;
  this.occupiedPositions = [];
  this.fruit = new Fruit(this);
  createPlayers(this);
};

Game.prototype.update = function () {
  this.grid.random();
  orientPlayers(this.players);
  movePlayers(this.players);
  checkScores(this.players);
  checkDeaths(this.players);
  logPositions(this, this.players);
};

function checkScores(players){
  players.forEach(function(player) {
    if (player.scored()) { player.game.fruit.reposition(); }
  });
}

function createPlayers (game) {
  game.players = [];
  var grid = 10;
  // var gridWidth = Math.floor(game.width / grid);
  // var gridHeight = Math.floor(game.height / grid);
  var playerOne = { game: game, controls: 'wasd', speed: grid,
                    x: game.grid.P1X(),
                    y: game.grid.middleY() };
  var playerTwo = { game: game, controls: 'arrows',speed: grid,
                    x: game.grid.P2X(),
                    y: game.grid.middleY() };
  // var playerOne = { game: game, controls: 'wasd', speed: grid,
  //                   x: grid * Math.floor(gridWidth / 8),
  //                   y: grid * Math.floor(gridHeight / 2) };
  // var playerTwo = { game: game, controls: 'arrows',speed: grid,
  //                   x: grid * Math.floor(gridWidth / 8) * 7,
  //                   y: grid * Math.floor(gridHeight / 2) };

                    // debugger
                    console.log(playerOne);
                    console.log(playerTwo);
  game.players.push(new Player(playerOne));
  game.players.push(new Player(playerTwo));

  game.players[1].faceLeft();
  // game.players[1].faceRight();
}

function orientPlayers (players) {
  players.forEach(function(player) { player.orient(); });
}

function movePlayers (players) {
  players.forEach(function(player) { player.move(); });
}

var logPositions = function (game, players) {
  players.forEach(function(player) {
    game.occupiedPositions[player.x] = game.occupiedPositions[player.x] || [];
    game.occupiedPositions[player.x][player.y] = true;
   });
};

function checkDeaths(players){
  players.forEach(function(player) {
    if (player.died()) {
      player.game.over = true;
      console.log('collision!!! at '+ player.position().toString()); }
  });
}

module.exports = Game;
