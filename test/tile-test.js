const assert = require('assert');
const Tile = require('../lib/tile');
const Board = require('../lib/board');

describe('the tile', function () {

  it('should accept position as an argument', function () {
    let tile = new Tile([1,3]);

    assert.deepEqual(tile.position, [1,3]);
  });

  it('should accept a board as an argument', function () {
    let board = new Board();
    let tile = new Tile('position', board);

    assert.equal(tile.board, board);
  });

  it('should accept a value as an argument', function () {
    let board = new Board();
    let tile = new Tile('position', board, 4);

    assert.equal(tile.value, 4);
  });

  describe('checkPrecedingSpace', function () {
    it('should return no preceding space if tile is adjacent to left edge', function () {
      let board = new Board();
      let tile = new Tile(null, board);
      board.insertTileAt([0, 0], tile);
      let precedingSpace = tile.checkPrecedingSpace();

      assert.equal(precedingSpace, "No space found.");
    });

    it('should return preceding element if tile is not adjacent to left edge', function () {
      let board = new Board();
      let tile = new Tile(null, board);
      board.insertTileAt([0, 1], tile);
      let precedingSpace = tile.checkPrecedingSpace();

      assert.equal(precedingSpace, null);
    });
  });

});
