const assert = require('chai').assert;
const Snake = require('../lib/snake');
const World = require('../lib/world');


describe('Snake in relation to world', function() {
  it('should know about the world if it is passed in', function () {
    var world = new World();
    // var snake = new Snake(250,250,10,10,world);
    var snake = world.snake;
    assert.equal(snake.world, world);
  });
});

// describe('Snake colliding with an object', function() {
//   it('should have a method called isSnakeColliding()', function () {
//     var world = new World();
//     assert.isFunction(world.isSnakeColliding);
//     });
// });
//
// describe('Snake starting the game', function () {
//   it('should begin moving by pressing an arrow key', function () {
//     var snake = world.snake;
//     assert.isFunction(world.snakeIsMoving);
//   });

// });
