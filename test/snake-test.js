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
    beforeEach(function() {
      this.snake = new Snake({x: 0, y: 0, width: 10, height: 10});
    });

    it('as up', function(){
      assert.equal(this.snake.y, 0);
      this.snake.changeDirection('up');
      assert.equal(this.snake.direction, 'up');
    });

    it('as down', function() {
      assert.equal(this.snake.y, 0);
      this.snake.changeDirection('down');
      assert.equal(this.snake.direction, 'down');
    });
    it('as left', function(){
      assert.equal(this.snake.y, 0);
      this.snake.changeDirection('left');
      assert.equal(this.snake.direction, 'left');
    });
    it('as right', function(){
      assert.equal(this.snake.y, 0);
      this.snake.changeDirection('right');
      assert.equal(this.snake.direction, 'right');
    });
  });
});



describe('Snake#move', function() {
  context('successfully adds', function(){

    beforeEach(function() {
      this.snake = new Snake({x: 0,
                              y: 0,
                              width: 10,
                              height: 10,
                              time: 500
      });
    });

    it('10 to the y position', function(){
      this.snake.previousTime = 0;
      this.snake.direction = 'up';
      this.snake.move(100);
      assert.equal(this.snake.y, 0);
    });

    it('10 to the y position', function(){
      this.snake.previousTime = 0;
      this.snake.direction = 'down';
      this.snake.move(100);
      assert.equal(this.snake.y, 0);
    });
  });

  context('successfully subtracts', function(){
    beforeEach(function() {
      this.snake = new Snake({x: 0,
                              y: 0,
                              width: 10,
                              height: 10,
                              time: 500
      });
    });

    it('10 from the x position', function(){
      this.snake.previousTime = 0;
      this.snake.direction = 'right';

      this.snake.move(100);
      assert.equal(this.snake.x, 0);
    });
    it('10 from the x position', function(){
      this.snake.previousTime = 0;
      this.snake.direction = 'left';

      this.snake.move(100);
      assert.equal(this.snake.x, 0);
    });
  });
});
