const assert = require('chai').assert;

const Snake = require('../lib/snake');


describe('player inputs', function() {

  //Assert that keydown on up button moves snake up
  context('when up key is pressed', function() {
    it('should change snakes direction to move up', function() {
      var snake = new Snake();
      assert.equal(snake.y, 250);
      snake.moveUp();
      assert.equal(snake.y, 249);
    });
  });

    //Assert that keydown on down button moves snake down
    context('when down key is pressed', function() {
      it('should change snakes direction to move down', function() {
        var snake = new Snake();
        assert.equal(snake.y, 250);
        snake.moveDown();
        assert.equal(snake.y, 251);
      });
  });

  //Assert that keydown on left button moves snake left
  context('when left key is pressed', function() {
    it('should change snakes direction to move left', function() {
      var snake = new Snake();
      assert.equal(snake.x, 250);
      snake.moveLeft();
      assert.equal(snake.x, 249);
      });
  });

  //Assert that keydown on right button moves snake right
  context('when right key is pressed', function() {
    it('should change snakes direction to move right', function() {
      var snake = new Snake();
      assert.equal(snake.x, 250);
      snake.moveRight();
      assert.equal(snake.x, 251);
      });
  });

});
