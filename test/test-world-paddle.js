const chai = require('chai');
const assert = chai.assert;
const Paddle = require('../lib/paddle');
const World = require('../lib/world');

describe('paddle to world', function() {
  it('should stop moving right when it reaches the width of the world', function() {
    var world = new World(500, 500);
    var paddle = new Paddle({ x: 400});
    if ((paddle.x + paddle.width) < this.width) {
      paddle.moveRight();
    }
    assert.equal(paddle.x, 400);
  });
  it ('should stop moving left when it reaches the left wall of the world', function() {
    var world = new World(800, 500);
    var paddle = new Paddle({ x: 30});
    if (paddle.x > 0) {
      paddle.moveLeft();
    }
    if (paddle.x > 0) {
      paddle.moveLeft();
    }
    assert.equal(paddle.x, 0);
  });
});
