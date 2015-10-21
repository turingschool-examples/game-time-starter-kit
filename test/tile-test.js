const assert = require('assert');
const Tile = require('../lib/tile');
const Board = require('../lib/board');

describe('the tile', function () {
  it('should instantiate with a value of 2', function () {
    let tile = new Tile();

    assert.equal(tile.value, 2);
  });

  it('should accept position as an argument', function () {
    let tile = new Tile([1,3]);

    assert.deepEqual(tile.position, [1,3]);
  });

  it('should accept a board as an argument', function () {
    let board = new Board();
    let tile = new Tile('position', board);

    assert.equal(tile.board, board);
  });

});
