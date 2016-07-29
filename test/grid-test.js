const assert = require('chai').assert;
const Grid = require('../lib/grid');
const Light = require('../lib/light')

describe('Grid', function() {
  // it('should be a function', function() {
  //   assert.isFunction(Grid);
  // });
  //
  // it('should instantiate an object', function(){
  //   var grid = new Grid();
  //   assert.isObject(grid);
  // });
  //
  // it('should take the first property of the object and set it as the "rows" property', function() {
  //   var grid = new Grid(5);
  //   assert.equal(grid.rows, 5);
  // });
  //
  // it('should take the second property of the object and set it as the "columns" property', function() {
  //   var grid = new Grid(5, 5);
  //   assert.equal(grid.columns, 5);
  // });

  it('should create a game template', function (){
    var grid = new Grid(0)

    var expected = [
      ["on", "off", "on"],
      ["on", "off", "off"]
    ]

    assert.deepEqual(grid.game, expected)
    assert.deepEqual(grid.game[0], expected[0])
    assert.deepEqual(grid.game[1], expected[1])
  })

  it('should add lights to game template', function (){
    var grid = new Grid(0)

    var expected = [
      ["on", "off", "on"],
      ["on", "off", "off"]
    ]

    assert.deepEqual(grid.game, expected)

    grid.createGame()

    assert.equal(grid.game[0][0].state, true)
    assert.equal(grid.game[0][1].state, false)

    assert.equal(grid.game[1][0].state, true)
    assert.equal(grid.game[1][2].state, false)
  })
  // it('should take the first argument and set it as the "width" property of the instantiated object', function() {
  //   var grid = new Grid(500);
  //   assert.equal(grid.width, 500);
  // });
  //
  // it('should take the second argument and set it as the "height" property of the instantiated object', function() {
  //   var grid = new Grid(500, 500);
  //   assert.equal(grid.height, 500);
  // });
  //
  // it('should have a "lights" property, which starts out as an open array', function() {
  //   var grid = new Grid(500, 500);
  //   assert.isArray(grid.lights);
  //   assert.deepEqual(grid.lights, []);
  // });

});
