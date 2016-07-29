// test/game-test.js //

const assert = require('chai').assert;
const Rock = require('../lib/rocks');
const Surfer = require('../lib/surfer');
const World = require('../lib/world');


describe('when surfing', function() {
  context('when surfer hits a rock', function() {
    it('should have a method called "isCollision()"', function() {
      let surfer = new Surfer({});
      let rock = new Rock({});
      let world = new World(600, 200, surfer, rock);
      assert.isFunction(world.isCollision);
    });
    it('should return collision on', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});
      let world = new World(600, 200, surfer, rock);

      surfer.x = 25;
      rock.x = 25;

      assert.equal(true, world.isCollision());
    });
  });
});
