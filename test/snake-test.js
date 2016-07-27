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
});
