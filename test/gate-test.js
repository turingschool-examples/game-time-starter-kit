const assert = require('chai').assert;
const Gate = require('../lib/gate');
const ViewPort = require('../lib/viewport');

describe('Gate', function() {

  context('with default attributes', function() {

    var viewPort = new ViewPort(300, 200)
    var gate = new Gate({}, viewPort);

    it('should have a y coordinate that is 10 less than the canvas height', function() {
      assert.equal(gate.y, (viewPort.height - 10));
    });

    it('should have an x coordinate for where the hole starts', function() {
      assert.equal(gate.gateStart, 0);
    });

    it('should have an x coordinate for where the hole ends', function() {
      assert.equal(gate.gateEnd, 10);
    });

  });

  context('with given attributes', function() {

    var viewPort = new ViewPort(300, 200)
    var gate = new Gate({ y: 100,
                          gateStart: 50,
                          gateEnd: 100,
                        }, viewPort);
    it('can accept a y coordinate for y position on canvas', function() {
      assert.equal(gate.y, 100);
    });

    it('can accept an x coordinate for where the hole starts', function() {
      assert.equal(gate.gateStart, 50);
    });

    it('can accept an x coordinate for where the hole ends', function() {
      assert.equal(gate.gateEnd, 100);
    });

  });

});
