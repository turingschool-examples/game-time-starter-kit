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

describe('Snake#scoot', function() {
  context('successfully moves', function(){
    var snake = new Snake ({})
    it('adds 1 to the x position', function(){
      assert.equal(snake.x, 0)
      snake.move();
      assert.equal(snake.x, 1)
    });
  });
});

// describe('Snake#stop', function (){
//   context('successfully stops at wall', function(){
//     var snake = new Snake ({})
//     it('stops at furthest x position', function(){
//       assert.equal(snake.x, 0)
//       snake.scoot(500);
//       snake.stop();
//       assert.equal(snake.x, 500)
//     });
//   });
// });
