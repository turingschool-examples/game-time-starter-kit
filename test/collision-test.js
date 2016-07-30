// test/game-test.js //

const assert = require('chai').assert;
const Rock = require('../lib/rocks');
const Surfer = require('../lib/surfer');
const World = require('../lib/world');
const Collision = require('../lib/collision');
const Game = require('../lib/game');


describe('Collision', function() {
  context('Function', function() {
    it('should have a method called "isCollision()"', function() {
      let surfer = new Surfer({});
      let rock = new Rock({});
      let collision = new Collision(rock, surfer);

      assert.isFunction(collision.isCollision);
    });
  });

  context('when surfer hits a rock', function() {
    it('should register collision on frontsTouching', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});

      surfer.right = 25;
      rock.x = 24;
      var frontsTouching = rock.x < surfer.right;

      assert.equal(true, frontsTouching);
    });

    it('should register collision on backsTouching', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});

      surfer.x = 25;
      rock.right = 24;
      var backsTouching = rock.right < surfer.x;

      assert.equal(true, backsTouching);
    });

    it('should register collision on surferBottomTouchingRockTop', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});

      surfer.bottom = 25;
      rock.y = 24;
      var surferBottomTouchingObstacleTop = rock.y < surfer.bottom;

      assert.equal(true, surferBottomTouchingObstacleTop);
    });

    it('should run function for each instance of rock', function(){
      let surfer = new Surfer({});
      var rocks = [
      new Rock({x: 25}),
      new Rock({x: 250}),
      new Rock({x: 500})
    ];
      let collision = new Collision();
      surfer.right = 26;

      assert.equal(true, collision.checkRocks(rocks));
    });
  });
});
