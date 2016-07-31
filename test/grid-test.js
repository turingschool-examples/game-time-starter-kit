const assert = require('chai').assert;
const Grid = require('../lib/grid');
const Light = require('../lib/light')

describe('Grid', function() {

  it('should create a function', function() {
    assert.isFunction(Grid);
  });

  it('should be an Object', function() {
    var grid = new Grid();
    assert.isObject(grid);
  });

  it('should pull in an array of winnable games', function (){
    var grid = new Grid();

    var expected = [
      [
        ["on", "off", "on"],
        ["on", "off", "off"]
      ],
      [
        ["on", "off", "on"],
        ["on", "on", "off"]
      ]
    ];

    assert.deepEqual(grid.games, expected);
  });

  it('should create a game for the first template', function (){
    var grid = new Grid(0);

    var expected = [
      ["on", "off", "on"],
      ["on", "off", "off"]
    ];

    assert.deepEqual(grid.game, expected);
    assert.deepEqual(grid.game[0], expected[0]);
    assert.deepEqual(grid.game[1], expected[1]);
  });

  it('should pull in a key that indicates where lights should go', function (){
    var grid = new Grid();

    var expected = {
      1: [0, 0],
      2: [0, 1]
    }

    assert.deepEqual(grid.key, expected);
    assert.deepEqual(grid.key[1], expected[1]);
    assert.deepEqual(grid.key[2], expected[2]);
  });
});
