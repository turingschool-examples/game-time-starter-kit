const assert = require('chai').assert;

const World = require('./../lib/world');

describe('World', function() {
  context('World contains the basics', function() {

    it('world is an object', function() {
      var world = new World;
      assert.equal(typeof world, "object");
    })

    it('world has a paddle', function() {
      const world = new World;
      assert.equal(typeof world.paddle, "object")
    })

  });
});
