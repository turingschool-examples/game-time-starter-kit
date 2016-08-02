const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const World = require('../lib/paddle');

describe('Ball to Paddle', function() {
  context('Test how the ball reacts to impacts with the paddle', function() {
    it('should detect a collision when the ball touches the paddle', function() {
      var ball = new Ball({ x: 450, y: 500});
      var paddle = new Paddle({ x: 430, y: 510});
      assert.isTrue(ball.isCollidingWith(paddle));
    });
    it('should send the ball to the left at a 45 deg angle when the ball collides with the left-most zone of the paddle', function() {
      var ball = new Ball ({x: 0, y: 500});
      var paddle = new Paddle ({x: 0, y: 510});
      if (ball.isBallCollidingWith(paddle)) {
        ball.left45();
      assert.equal(ball.directionX, ball.defaultSpeed * 0.6);
    }
    });
  });
});
