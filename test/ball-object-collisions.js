const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball');


describe ('Ball Collisions with objects in the court', function(){

  context('Sensing a collision', function (){
    it('the ball should have a "isCollidingWith" function', function(){
      var ball = new Ball({});
      assert.isFunction(ball.isCollidingWith);
    });
    it('this function should return "false" if the object passed in does NOT overlap the ball', function(){
      var ball = new Ball({x:20, y:20, width: 5, height:5});
      var newBrickObj = {x: 5, y:5, width: 5, height:5};
      assert.equal(ball.isCollidingWith(newBrickObj), false);
    });
    it('this function should return "true" if the object passed in DOES overlap the ball', function(){
      var ball = new Ball({x:10, y:10, width: 5, height:5});
      var newBrickObj = {x: 5, y:5, width: 10, height: 10};
      assert.equal(ball.isCollidingWith(newBrickObj), true);
    });
  });

  context('Bouncing the correct direction', function(){
    it('the ball should have a "bounce" function', function(){
      var ball = new Ball({});
      assert.isFunction(ball.bounce);
    });
    it('should invert the Y-axis when the ball\'s left edge...uuugh', function(){

    });
  });
});
