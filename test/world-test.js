const assert = require('chai').assert;
const world = require('../lib/world');

describe('world', function () {

  it('should default a default width', function() {
    assert.equal(world.width, 500);
  });

  it('should have a default height', function() {
    assert.equal(world.height, 500);
  });

});
//WHY?
//To test edge cases
//We want to make sure the app works as intended
//We want the tests drive our design

//WHAT?
//We want to test behavior
