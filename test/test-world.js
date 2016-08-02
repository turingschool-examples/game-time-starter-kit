const assert = require('chai').assert;
const World = require('../lib/world');
const Paddle = require('../lib/paddle');
const Ball = require('../lib/ball');

describe('World', function() {
  it('should be a function', function() {
    assert.isFunction(World);
  });

  it('should instanitate an object', function() {
    var world = new World();
    assert.isObject(world);
  });

  it('should take the first argument as the "width" of the instantiated world', function() {
    var world = new World(50, 250);
    assert.equal(world.width, 50);
  });

  it('should take the second argument as the "height" of the instantiated world', function() {
    var world = new World(50, 250);
    assert.equal(world.height, 250);
  });

  it('should have a "court" array which starts out as an empty array', function() {
    var world = new World(50, 250);
    assert.deepEqual(world.court, []);
  });

  it('should have a "paddle" object', function() {
    var paddle = new Paddle({});
    var ball = new Ball({});
    var world = new World(500, 500, paddle, ball);
    assert.isObject(world.paddle);
  });

  it('should have a "ball" object', function() {
    var paddle = new Paddle({});
    var ball = new Ball({});
    var world = new World(500, 500, paddle, ball);
    assert.isObject(world.ball);
  });
});
