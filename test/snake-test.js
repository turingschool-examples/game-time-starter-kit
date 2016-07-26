const assert = require('chai').assert;

const Snake = require('../lib/snake');

describe('Snake', function() {
  context('with default', function() {
    // Make a Snake
    // Assign width and height
    // Assign x and y on where the snake will start off

    var snake = new Snake();

    it('has all default values', function() {
      assert.equal(snake.x, 7);
      assert.equal(snake.y, 12);
      assert.equal(snake.width, 5);
      assert.equal(snake.height, 5);
    });
  });

  context('with some assigned attributes', function() {
    // assigning x and y values through variables

    
  });
});
