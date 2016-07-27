const assert = require('chai').assert;
const Surfer = require('../lib/surfer');

describe('Surfer', function() {
    context('with default attributes', function() {
      var surfer = new Surfer({});
      it('has a default x value', function(){
        assert.equal(surfer.x, 20);
      });
      it('has a default y value', function(){
        assert.equal(surfer.y, 110);
      });
      it('has a default width value', function(){
        assert.equal(surfer.width, 20);
      });
      it('has a default height value', function(){
        assert.equal(surfer.height, 30);
      });
    });




});
