const assert = require('assert');
const Board = require('../lib/board');
const Game = require('../lib/game');

describe('the board', function () {
  it('should instantiate', function () {
    let board = new Board();

    assert(board);
  });

  it('should have a spaces property', function () {
    let board = new Board();

    assert(board.spaces)
  });

  it('spaces should be a four by four matrix', function () {
    let board = new Board();
    let spaces = board.spaces;
    let expected = [ [], [], [], [] ];

    assert.deepEqual(spaces, expected)
  });

  it('should accept a game as an argument', function () {
    let game = new Game();
    let board = new Board(game);

    assert.equal(board.game, game); 
  });
  
});
