const assert = require('chai').assert;
const Ball = require('../lib/ball');

describe('Ball', function() {
  context('checks default values', function() {

    let ball = new Ball;

    it('has default values', function() {
      assert.equal(ball.height, 16);
      assert.equal(ball.width, 16);
      assert.equal(ball.x, 442);
      assert.equal(ball.y, 434);
    });
  });

  context('check that set all values of ball', function() {

    let heightValue = 7;
    let widthValue = 7;
    let xValue = 20;
    let yValue = 20;
    let properties = {
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
