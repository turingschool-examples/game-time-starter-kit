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
  var grid = new Grid(550);
  assert.equal(grid.width, 550);
});

it('should take the second argument and set it as the "height" property of the instantiated object', function() {
  var grid = new Grid(550, 550);
  assert.equal(grid.height, 550);
});

});
