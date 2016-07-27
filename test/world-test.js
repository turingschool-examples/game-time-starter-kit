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

    it('should take take the first argument and set it as the "height" property', function() {
      var world = new World(100, 50);
      assert.equal(world.height, 100);
    });

    it('should take take the second argument and set it as the "width" property', function() {
      var world = new World(50, 200);
      assert.equal(world.width, 200);
    });

    it('should have a bricks property, which starts out as an empty array', function() {
      var world = new World(100, 100);
      assert.isArray(world.bricks);
      assert.deepEqual(world.bricks, []);
    });

  });
});
