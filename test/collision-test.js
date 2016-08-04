const assert = require('chai').assert;
const Rock = require('../lib/rocks');
const Surfer = require('../lib/surfer');
const Collision = require('../lib/collision');

describe('Collision', function() {
  context('Function', function() {
    it('should have a method called "isCollision()"', function() {
      let surfer = new Surfer({});
      let collision = new Collision(surfer);

      assert.isFunction(collision.isCollision);
      assert.equal(collision.surfer, surfer);
    });
  });

  context('when surfer hits a rock', function() {

    it('returns true if surfers front collides with rocks front', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});
      let collision = new Collision(surfer);

      surfer.right = 25;
      rock.x = 24;

      assert.equal(true, collision.frontsTouching(rock));
    });

    it('returns false if surfers front is not yet touching rocks front', function(){
      let surfer = new Surfer({ x: 20, right: 70, bottom: 190 });
      let rock = new Rock({ x: 25, right: 50, top: 165 });
      let collision = new Collision(surfer);

      assert.equal(false, collision.frontsTouching(rock));
    });

    it('returns true if surfers back collides with rocks back', function(){
      let surfer = new Surfer({ x: 20, right: 70, bottom: 190 });
      let rock = new Rock({ x: 25, right: 50, top: 165 });
      let collision = new Collision(surfer);

      assert.equal(true, collision.backsTouching(rock));
    });

    it('returns false if surfers back is past rocks back', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});
      let collision = new Collision(surfer);

      rock.right = 25;
      surfer.x = 26;

      assert.equal(false, collision.backsTouching(rock));
    });

    it('returns true if surfers bottom collides with rocks top', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});
      let collision = new Collision(surfer);

      surfer.bottom = 190;
      rock.top = 165;

      assert.equal(true, collision.surferBottomTouchingObstacleTop(rock));
    });

    it('returns false if surfers bottom is above rocks top', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});
      let collision = new Collision(surfer);

      surfer.bottom = 100;
      rock.top = 150;

      assert.equal(false, collision.surferBottomTouchingObstacleTop(rock));
    });

    it('registers collision if the surfer collides with an obstacle', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});
      let collision = new Collision(surfer);

      surfer.right = 25;
      rock.x = 24;

      assert.equal(true, collision.isCollision(rock));
    });



    it('registers collision if the surfer does not collide with an obstacle', function(){
      let surfer = new Surfer({ x: 20, right: 70, bottom: 190 });
      let rock = new Rock({ x: 75, right: 140, top: 165 });
      let collision = new Collision(surfer);

      surfer.right = 25;
      rock.x = 26;

      assert.equal(false, collision.isCollision(rock));
    });

  });
});
