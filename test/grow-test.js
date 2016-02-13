const assert = require('chai').assert;
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const Game = require('../lib/game');

describe('Snake#grow', function() {
  context('successfully adds', function(){
    beforeEach(function() {
      this.snake = new Snake({x: 0, y: 0, width: 10, height: 10})
    });

    it('block to end', function(){
      assert.equal(this.snake.y, 0)
      this.snake.eatFace();
      this.snake.grow();
      assert.equal(this.snake.direction, 'up')
    });
  });
});
