const assert = require('chai').assert;
const Ball = require('../lib/ball');

describe('Ball', function() {

  context('with default attributes', function() {

    var ball = new Ball({});
// ctx.beginPath();
// ctx.arc(50,50,8,0,2*Math.PI);
// x,y,r,sAngle,eAngle,counterclockwise
// ctx.stroke();
// ctx.fillStyle = 'blue';
// ctx.fill();
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

});
