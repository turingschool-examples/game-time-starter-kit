const assert = require('chai').assert;
// //SAME AS ABOVE
// // const chai = require('chai');
// // const assert = chai.assert;
const Rock = require('../lib/rocks');

describe('Rock', function() {
  context('with default attributes', function() {
    var rock = new Rock({});
    it('has a default x value', function(){
      assert.equal(rock.x, 20);
    });
    it('has a default y value', function(){
      assert.equal(rock.y, -110);
    });
    it('has a default width value', function(){
      assert.equal(rock.width, 20);
    });
    it('has a default height value', function(){
      assert.equal(rock.height, 30);
    });
  });
});
