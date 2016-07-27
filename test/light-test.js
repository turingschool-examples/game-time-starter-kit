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

  it('should take the fifth argument and set it as the "state" property of the instantiated object', function() {
    var light = new Light(1, 1, 100, 100, true || false);
    assert.equal(light.state, true || false);
  });

});

describe('light', function() {

  describe('turnOn()', function() {
    it('should have a method called "turnOn()"', function() {
      var light = new Light(1, 1, 100, 100, true || false);
      assert.isFunction(light.turnOn);
    });

    it('"turnOn()" should set the "state" of the instantiated object to "true"', function() {
      var light = new Light(1, 1, 100, 100, true || false);
      light.turnOn();
      assert.equal(light.state, true);
    });
  });

  describe('turnOff()', function() {
    it('should have a method called "turnOff()"', function() {
      var light = new Light(1, 1, 100, 100, true || false);
      assert.isFunction(light.turnOff);
    });

    it('"turnOff()" should set the state of the instantiated object to "false"', function() {
      var light = new Light(1, 1, 100, 100, true || false);
      light.turnOff();
      assert.equal(light.state, false);
    });
  });
  
});
