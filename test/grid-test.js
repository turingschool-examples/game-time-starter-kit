const assert = require('chai').assert;
const Grid = require('../lib/grid');

describe('Grid', function() {
  it('should be a function', function() {
    assert.isFunction(Grid);
  });

  it('should instantiate an object', function(){
    var grid = new Grid();
    assert.isObject(grid);
  });

  it('should take the first argument and set it as the "width" property of the instantiated object', function() {
    var grid = new Grid(500);
    assert.equal(grid.width, 500);
  });

  it('should take the second argument and set it as the "height" property of the instantiated object', function() {
    var grid = new Grid(500, 500);
    assert.equal(grid.height, 500);
  });

  it('should have a "lights" property, which starts out as an open array', function() {
    var grid = new Grid(500, 500);
    assert.isArray(grid.lights);
    assert.deepEqual(grid.lights, []);
  });

});
