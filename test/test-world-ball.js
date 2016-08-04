const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball');
const World = require('../lib/world');

describe('Objects in the world', function() {
  context('Ball in the relation to the world', function() {
    it('the ball should know about the world if it gets pased in', function() {
      var pickles = new World(500, 500);
      var ball = new Ball({world: pickles});
      assert.equal(ball.world, pickles);
    });
  });

  context('World in relation to the ball', function() {
    it('should create a new ball when a new world is created', function() {
      var world = new World(500, 500);
      assert.isObject(world.ball);
    });
    it('should create a new ball with default width', function(){
      var world = new World(500, 500);
      assert.equal(world.ball.width, 12);
    });
  });

  context('Ball bouncing in the world', function() {
    it('should bounce off the right wall in the world', function() {

    });
    it('should bounce off the left wall in the world', function() {

    });
    it ('should bounce off the ceiling in the world', function() {

    });
  });
});
