const assert = require('chai').assert;
const Light = require('../lib/light');

describe('Light', function() {
  it('should be a function', function() {
    assert.isFunction(Light);
  });

  it('should instantiate a Light', function() {
    var light = new Light();
    assert.isObject(light);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function() {
    var light = new Light(1);
    assert.equal(light.x, 1);
  });

  it('should take the second argument and set it as the "y" property of the instantiated object', function() {
    var light = new Light(1, 1);
    assert.equal(light.y, 1);
  });

  it('should take the third argument and set it as the "height" property of the instantiated object', function() {
    var light = new Light(1, 1, 100);
    assert.equal(light.height, 100);
  });

  it('should take the fourth argument and set it as the "width" property of the instantiated object', function() {
    var light = new Light(1, 1, 100, 100);
    assert.equal(light.width, 100);
  });
});
