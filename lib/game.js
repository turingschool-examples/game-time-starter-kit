const Board = require('./board');
const _ = require('lodash');

function Game () {
  this.score = 0;
  this.board = new Board(this);

  this.board.addTwoTiles();
}

Game.prototype.updateScore = function (points) {
  this.score += points;
};

Game.prototype.isGameWon = function () {
  var tiles = this.collectAllTiles();
  var has2048 =  _.find(tiles, function (tile) {
    return tile.value == 2048;
  });

  return has2048 ? true : false;
};

Game.prototype.isGameOver = function () {
  return this.noPossibleCombinations() && this.board.freeSpaces().length == 0;
};

Game.prototype.noPossibleCombinations = function () {

  return this.checkLeftForCombinations() &&
         this.checkRightForCombinations() &&
         this.checkUpForCombinations() &&
         this.checkDownForCombinations();
};

Game.prototype.checkLeftForCombinations = function () {
  var currentScore = this.score;
  var currentBoard = this.board.spaces;

  this.board.moveLeft();

  var newScore = this.score;
  this.score = currentScore;
  this.board.spaces = currentBoard;
  return newScore == currentScore;
};

Game.prototype.checkRightForCombinations = function () {
  var currentScore = this.score;
  var currentBoard = this.board.spaces;

  this.board.moveRight();

  var newScore = this.score;
  this.score = currentScore;
  this.board.spaces = currentBoard;
  return newScore == currentScore;
};

Game.prototype.checkUpForCombinations = function () {
  var currentScore = this.score;
  var currentBoard = this.board.spaces;

  this.board.moveUp();

  var newScore = this.score;
  this.score = currentScore;
  this.board.spaces = currentBoard;
  return newScore == currentScore;
};

Game.prototype.checkDownForCombinations = function () {
  var currentScore = this.score;
  var currentBoard = this.board.spaces;

  this.board.moveDown();

  var newScore = this.score;
  this.score = currentScore;
  this.board.spaces = currentBoard;
  return newScore == currentScore;
};

Game.prototype.collectAllTiles = function () {
  var tiles = _.flatten(this.board.spaces);

  tiles = _.filter(tiles, function (tile) {
    return tile != null;
  });

  return tiles;
};

module.exports = Game;
