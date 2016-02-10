const assert = require('chai').assert;
const Snake = require('../lib/snake');

describe('Snake', function() {
  context('with default attributes', function() {
    var snake = new Snake({});
    it('should assign an x coordinate', function() {
      assert.equal(snake.x, 0);
    });
    it('should assign a y coordinate', function() {
      assert.equal(snake.y, 0);
    });
    it('should assign a height', function(){
      assert.equal(snake.height, 10);
    });
    it('should assign a width', function(){
      assert.equal(snake.width, 10);
    });
  });
});

describe('Snake#direction', function() {
  context('successfully sets direction variable', function(){
    var snake = new Snake ({})
    it('as up', function(){
      assert.equal(snake.y, 0)
      snake.changeDirectionUp();
      assert.equal(snake.direction, 'up')
    });
    it('as down', function() {
      assert.equal(snake.y, 0)
      snake.changeDirectionDown();
      assert.equal(snake.direction, 'down')
    });
    it('as left', function(){
      assert.equal(snake.y, 0)
      snake.changeDirectionLeft();
      assert.equal(snake.direction, 'left')
    });
    it('as right', function(){
      assert.equal(snake.y, 0)
      snake.changeDirectionRight();
      assert.equal(snake.direction, 'right')
    });
  });
});



describe('Snake#move', function() {
  context('successfully adds', function(){
    var snake = new Snake ({})
    it('1 to the x position', function(){
      assert.equal(snake.x, 0)
      snake.changeDirectionRight();
      snake.move();
      assert.equal(snake.x, 1)
    });
    it('1 to the y position', function(){
      assert.equal(snake.y, 0)
      snake.changeDirectionDown();
      snake.move();
      assert.equal(snake.y, 1)
    });
  });

  context('successfully subtracts', function(){
    var snake = new Snake ({})
    it('1 from the x position', function(){
      assert.equal(snake.x, 0)
      snake.changeDirectionLeft();
      snake.move();
      assert.equal(snake.x, -1)
    });
    it('1 from the y position', function(){
      assert.equal(snake.y, 0)
      snake.changeDirectionUp();
      snake.move();
      assert.equal(snake.y, -1)
    });
  });
});
