const assert = require('chai').assert;

const Brick = require('../lib/brick');

describe('Brick', function() {
  context('checks default values', function() {

    var brick = new Brick({});

    it('has default values', function() {
      assert.equal(brick.height, 5);
      assert.equal(brick.width, 10);
      assert.equal(brick.x, 100);
      assert.equal(brick.y, 100);
    });
  });
});
