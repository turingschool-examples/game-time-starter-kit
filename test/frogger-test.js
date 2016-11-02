var assert = require('chai').assert;
var Frogger = require('../lib/frogger');

describe('Frogger', function() {

  it('should have a frog', function() {
    assert.isFunction(Frogger);
  });

  it('should instantiate the first round', function(){
    var frog = new Frogger();
    assert.isObject(frog);
  });
});
