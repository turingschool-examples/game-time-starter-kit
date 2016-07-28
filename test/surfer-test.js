const assert = require('chai').assert;
const Surfer = require('../lib/surfer');
const World = require('../lib/world');


describe('Surfer', function() {
    context('with default attributes', function() {
      var surfer = new Surfer({});
      it('has a default x value', function(){
        assert.equal(surfer.x, 20);
      });
      it('has a default y value', function(){
        assert.equal(surfer.y, 130);
      });
      it('has a default width value', function(){
        assert.equal(surfer.width, 50);
      });
      it('has a default height value', function(){
        assert.equal(surfer.height, 60);
      });
    });
    context('jump method and attributes', function () {
      it('should have a method called "jump()"', function () {
        var surfer = new Surfer({});
        assert.isFunction(surfer.jump);
      });

      it('"jump()" should decrement the "y" property by 70', function () {
        var surfer = new Surfer({y: 130});
        surfer.jump();
        assert.equal(surfer.y, 60);
      });

      it.skip('should have a spacebarWasPressed() method', function () {
        var surfer = new Surfer({});
        assert.isFunction(surfer.spacebarWasPressed);
      });
    });
    context('prototype functioning', function() {
      it('has a bottom attribute that is updated on jump', function(){
        var surfer = new Surfer({y: 50});
        assert.equal(surfer.bottom, 110);
        surfer.jump();
        assert.equal(surfer.bottom, 40);
      });
    });
});

// velocity test
// gravity test
// is off screen test?
//
