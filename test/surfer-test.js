const assert = require('chai').assert;
const Surfer = require('../lib/surfer');


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

    it('should decrement the y value and surfer bottom if given a negative velocity', function () {
      var canvaz = {height: 200};
      var surfer = new Surfer({y: 130, height: 60, canvas: canvaz});
      surfer.velocity = -13;
      surfer.gravity = 1;

      surfer.jump();

      assert.equal(117, surfer.y);
      assert.equal(177, surfer.bottom);
      assert.equal(-12, surfer.velocity);
    });

    it('should decrement the y value and surfer bottom if given a negative velocity after 2 frames', function () {
      var canvaz = {height: 200};
      var surfer = new Surfer({y: 130, height: 60, canvas: canvaz});
      surfer.velocity = -13;
      surfer.gravity = 1;

      surfer.jump();
      surfer.jump();

      assert.equal(105, surfer.y);
      assert.equal(165, surfer.bottom);
      assert.equal(-11, surfer.velocity);
    });

    it('should decrement the y value and surfer bottom should reach top of jump after 13 frames', function () {
      var canvaz = {height: 200};
      var surfer = new Surfer({y: 130, height: 60, canvas: canvaz});
      surfer.velocity = -13;
      surfer.gravity = 1;

      surfer.jump();  // 1
      surfer.jump();  // 2
      surfer.jump();  // 3
      surfer.jump();  // 4
      surfer.jump();  // 5
      surfer.jump();  // 6
      surfer.jump();  // 7
      surfer.jump();  // 8
      surfer.jump();  // 9
      surfer.jump();  // 10
      surfer.jump();  // 11
      surfer.jump();  // 12
      surfer.jump();  // 13

      assert.equal(39, surfer.y);
      assert.equal(99, surfer.bottom);
      assert.equal(0, surfer.velocity);
    });

    it('should have a method called "belowGround()"', function () {
      var surfer = new Surfer({});
      assert.isFunction(surfer.belowGround);
    });

    it('belowGround() should return false', function () {
      var canvaz = {height: 200};
      var surfer = new Surfer({y: 130, height: 60, canvas: canvaz});
      surfer.velocity = -13;

      surfer.belowGround();

      assert.equal(false, surfer.belowGround());
    });

    it('belowGround() should return true', function () {
      var canvaz = {height: 200};
      var surfer = new Surfer({y: 131, height: 60, canvas: canvaz});
      surfer.velocity = 0;
      surfer.bottom = 191;

      surfer.belowGround();

      assert.equal(true, surfer.belowGround());
    });

    it('should have a method called "up()"', function () {
      var surfer = new Surfer({});
      assert.isFunction(surfer.up);
    });

    it('up() should return true', function () {
      var surfer = new Surfer({y: 130, height: 60});
      surfer.velocity = -10;
      surfer.gravity = 1;

      surfer.up();

      assert.equal(120, surfer.y);
      assert.equal(180, surfer.bottom);
    });

    it('should have a method called "resetAtGround()"', function () {
      var surfer = new Surfer({});
      assert.isFunction(surfer.resetAtGround);
    });

    it('resetAtGround() should return true', function () {
      var surfer = new Surfer({y: 200, height: 60});
      surfer.velocity = -10;

      surfer.resetAtGround();

      assert.equal(130, surfer.y);
      assert.equal(190, surfer.bottom);
      assert.equal(0, surfer.velocity);
    });

  });
});
