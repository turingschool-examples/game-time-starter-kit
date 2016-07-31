
const assert = require('chai').assert;
const World = require('../lib/world');
// require('../lib/index');


//is world created with default attributes
describe('World', function () {

  it('should be a function', function () {
    assert.isFunction(World);
  });

  it('should instantiate an object', function () {
    var world = new World();
    assert.isObject(world);
  });

  it('should take take the first argument and set it as the "width" property of the instantiated object', function () {
    var world = new World(600, 200);
    assert.equal(world.width, 600);
  });

  it('should take take the second argument and set it as the "height" property of the instantiated object', function () {
    var world = new World(600, 200);
    assert.equal(world.height, 200);
  });

  // what happens if you have no args passed in?
  // -> popup that says sth
});

describe('Game Over', function() {
  it.skip('should have a method called "gameOver()"', function () {
    var world = new World({});
    assert.isFunction(world.gameOver);
  });

  // assert on behavior
    // call the gameOver function and then make sure that rAF is NOT called
    // isolated and decoupled

  it.skip('should have a method called "resetGame()"', function () {
    var world = new World({});
    assert.isFunction(world.resetGame);
    });

});
