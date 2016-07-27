const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball.js');

describe('Ball', function() {

  context('has default size and position', function() {
    var options = ({});
    var ball = new Ball(options);

    it('should have a default x coordinate', function() {
      assert.equal(ball.x, 450);
    });

    it('should have a default y coordinate', function() {
      assert.equal(ball.y, 350);
    });

    it('should have a default height', function() {
      assert.equal(ball.height, 10);
    });

    it('should have a default width', function() {
      assert.equal(ball.width, 10);
    });
  });

  context('can take variable x and y coordinates', function() {
    var xValue = 20;
    var yValue = 50;
    var options = { x: xValue, y: yValue };
    var ball = new Ball(options);

    it('should accept a variable x coordinate', function() {
      assert.equal(ball.x, xValue);
      assert.equal(ball.y, yValue);
    });
  });

  context('ball should have different movement methods', function() {

    it('should move up and to the right when bounceUpRight is called', function() {
      var ball = new Ball({x: 350, y: 450});

      ball.bounceUpRight();
      assert.equal(ball.x, 352);
      assert.equal(ball.y, 448);
    });

    it('should move up and to the left when bounceUpLeft is called', function() {
      var ball = new Ball({x: 350, y: 450});

      ball.bounceUpLeft();
      assert.equal(ball.x, 348);
      assert.equal(ball.y, 448);
    });

    it('should move down and to the right when bounceDownRight is called', function() {
      var ball = new Ball({x: 350, y: 450});

      ball.bounceDownRight();
      assert.equal(ball.x, 352);
      assert.equal(ball.y, 452);
    });

    it('should move down and to the left when bounceDownLeft is called', function() {
      var ball = new Ball({x: 350, y: 450});

      ball.bounceDownLeft();
      assert.equal(ball.x, 348);
      assert.equal(ball.y, 448);
    });
  });
});
