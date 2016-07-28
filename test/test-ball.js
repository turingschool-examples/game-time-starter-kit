const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball.js');

describe('Ball', function() {

  context('has default size and position', function() {
    var options = ({});
    var ball = new Ball(options);

    it('should have a default x coordinate', function() {
      assert.equal(ball.x, 395);
    });

    it('should have a default y coordinate', function() {
      assert.equal(ball.y, 460);
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

  context('ball should have methods for changing directionX and directionY', function() {

    it('should have directionX inverted when invertX called', function() {
      var ball = new Ball({x: 350, y: 450, directionX: 2,});

      ball.invertX();

      assert.equal(ball.directionX, -2);
    });

    it('should have directionY inverted when invertY called', function() {
      var ball = new Ball({x: 350, y: 450});
      ball.invertY();
      assert.equal(ball.directionY, 2);
    });

    it('should have directionX inverted when invertX called', function() {
      var ball = new Ball({x: 350, y: 450});

      ball.invert();

      assert.equal(ball.directionX, -2);
      assert.equal(ball.directionY, 2);
    });
  });
});
