const assert = require('chai').assert;

const Snake = require('../lib/snake');

describe('Snake', function() {
  context('with default attributes', function() {
    var snake = new Snake({});

    it('should assign an x coordinate', function() {
      assert.equal(snake.x, 250);
    });

    it('should assign a y coordinate', function() {
      assert.equal(snake.y, 250);
    });

    it('should assign a height', function(){
      assert.equal(snake.height, 10);
    });

    it('should assign a width', function(){
      assert.equal(snake.width, 10);
    });
  });

  context('with all assigned attributes', function() {
      var xValue = 250;
      var yValue = 250;
      var heightValue = 10;
      var widthValue = 10;
      var options = {x: xValue, y: yValue, height: heightValue, width: widthValue};
      var snake = new Snake(options);

      it('assigns the xValue passed in as the snake x', function() {
        assert.equal(snake.x, xValue);
      });

      it('assigns the yValue passed in as the snake y', function() {
        assert.equal(snake.y, yValue);
      });

      it('assigns the heightValue passed in as the snake height', function() {
        assert.equal(snake.height, heightValue);
      });

      it('assigns the widthValue passed in as the snake width', function() {
        assert.equal(snake.width, widthValue);
      });

      });
});
