const assert = require('assert');
const Board = require('../lib/board');

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
  
});
