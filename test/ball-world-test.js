    const assert = require('chai').assert;
const Paddle = require('../lib/paddle')
const ball = require('../lib/ball');
const World = require('../lib/world');

describe('Ball in relation to world', function() {

  it.skip('should know about a world if it is passed in', function() {
    var world = new World
    var ball = new Ball({}, world)
    asert.equal(ball.world, world)
  })

  it.skip('should know about a world if it is generated using world.addBall()', function() {
    var world = new World
    var ball = new Ball({}, world)
    world.addBall(ball)
    assert.equal(ball.world, world)
  })

  describe('world in relation to ball', function() {
    it.skip('should have a method called addBall()', function() {
      var world = new World
      assert.isFunction(world.addBall)
    })

    it.skip('should know about the ball added to the world', function() {
      var world = new World
      var ball = new Ball({}, world)

      world.addBall(ball)
      assert.include(world.balls, ball)
    })

    it.skip('should have a method called launchBall()', function() {
      var world = new World
      assert.isFunction(world.launchBall)
    })

    it.skip('should launch the ball when launchBall() is called', function() {
      var world = new World
      var ball = new Ball({}, world)

      world.addBall(ball)
      world.launchBall();
      assert.equal(ball.x, 5)
    })
  })

})
