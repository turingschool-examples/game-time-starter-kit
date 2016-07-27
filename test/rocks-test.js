// test/rocks-test.js //

const assert = require('chai').assert;
const Rock = require('../lib/rocks');

describe('Rock', function() {
  context('with default attributes', function() {
    var rock = new Rock({});

    it('has a default x value', function(){
      assert.equal(rock.x, 625);
    });

    it('has a default y value', function(){
      assert.equal(rock.y, 100);
    });

    it('has a default width value', function(){
      assert.equal(rock.width, 25);
    });

    it('has a default height value', function(){
      assert.equal(rock.height, 40);
    });
  });

  context('with an x value off-screen right', function() {
    var rock = new Rock({});
    it.skip('has a value greater than 600', function() {
      isOffScreenRight();
      assert.equal();
    });
  });
});
