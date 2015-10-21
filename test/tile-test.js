const assert = require('assert');
const Board = require('../lib/board');

describe('the tile', function () {
  it('should instantiate with a value of 2 or 4', function () {
    let tile = new Tile();

    assert.equal(tile.value, (2 || 4));
  });
});