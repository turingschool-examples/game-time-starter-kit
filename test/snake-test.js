  const assert = require('chai').assert;
const Snake = require('../lib/snake');

describe('snake', function() {
  context('with default attributes', function() {
    var snake = new Snake();
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

    it('should assign a direction',function(){
      assert.equal(snake.direction, 0);
    });

    it('should assign a total',function(){
      assert.equal(snake.total, 0);
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

  context('changing coordinates', function() {
    it('can move up', function(){
      var snake = new Snake();
      snake.moveUp();
      assert.equal(snake.y, 249);
    });

    it('can move up twice', function(){
      var snake = new Snake();
      snake.moveUp();
      snake.moveUp();
      assert.equal(snake.y, 248);
    });
  });

  context('changing coordinates', function() {
    it('can move down', function(){
      var snake = new Snake();
      snake.moveDown();
      assert.equal(snake.y, 251);
    });

    it('can move down twice', function(){
      var snake = new Snake();
      snake.moveDown();
      snake.moveDown();
      assert.equal(snake.y, 252);
    });
  });

    it('can move left', function(){
      var snake = new Snake();
      snake.moveLeft();
      assert.equal(snake.x, 249);
    });

    it('can move left twice', function(){
      var snake = new Snake();
      snake.moveLeft();
      snake.moveLeft();
      assert.equal(snake.x, 248);
    });
  });

  context('Snake movement', function() {


    it('should have a move function', function () {
      var snake = new Snake();
      assert.isFunction(snake.move);
    });

    it('should have an update function', function () {
      var snake = new Snake();
      assert.isFunction(snake.update);
    });

    it('should have a gameOver function', function () {
      var snake = new Snake();
      assert.isFunction(snake.gameOver);
    });

    it('can move right', function(){
      var snake = new Snake();
      snake.moveRight();
      assert.equal(snake.x, 251);
    });

    it('can move up right', function(){
      var snake = new Snake();
      snake.moveRight();
      snake.moveRight();
      assert.equal(snake.x, 252);
    });
  });
