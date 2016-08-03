const assert = require('chai').assert;
const Rock = require('../lib/rocks');

describe('Rock', function() {

  context('Variable checking', function () {
    it('Rock should be a function', function () {
      assert.isFunction(Rock);
    });

    it('should create a new rock', function () {
      var rock = new Rock({});
      assert.isObject(rock);
    });

    it('should take the "y" property as defined in an object and apply to Rock', function () {
      var rock = new Rock({y: 10});
      assert.equal(rock.y, 10);
    });

    it('should take the "width" property as defined in an object and apply to Rock', function () {
      var rock = new Rock({width: 30});
      assert.equal(rock.width, 30);
    });

    it('should take the "height" property as defined in an object and apply to Rock', function () {
      var rock = new Rock({height: 30});
      assert.equal(rock.height, 30);
    });
  });
  context('with default attributes', function() {
    var rock = new Rock({});

    it('has a default y value', function(){
      assert.equal(rock.y, 190 - rock.height);
    });

    it('has a default width value', function(){
      assert.equal(rock.width, 25);
    });

    it('has a default height value', function(){
      assert.equal(rock.height, 25);
    });
  });

  context('with an x value off-screen left', function() {
    it('isOffScreenLeft() returns true', function() {
      var rock = new Rock({width: 25, height: 25});

      rock.x = -26;

      rock.isOffScreenLeft();

      assert.equal(true, rock.isOffScreenLeft());
    });
  });
  context('with an x value on-screen', function() {
    it('isOffScreenLeft() returns false', function() {
      var rock = new Rock({width: 25, height: 25});

      rock.x = 100;

      rock.isOffScreenLeft();

      assert.equal(false, rock.isOffScreenLeft());
    });
  });

  context('Movement function "moveLeft()""', function () {

    it('should have a method called "moveLeft()', function () {
      var rock = new Rock({});
      assert.isFunction(rock.moveLeft);
    });

    it('"moveLeft()" should decrement the "x" property by 6', function () {
      var rock = new Rock({});

      rock.speed = 6;
      rock.x = 100;
      rock.moveLeft();

      assert.equal(94, rock.x);
    });
  });

  context('Different sized rock', function () {

    it('should have a method called "small"', function () {
      var rock = new Rock({});
      assert.isFunction(rock.small);
    });

    it('"small" should make a small Rock', function () {
      var rock = new Rock({width: 25, height: 25});
      rock.small();
      assert.equal(rock.width, 25, rock.height, 25);
    });

    it('should have a method called "medium"', function () {
      var rock = new Rock({});
      assert.isFunction(rock.medium);
    });

    it('"medium" should make a medium Rock', function () {
      var rock = new Rock({width: 35, height: 35});
      rock.medium();
      assert.equal(rock.width, 35, rock.height, 35);
    });

    it('should have a method called "large"', function () {
      var rock = new Rock({});
      assert.isFunction(rock.large);
    });

    it('"large" should make a large Rock', function () {
      var rock = new Rock({width: 40, height: 40});
      rock.large();
      assert.equal(rock.width, 40, rock.height, 40);
    });
  });
});
