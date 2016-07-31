const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');

describe('Ball to Paddle', function() {
  context('Test how the ball reacts to impacts with the paddle', function() {
    it('should detect a collision when the ball touches the paddle', function() {
      var ball = new Ball({ x: 450, y: 500});
      var paddle = new Paddle({ x: 430, y: 500});
      assert.isTrue( ball.isCollidingWith(paddle) );
    });

    it('should invert the Y when the ball collides with the top of the paddle', function() {
      var ball = new Ball({ x: 450, y: 500});
      var paddle = new Paddle({ x: 430, y: 505});
      if (ball.isCollidingWith(paddle)) {
        ball.bounce(paddle);
      }
      assert.equal(ball.directionY, 4);
    });

    it('should invert the X when the ball collides with a side of the paddle', function() {
      var ball = new Ball ({ x:450, y:500 });
      var paddle = new Paddle({ x: 445, y: 508});
      if (ball.isCollidingWith(paddle)) {
        ball.bounce(paddle);
      }
      assert.equal(ball.directionX, -4);
    });
  });
});
