const assert = require('chai').assert;
const World = require('../lib/world');

describe('world', function () {

  it('should start with a default width', function() {
    var world = new World();
    assert.equal(world.width, 500);
  });

  it('should start with a default height', function() {
    var world = new World();
    assert.equal(world.height, 500);
  });

  it('should be a function', function () {
    assert.isFunction(World);
  });

  it('should have an render function', function () {
    var world = new World();
    assert.isFunction(world.renderWorld);
  });

  it('should have an eatFood function', function () {
    var world = new World();
    assert.isFunction(world.eatFood);
  });

  it('should have an update function', function () {
    var world = new World();
    assert.isFunction(world.updateWorld);
  });

  // it('should increase snakes total upon apple collision', function(){
  //   var world = new World();
  //   world.eatFood();
  //   assert.equal(world.snake.total, 1);
  // });

  // it('should generate new apple upon collision', function () {
  //   var world = new World();
  //   var oldAppleX = world.apple.x;
  //   world.eatFood();
  //   assert.notEqual(world.apple.x, oldAppleX);
  // });


    // it('should generate new apple upon collision', function () {
    //   var world = new World();
    //   var oldAppleX = world.apple.x;
    //   world.eatFood();
    //   assert.notEqual(world.apple.x, oldAppleX);
    // });

  it('should instantiate an object', function () {
    var world = new World();
    assert.isObject(world);
  });
});

//WHY?
//To test edge cases
//We want to make sure the app works as intended
//We want the tests drive our design

//WHAT?
//We want to test behavior
