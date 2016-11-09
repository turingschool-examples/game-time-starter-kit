var assert = require('chai').assert;
var Turtle = require('../lib/turtles.js');


describe('Turtle', function() {

  it('should be a function', function() {
    assert.isFunction(Turtle);
  });

  it('"Turtle" should take a variable for x', function() {
    var turtle = new Turtle(40, 40);
    assert.equal(turtle.x, 40);
  });

  it('"Turtle" should take a variable for y', function() {
    var turtle = new Turtle(40,40);
    assert.equal(turtle.y, 40);
  });

  it('should have a method called "turtleDraw"', function() {
    var turtle = new Turtle(40, 40);
    assert.isFunction(turtle.turtleDraw);
  });

  it('should have a method called "turtleMove"', function() {
    var turtle = new Turtle(40, 40);
    assert.isFunction(turtle.turtleMove);
  });
});
