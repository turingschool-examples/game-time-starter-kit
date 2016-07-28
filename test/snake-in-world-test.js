const assert = require('chai').assert;
const Snake = require('../lib/snake');
const World = require('../lib/world');


describe('Snake in relation to world', function() {

  it('should know about the world if it is passed in', function () {
    var world = new World();
    var snake = new Snake(250,250,10,10,world);
    assert.equal(snake.world, world);
  });
});

describe('World in relation to snake', function() {
  it('should have a default snake', function () {
    var snake = new Snake(250,250,10,10);
    var world = new World(null, null, snake);
    assert.equal(world.snake, snake);
  });
});
