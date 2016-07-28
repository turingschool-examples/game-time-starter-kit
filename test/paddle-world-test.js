const assert = require('chai').assert;
const Paddle = require('../lib/paddle');
const World = require('../lib/world');

describe('Paddle in relation to world', function() {

  it('should know about a world if it is passed in', function (){
    var world = new World
    var paddle = new Paddle({}, world)
    assert.equal(paddle.world, world)
  })

  it('should know about a world if it is generated using world.addPaddle()', function () {
    var world = new World
    var paddle = new Paddle({}, world)
    world.addPaddle(paddle)
    assert.equal(paddle.world, world);
  })
})

describe('World in relation to paddle', function() {
  it('should have a method called addPaddle()', function () {
    var world = new World
    assert.isFunction(world.addPaddle)
  })

  it('should know about the paddle added to world', function () {
    var world = new World
    var paddle = new Paddle({}, world)

    world.addPaddle(paddle)
    assert.include(world.paddles, paddle)
  })

  it('should move the paddle right when rightArrowpressed() is called', function() {
    var world = new World
    var paddle = new Paddle
    world.addPaddle(paddle)

    world.rightArrowPressed();
    assert.equal(paddle.x, 410)
  })

  it('should move the paddle left when leftArrowpressed() is called', function() {
    var world = new World
    var paddle = new Paddle
    world.addPaddle(paddle)

    world.leftArrowPressed();
    assert.equal(paddle.x, 390)
  })

})
