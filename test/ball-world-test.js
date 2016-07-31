const assert = require('chai').assert;
const Paddle = require('../lib/paddle')
const Ball = require('../lib/ball');
const World = require('../lib/world');

describe('Ball in relation to world', function() {

  it('should know about a world if it is passed in', function() {
    let world = new World
    let ball = new Ball({}, world)
    assert.equal(ball.world, world)
  })

  it('should know about a world if it is generated using world.addBall()', function() {
    let world = new World
    let ball = new Ball({}, world)
    world.addBall(ball)
    assert.equal(ball.world, world)
  })

  describe('world in relation to ball', function() {
    it('should have a method called addBall()', function() {
      let world = new World
      assert.isFunction(world.addBall)
    })

    it('should know about the ball added to the world', function() {
      let world = new World
      let ball = new Ball({}, world)

      world.addBall(ball)
      assert.include(world.balls, ball)
    })

    // it.skip('should have a method called launchBall()', function() {
    //   let world = new World
    //   assert.isFunction(world.launchBall)
    // })
    //
    // it.skip('should launch the ball when launchBall() is called', function() {
    //   let world = new World
    //   let ball = new Ball({}, world)
    //
    //   world.addBall(ball)
    //   world.launchBall();
    //   assert.equal(ball.x, 5)
    // })
  })

})
