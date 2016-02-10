const assert = require('chai').assert;
const ViewPort = require('../lib/viewport');

describe('ViewPort', function() {
  context('with default attributes', function() {

    var viewPort = new ViewPort();

    it('should assign a default height of 600', function() {
      assert.equal(viewPort.height, 600);
    });

    it('should assign a default width of 1000', function() {
      assert.equal(viewPort.width, 1000);
    });
  });

  context('with given attributes', function() {

    var viewPort = new ViewPort(300, 200);

    it('should assign a height', function() {
      assert.equal(viewPort.height, 300);
    });

    it('should assign a width', function() {
      assert.equal(viewPort.width, 200);
    });
  });
});
