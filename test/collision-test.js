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
      let world = new World(600, 150, surfer, rock);
      assert.isFunction(world.isCollision);
    });
    it('the game is over', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});
      let world = new World(600, 150, surfer, rock);

      surfer.x = 20;
      rock.x = 20;

      assert.equal(true, world.isCollision());
    });
  });
});


// if (i1 === true && i1 === true && i1 === true) {return true}
//
// function h2() {
//   if (i1 === true && i1 === true && i1 === true)
//   {return true}
// };
