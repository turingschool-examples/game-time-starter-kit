var assert = require('chai').assert;
var Frog = require('../lib/frogger.js');

describe('Frogger', function() {

  it('should be a function', function () {
  assert.isFunction(Frog);
  });

  it('"Frog" should have a width and height', function() {
    var frog = new Frog();
    assert.equal(frog.width, 40);
    assert.equal(frog.height, 40);
  });

  it('can take a variable for x and y', function() {
    var frog = new Frog(275, 500);
    assert.equal(frog.x, 275);
    assert.equal(frog.y, 500);
  });

  it('should have a method called "moveLeft"', function() {
    var frog = new Frog();
    assert.isFunction(frog.moveLeft);
  });

  it('should have a method called "moveUp"', function() {
    var frog = new Frog();
    assert.isFunction(frog.moveUp);
  });

  it('should have a method called "moveRight"', function() {
    var frog = new Frog();
    assert.isFunction(frog.moveRight);
  });

  it('should have a method called "moveDown"', function() {
    var frog = new Frog();
    assert.isFunction(frog.moveDown);
  });

  it('should have a method called "frogDraw" that puts it on the canvas', function() {
    var frog = new Frog();
    assert.isFunction(frog.frogDraw);
  })

});
