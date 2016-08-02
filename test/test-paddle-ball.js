const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');

describe('Ball to Paddle', function() {
  context('Test how the ball reacts to impacts with the paddle', function() {
    it('should detect a collision when the ball touches the paddle', function() {
      var ball = new Ball({ x: 450, y: 500});
      var paddle = new Paddle({ x: 430, y: 505});
      assert.isTrue(ball.isCollidingWith(paddle));
    });
    it('should send the ball to the left at a 45 deg angle when the ball collides with the left-most zone of the paddle', function() {
      var ball = new Ball ({x: 0, y: 500});
      var paddle = new Paddle ({x: 0, y: 505});
      if (ball.isCollidingWith(paddle)) {
        ball.left45();
      assert.equal(ball.directionX, -ball.defaultSpeed);
      }
    });
    it('should send the ball to the left at a 60 deg angle when the ball collides with the 2nd left zone of the paddle', function() {
      var ball = new Ball ({x: 25, y: 500});
      var paddle = new Paddle ({x: 0, y: 505});
      if (ball.isCollidingWith(paddle)) {
        ball.left60();
      assert.equal(ball.directionX, -ball.defaultSpeed * 0.6);
      }
    });
    it('should just invert the Y when the ball hits the middle zone of the paddle', function() {
      var ball = new Ball ({x: 50, y: 500});
      var paddle = new Paddle ({x: 0, y: 505});
      if (ball.isCollidingWith(paddle)) {
        ball.invertY();
      assert.equal(ball.directionX, ball.defaultSpeed);
      assert.equal(ball.directionY, ball.defaultSpeed);
      }
    });
    it('should send the ball to the right at a 60 deg angle when the ball collides with the 2nd right zone of the paddle', function() {
      var ball = new Ball ({x: 65, y: 500});
      var paddle = new Paddle ({x: 0, y: 505});
      if (ball.isCollidingWith(paddle)) {
        ball.right60();
      assert.equal(ball.directionX, ball.defaultSpeed * 0.6);
      }
    });
    it('should send the ball to the right at a 45 deg angle when the ball collides with the furthest right zone of the paddle', function() {
      var ball = new Ball ({x: 80, y: 500});
      var paddle = new Paddle ({x: 0, y: 505});
      if (ball.isCollidingWith(paddle)) {
        ball.right45();
      assert.equal(ball.directionX, ball.defaultSpeed);
      }
    });
  });
});
