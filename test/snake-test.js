const assert = require('chai').assert;

const Snake = require('../lib/snake');

describe('Snake', function() {
  context('assigned attributes', function() {
    it('should create a snake', function () {
      var snake = new Snake();
      assert.isObject(snake);
      });
    it('should take all these attributes', function () {
      var snake = new Snake(10, 10, 30, 30);
      assert.equal(snake.x, 10);
      assert.equal(snake.y, 10);
      assert.equal(snake.height, 30);
      assert.equal(snake.width, 30);
      });
    });

  context('snake direction', function() {
    it('"move()" should move the snake continuously in the specified direction', function() {
      var currentDirection = this.direction;
      var x = this.x;
      currentDirection.moveDirection();
      assert.equal(snake.x, this.x + 1);
    });

    // Snake.prototype.moveDirection = function() {
    //   if(currentDirection === 'right') {
    //     this.moveRightDirection();
    //   }
  
    it('"moveRightDirection()" should increment the "x" property by 1', function() {
      var snake = new Snake(10, 10);
      snake.moveRightDirection();
      assert.equal(snake.x, 11);
    });
    it('"moveLeftDirection()" should decrement the "x" property by 1', function() {
      var snake = new Snake(10, 10);
      snake.moveLeftDirection();
      assert.equal(snake.x, 9);
    });
    it('"moveUpDirection()" should increase the "y" property by 1', function() {
        var snake = new Snake(10, 10);
        snake.moveUpDirection();
        assert.equal(snake.y, 11);
    });
    it('"moveDownDirection()" should decrement the "y" property by 1', function() {
        var snake = new Snake(10, 10);
        snake.moveDownDirection();
        assert.equal(snake.y, 9);
    });
    it('"grow()" should increase the width property by 2', function() {
        var snake = new Snake(10, 10, 30);
        snake.grow();
        assert.equal(snake.width, 32);
    });
  });
});
