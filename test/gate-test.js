const assert = require('chai').assert;
const Gate = require('../lib/gate');

describe('Gate', function() {

  context('with default attributes', function() {

    var gate = new Gate({});

    it('should have a y coordinate', function() {
      assert.equal(gate.y, 595);
    });

    it('should have an x coordinate for where the hole starts', function() {
      assert.equal(gate.gateStart, 0);
    });

    it('should have an x coordinate for where the hole ends', function() {
      assert.equal(gate.gateEnd, 10);
    });

  });

});
