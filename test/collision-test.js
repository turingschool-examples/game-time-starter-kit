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
      let surfer = new Surfer({ x: 20, right: 25, bottom: 190 });
      let rock = new Rock({ x: 25, right: 50, top: 165 });
      let collision = new Collision(surfer);

      assert.equal(true, collision.frontsTouching(rock));
    });

    it('returns false if surfers front collides with rocks front', function(){
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

    it('returns false if surfers back collides with rocks back', function(){
      let surfer = new Surfer({ x: 20, right: 70, bottom: 190 });
      let rock = new Rock({ x: 25, right: 50, top: 165 });
      let collision = new Collision(surfer);

      assert.equal(false, collision.backsTouching(rock));
    });

    it('returns true if surfers bottom collides with rocks top', function(){
      let surfer = new Surfer({ x: 20, right: 70, bottom: 190 });
      let rock = new Rock({ x: 25, right: 50, top: 165 });
      let collision = new Collision(surfer);

      assert.equal(true, collision.surferBottomTouchingObstacleTop(rock));
    });

    it('returns false if surfers bottom collides with rocks top', function(){
      let surfer = new Surfer({ x: 20, right: 70, bottom: 190 });
      let rock = new Rock({ x: 25, right: 50, top: 165 });
      let collision = new Collision(surfer);

      assert.equal(false, collision.surferBottomTouchingObstacleTop(rock));
    });

    it('registers collision if the surfer collides with an obstacle', function(){
      let surfer = new Surfer({ x: 20, right: 70, bottom: 190 });
      let rock = new Rock({ x: 25, right: 50, top: 165 });
      let collision = new Collision(surfer);

      assert.equal(true, collision.isCollision(rock));
    });



    it('registers collision if the surfer does collide with an obstacle', function(){
      let surfer = new Surfer({ x: 20, right: 70, bottom: 190 });
      let rock = new Rock({ x: 75, right: 140, top: 165 });
      let collision = new Collision(surfer);

      assert.equal(false, collision.isCollision(rock));
    });

    it('registers collisions for multiple obstacles', function(){
      var rocks = [
        new Rock({x: 125}),
        new Rock({x: 250}),
        new Rock({x: 500})
      ];
      let surfer = new Surfer({ x: 20, right: 70, bottom: 190 });
      let collision = new Collision(surfer);

      assert.equal(true, collision.checkForCollision(rocks));
      // new location for surfer and new assert for each rock location
    });
  });
});
