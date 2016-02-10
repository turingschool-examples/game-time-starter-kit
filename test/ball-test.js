const assert = require('chai').assert;
const Ball = require('../lib/ball');


describe('Ball', function() {
  // var canvas = document.getElementById("game");
  // var ctx = canvas.getContext('2d');

  context('with default attributes', function() {

    var ball = new Ball({}, { width: 1000, height: 600 });

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 8);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 8);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 8);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('with other values', function() {

    var ball = new Ball({ r: 15,
                          x: 20,
                          y: 30,
                          sAngle: 20,
                          eAngle: 40
                        },
                        { width: 1000,
                          height: 600
                        });

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 20);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 15);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 30);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('with zero radius', function() {

    var ball = new Ball({ r: 0 }, { width: 1000, height: 600 });

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 8);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 8);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 8);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('will override angle options', function() {

    var ball = new Ball({ sAngle: 10, eAngel:2 }, { width: 1000, height: 600 });

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 8);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 8);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 8);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('with negative radius', function() {

    var ball = new Ball({ r: -10 }, { width: 1000, height: 600 });

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 8);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 8);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 8);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('draw', function() {

    var ball = new Ball({}, { width: 1000, height: 600 });

    it('should be drawn', function() {
      ball.draw
      assert.equal(ball.x, 8);
    });

  });

});
