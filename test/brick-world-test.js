const assert = require('chia').assert;
const Paddle = require('../lib/paddle');
const World = require('../lib/world');
const Ball = require('../lib/ball');

describe('Brick in relation to world', function() {

  it('should know about a world if it is passed in', function () {
    var world = new World
    var brick = new Brick({}, world)
    assert.equal(brick.world, world)
  })

  it('should know about a world if it is generated using world.addBrick()', function () {
    var world = new World
    var brick = new Brick({}, world)
    world.addBrick(brick)
    assert.equal(paddle.world, world);
  })
})

decribe('World in relation to paddle', function () {
    it('should have a method called addBrick()', function () {
      var world = new World
      assert.isFunction(world.addBrick)
    })

    it('should know about the brick added to world', function () {
      var world = new World
      var brick = new Brick({}, world)

      world.addBrick(brick)
      assert.include(world.brick, brick)
    })
})
