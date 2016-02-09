const assert = require('chai').assert;
const Gate = require('../lib/gate');

describe('Gate', function() {

  context('with default attributes', function() {

    var canvas = document.getElementById("game");
    var gate = new Gate({});

    it('should have a y coordinate that is 5 less than the canvas height', function() {
      assert.equal(gate.y, (canvas.height - 5));
    });

    it('should have an x coordinate for where the hole starts', function() {
      assert.equal(gate.gateStart, 0);
    });

    it('should have an x coordinate for where the hole ends', function() {
      assert.equal(gate.gateEnd, 10);
    });

  });

  context('with given attributes', function() {

    var canvas = document.getElementById("game");
    var gate = new Gate({ y: 100,
                          gateStart: 50,
                          gateEnd: 100,
                        });
    debugger;
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
