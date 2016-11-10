var assert = require('chai').assert;
var Log = require('../lib/logs.js');

describe ('Logs', function() {

  it('should be a function', function() {
    assert.isFunction(Log);
  });

  it('should take a variable for x', function() {
    var log = new Log(250, 300);
    assert.equal(log.x, 250);
  });

  it('should take a variable for y', function() {
    var log = new Log(250, 300);
    assert.equal(log.y, 300);
  });

  it('should have a method called "logDraw" that puts it on the canvas', function() {
    var log = new Log(250, 300);
    assert.isFunction(log.logDraw);
  });

  it('should have a method called "logMove"', function(){
    var log = new Log(250, 300);
    assert.isFunction(log.logMove);
  })
})
