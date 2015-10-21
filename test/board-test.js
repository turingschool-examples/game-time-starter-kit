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
    let expected = [[null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]];

    assert.deepEqual(spaces, expected)
  });

  it('should accept a game as an argument', function () {
    let game = new Game();
    let board = new Board(game);

    assert.equal(board.game, game);
  });

  describe('freeSpaces', function () {

    it('should return an array of positions of available spaces', function () {
      let board = new Board('game');
      let freeSpaces = board.freeSpaces();

      // [ columnIndex, rowIndex ]
      let expected = [ [0, 0], [1, 0], [2, 0], [3, 0],
                       [0, 1], [1, 1], [2, 1], [3, 1],
                       [0, 2], [1, 2], [2, 2], [3, 2],
                       [0, 3], [1, 3], [2, 3], [3, 3] ];

      assert.deepEqual(freeSpaces, expected);

    });

  });
});
