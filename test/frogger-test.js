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
    var frog = new Frog(375, 500);
    assert.equal(frog.x, 375);
    assert.equal(frog.y, 500);
  });

  it('should have a method called "moveLeft"', function() {
    var frog = new Frog();
    assert.isFunction(frog.moveLeft);
  });

  it('"moveLeft" should increment the frog to the left by 50', function() {
    var frog = new Frog(375, 500);
    frog.moveLeft();
    assert.equal(frog.x, 325);
  });

  it('should have a method called "moveUp"', function() {
    var frog = new Frog();
    assert.isFunction(frog.moveUp);
  });

  it('"moveUp" should increment the frog up by 50', function() {
    var frog = new Frog(375, 500);
    frog.moveUp();
    assert.equal(frog.y, 450);
  });

  it('should have a method called "moveRight"', function() {
    var frog = new Frog();
    assert.isFunction(frog.moveRight);
  });

  it('"moveRight" should increment the frog right by 50', function() {
    var frog = new Frog(375, 500);
    frog.moveRight();
    assert.equal(frog.x, 425);
  });

  it('should have a method called "moveDown"', function() {
    var frog = new Frog();
    assert.isFunction(frog.moveDown);
  });

  it('"moveDown" should increment the frog down by 50', function() {
    var frog = new Frog(375, 500);
    frog.moveDown();
    assert.equal(frog.y, 550);
  });

  it('should have a method called "frogDraw" that puts it on the canvas', function() {
    var frog = new Frog();
    assert.isFunction(frog.frogDraw);
  })

});
