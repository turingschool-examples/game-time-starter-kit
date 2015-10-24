const assert = require('assert');
const Game = require('../lib/game');
const Board = require('../lib/board');

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
});
