const assert = require('chai').assert;
const Grid = require('../lib/grid');
const Light = require('../lib/light');
const validGames = require('../lib/validGames');

describe('Grid', function() {

  it('should create a function', function() {
    assert.isFunction(Grid);
  });

  it('should be an Object', function() {
    var grid = new Grid();
    assert.isObject(grid);
  });

  it('should pull in an array of winnable games', function () {
    var grid = new Grid();

    assert.deepEqual(grid.games.validGames);
  });

  it('should create a game for the first template', function (){
    var grid = new Grid(0);

    assert.deepEqual(grid.game.validGames);
    // assert.deepEqual(grid.game[0], validGames[0]);
    // assert.deepEqual(grid.game[1], validGames[1]);
  });

  it('should pull in a key that indicates where lights should go', function (){
    var grid = new Grid();

    var expected = {
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [0, 3],
      5: [0, 4],
      6: [1, 0],
      7: [1, 1],
      8: [1, 2],
      9: [1, 3],
      10: [1, 4],
      11: [2, 0],
      12: [2, 1],
      13: [2, 2],
      14: [2, 3],
      15: [2, 4],
      16: [3, 0],
      17: [3, 1],
      18: [3, 2],
      19: [3, 3],
      20: [3, 4],
      21: [4, 0],
      22: [4, 1],
      23: [4, 2],
      24: [4, 3],
      25: [4, 4]
    }

    assert.deepEqual(grid.key, expected);
    assert.deepEqual(grid.key[1], expected[1]);
    assert.deepEqual(grid.key[2], expected[2]);
  });
});
