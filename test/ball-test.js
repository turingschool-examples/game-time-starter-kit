const assert = require('chai').assert;
const Ball = require('../lib/ball');

describe('Ball', function() {
  context('checks default values', function() {

    var ball = new Ball;

    it('has default values', function() {
      assert.equal(ball.height, 5);
      assert.equal(ball.width, 5);
      assert.equal(ball.x, 50);
      assert.equal(ball.y, 30);
    });
  });

  context('check that set all values of ball', function() {

    var heightValue = 7;
    var widthValue = 7;
    var xValue = 20;
    var yValue = 20;
    var properties = {
      height: heightValue,
      width: widthValue,
      x: xValue,
      y: yValue
    };

    const ball = new Ball(properties);

    it('assigns xValue to the ball x', function() {
      assert.equal(ball.x, xValue);
    });

    it('assigns yValue to the ball y', function() {
      assert.equal(ball.y, yValue);
    });

    it('assigns heightValue to the ball height', function() {
      assert.equal(ball.height, heightValue);
    });

    it('assigns widthValue to the ball width', function() {
      assert.equal(ball.width, widthValue);
    });
  });
});
