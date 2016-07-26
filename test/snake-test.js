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
    var xValue = 10;
    var yValue = 20;
    // var options = {x: xValue, y: yValue};
    var snake = new Snake(xValue, yValue);

    it('should allow me to assign specific values and otherwise use defaults', function(){
      // I should be able to create a Dingus with height and width assigned
      // test that the height and width are not defaults
      assert.equal(snake.height, 5);
      assert.equal(snake.width, 5);
      assert.equal(snake.x, xValue);
      assert.equal(snake.y, yValue);
      // test that the x and y are defaults
    });

  });
});
