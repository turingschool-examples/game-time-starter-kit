// test/rocks-test.js //
const assert = require('chai').assert;
const Rock = require('../lib/rocks');

describe('Rock', function() {

  context('Variable checking', function () {
    it('Rock should be a function', function () {
      assert.isFunction(Rock);
    });

    it('should create a new rock', function () {
      var avgRock = new Rock({});
      assert.isObject(avgRock);
    });

    it('should take the "x" property as defined in an object and apply to Rock', function () {
      var avgRock = new Rock({x: 10});
      assert.equal(avgRock.x, 10);
    });

    it('should take the "y" property as defined in an object and apply to Rock', function () {
      var avgRock = new Rock({y: 10});
      assert.equal(avgRock.y, 10);
    });

    it('should take the "width" property as defined in an object and apply to Rock', function () {
      var avgRock = new Rock({width: 30});
      assert.equal(avgRock.width, 30);
    });

    it('should take the "height" property as defined in an object and apply to Rock', function () {
      var avgRock = new Rock({height: 30});
      assert.equal(avgRock.height, 30);
    });
    it('should take the "x" and "width" property as defined in an object and output a "right" side x value for the Rock', function () {
      var avgRock = new Rock({x: 30, width: 50});
      assert.equal(avgRock.right, 80);
    });
  });
  context('with default attributes', function() {
    var rock = new Rock({});

    it('has a default x value', function(){
      assert.equal(rock.x, 625);
    });

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

  context('with an x value off-screen left and a default width', function() {
    it('completely clears the game screen to the left', function() {
      var rock = new Rock({x: -25});

      rock.isOffScreenLeft();

      assert.equal(rock.right, 0);
    });
  });

  context('with an x value off-screen right and a default width', function() {
    it('completely clears the game screen to the right', function() {
      var rock = new Rock({x: 625});

      rock.isOffScreenRight();

      assert.equal(rock.x, 625);
    });
  });

  context('Movement function "moveLeft()""', function () {

    it('should have a method called "moveLeft()', function () {
      var avgRock = new Rock({x: 100});
      assert.isFunction(avgRock.moveLeft);
    });

    it('"moveLeft()" should decrement the "x" property by 10', function () {
      var avgRock = new Rock({x: 100});
      avgRock.moveLeft();
      assert.equal(avgRock.x, 97);
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
      var rock = new Rock({width: 40, height: 40});
      rock.medium();
      assert.equal(rock.width, 40, rock.height, 40);
    });

    it('should have a method called "large"', function () {
      var rock = new Rock({});
      assert.isFunction(rock.large);
    });

    it('"large" should make a large Rock', function () {
      var rock = new Rock({width: 55, height: 55});
      rock.large();
      assert.equal(rock.width, 55, rock.height, 55);
    });
  });
});
