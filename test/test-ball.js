const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball.js');

describe('Ball', function() {

  context('has default size and position', function() {
    var options = ({});
    var ball = new Ball(options);

    it('should have a default x coordinate', function() {
      assert.equal(ball.x, 375);
    });

    it('should have a default y coordinate', function() {
      assert.equal(ball.y, 458);
    });

    it('should have a default height', function() {
      assert.equal(ball.height, 12);
    });

    it('should have a default width', function() {
      assert.equal(ball.width, 12);
    });
  });

  context('can take variable x and y coordinates', function() {
    var xValue = 20;
    var yValue = 50;
    var ball = new Ball({ x: 50, y: 75});


    it('should accept a variable x coordinate', function() {
      ball.x = xValue;
      ball.y = yValue;
      assert.equal(ball.x, 20);
      assert.equal(ball.y, 50);
    });
  });

  context('ball should have methods for changing directionX and directionY', function() {

    it('should have directionX inverted when invertX called', function() {
      var ball = new Ball({x: 350, y: 450, directionX: 2,});

      ball.invertX();

      assert.equal(ball.directionX, -4);
    });

    it('should have directionY inverted when invertY called', function() {
      var ball = new Ball({x: 350, y: 450});
      ball.invertY();
      assert.equal(ball.directionY, 4);
    });

    it('should have directionX and directionY inverted when invert called', function() {
      var ball = new Ball({x: 350, y: 450});

      ball.invert();

      assert.equal(ball.directionX, -4);
      assert.equal(ball.directionY, 4);
    });
  });
});
