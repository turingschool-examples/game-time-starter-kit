const chai = require('chai');
const assert = chai.assert;
const Paddle = require('../lib/paddle.js');

describe('Paddle', function(){
  context('has default size and position', function(){
    var options = ({});
    var paddle = new Paddle(options);

    it('should have a default x coordinate', function(){
      assert.equal(paddle.x, 350);
    });

    it('should have a default y coordinate', function() {
      assert.equal(paddle.y, 470);
    });

    it ('should have a default height', function() {
      assert.equal(paddle.height, 10);
    });

    it ('should have a default width', function() {
      assert.equal(paddle.width, 100);
    });
  });

  context('accepts defined values', function() {
    var xValue = 35;
    var yValue = 46;
    var heightVal = 2;
    var widthVal = 10;
    var options = ({x: xValue, y: yValue, height: heightVal, width: widthVal});
    var paddle = new Paddle(options);

    it('should accept a defined x coordinate', function(){
      assert.equal(paddle.x, 35);
    });
    it('should accept a defined y coordinate', function() {
      assert.equal(paddle.y, 46);
    });
    it ('should accept a defined height', function() {
      assert.equal(paddle.height, 2);
    });
    it ('should accept a defined width', function() {
      assert.equal(paddle.width, 10);
    });
  });

  describe ('movement', function(){

    it('should decrement x by 20 when moveLeft is called', function(){
      var paddle = new Paddle({x: 20});
      paddle.moveLeft();
      assert.equal(paddle.x, 0);
    });

    it('should increment x by 30 when moveRight is called', function(){
      var paddle = new Paddle({x: 20});
      paddle.moveRight();
      assert.equal(paddle.x, 40);
    });
  });
});
