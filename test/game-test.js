const assert = require('assert');
const Game = require('../lib/game');
const Board = require('../lib/board');
const Tile = require('../lib/tile');

describe('Game', function () {
  it('should have a score property', function () {
    let game = new Game(); 

    assert.equal(game.score, 0);
  });

  it('should have a board', function () {
    let game = new Game();

    assert(game.board);
  });

  it('should instantiate with a Board with two random tiles filled', function () {
    let game = new Game();

    assert.equal(game.board.freeSpaces().length, 14);
  });

  describe('updateScore', function () {
    it('should update the score', function () {
      let game = new Game();
      game.updateScore('4');

      assert.equal(game.score, 4); 
    });
  });

  describe('gameOver', function () {
    it('should return true if no moves are possible', function () {
      let game = new Game();
      let board = game.board;

      let tile1 = new Tile('position', board, 2);
      let tile2 = new Tile('position', board, 4);
      let tile3 = new Tile('position', board, 8);
      let tile4 = new Tile('position', board, 16);

      board.spaces = [[tile1, tile2, tile3, tile4],
                      [tile4, tile3, tile2, tile1],
                      [tile1, tile2, tile3, tile4],
                      [tile4, tile3, tile2, tile1]];

      assert(game.isGameOver());
    });
  });

  describe('isGameWon', function () {
    it('should return true if a tile has the value 2048', function () {
      let game = new Game();
      let board = game.board;

      let tile1 = new Tile('position', board, 2048);
      board.insertTileAt([3, 3], tile1);

      assert(game.isGameWon());
    });

    it('should return false if no tile has the value 2048', function () {
      let game = new Game();

      assert(!game.isGameWon());
    });
  });
});
