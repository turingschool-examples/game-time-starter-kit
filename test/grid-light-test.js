const assert = require('chai').assert;
const Grid = require('../lib/grid');
const Light = require('../lib/light');


describe('Grid in relation to the Light', function() {

  it('should have a method called addLight()', function() {
    var grid = new Grid();
    assert.isFunction(grid.addLight);
  })

  it('should know about the states of the lights added to the grid', function () {
    var grid = new Grid();
    var onLight = new Light(true);
    var offLight = new Light(false);

    assert.isObject(grid.addLight(true));
    assert.equal(grid.addLight(true).state, true);
    assert.equal(grid.addLight(true).state, onLight.state);
    assert.equal(grid.addLight(false).state, false);
    assert.equal(grid.addLight(false).state, offLight.state);
  });

  it('should have a function that creates a new game')

});
