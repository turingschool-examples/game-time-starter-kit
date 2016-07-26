const chai = require('chai');
const assert = chai.assert;
const Paddle = require('../lib/paddle.js');

describe('Paddle', function(){
  context('has size and position', function(){
    var xValue = 350;
    var yValue = 460;
    var heightVal = 20;
    var widthVal = 100;
    var options = {x: xValue, y: yValue, height: heightVal, width: widthVal};

    var paddle = new Paddle(options);

    it('should have a default x coordinate', function(){
      assert.equal(paddle.x, 350);
    });
    it('should have a default y coordinate', function() {
      assert.equal(paddle.y, 460);
    });
    it ('should have a default height', function() {
      assert.equal(paddle.height, 20);
    });
    it ('should have a default width', function() {
      assert.equal(paddle.width, 100);
    });
  });
});
