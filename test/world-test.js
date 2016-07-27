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

  it('should instantiate an object', function () {
    var world = new World();
    assert.isObject(world);
  });

  // it('should have a "snake" property which starts off as an object', function() {
  //   var world = new World();
  //   var snake = new Snake();
  //   assert.isObject(world,snake);
  // });

});


//WHY?
//To test edge cases
//We want to make sure the app works as intended
//We want the tests drive our design

//WHAT?
//We want to test behavior
