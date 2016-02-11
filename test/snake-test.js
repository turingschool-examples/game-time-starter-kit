const assert = require('chai').assert;
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const Game = require('../lib/game');

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
    // var snake = new Snake ({})

    beforeEach(function() {
      this.snake = new Snake({x: 0, y: 0, width: 10, height: 10})
    });

    it('as up', function(){
      assert.equal(this.snake.y, 0)
      this.snake.changeDirectionUp();
      assert.equal(this.snake.direction, 'up')
    });

    xit('as down', function() {
      assert.equal(snake.y, 0)
      snake.changeDirectionDown();
      assert.equal(snake.direction, 'down')
    });
    xit('as left', function(){
      assert.equal(snake.y, 0)
      snake.changeDirectionLeft();
      assert.equal(snake.direction, 'left')
    });
    xit('as right', function(){
      assert.equal(snake.y, 0)
      snake.changeDirectionRight();
      assert.equal(snake.direction, 'right')
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
                              time: 500})
    });

    it('10 to the x position', function(){
      assert.equal(this.snake.x, 0)
      this.snake.changeDirectionRight();
      this.snake.move(520);
      assert.equal(this.snake.x, 10)
    });

    xit('10 to the y position', function(){
      assert.equal(snake.y, 0)
      snake.changeDirectionDown();
      snake.move();
      assert.equal(snake.y, 10)
    });
  });

  context('successfully subtracts', function(){
    var snake = new Snake ({})
    xit('10 from the x position', function(){
      assert.equal(snake.x, 0)
      snake.changeDirectionLeft();
      snake.move();
      assert.equal(snake.x, 10)
    });
    xit('10 from the y position', function(){
      assert.equal(snake.y, 0)
      snake.changeDirectionUp();
      snake.move();
      assert.equal(snake.y, 10)
    });
  });
});

describe('Snake#eats', function() {
  context('successfully', function(){

    beforeEach(function() {
      var canvas = document.createElement("canvas");
      var context = canvas.getContext('2d');
    });

    var game = new Game({})
    var snake = new Snake ({});
    var food = new Food ({x: 300, y: 50, width: 10, height: 10}, context);
    it('and repositions food', function(){
      food.draw();
      assert.equal(food.x, 300);
      assert.equal(food.y, 50);
      game.repositionFood();
      refute.equal(food.x, 300)
    });
  });
});
