const assert = require('chai').assert;
const Ball = require('../lib/ball');

describe('Ball', function() {
  context('checks default values', function() {

    let ball = new Ball;

    it('has default values', function() {
      assert.equal(ball.height, 16);
      assert.equal(ball.width, 16);
      assert.equal(ball.x, 442);
      assert.equal(ball.y, 434);
    });
  });

  context('check that set all values of ball', function() {

    let heightValue = 7;
    let widthValue = 7;
    let xValue = 20;
    let yValue = 20;
    let properties = {
      height: heightValue,
      width: widthValue,
      x: xValue,
      y: yValue
    };

    const ball = new Ball(properties);

    it('assigns xValue to the ball x', function() {
      assert.equal(ball.x, xValue);
    });

    it('assigns yValue to the ball y', function() {
      assert.equal(ball.y, yValue);
    });

    it('assigns heightValue to the ball height', function() {
      assert.equal(ball.height, heightValue);
    });

    it('assigns widthValue to the ball width', function() {
      assert.equal(ball.width, widthValue);
    });
  });

  context('check that the ball methods exist', function() {
  //   it('should have a method called "moveUp()"', function() {
  //     let ball = new Ball;
  //     assert.isFunction(ball.moveUp)
  //   });
  //
  //   it('should have a method called "moveDown()"', function() {
  //     let ball = new Ball;
  //     assert.isFunction(ball.moveDown)
  //   });
  //
  //   it('should have a method called "moveUpAndRight()"', function() {
  //     let ball = new Ball;
  //     assert.isFunction(ball.moveUpAndRight)
  //   });
  //
  //   it('should have a method called "moveUpAndLeft()"', function() {
  //     let ball = new Ball;
  //     assert.isFunction(ball.moveUpAndLeft)
  //   });
  //
  //   it('should have a method called "moveDownAndRight()"', function() {
  //     let ball = new Ball;
  //     assert.isFunction(ball.moveUpAndRight)
  //   });
  //
  //   it('should have a method called "moveDownAndLeft()"', function() {
  //     let ball = new Ball;
  //     assert.isFunction(ball.moveUpAndLeft)
  //   });
  // });
  //
  // context('ball should move along the x and y axis', function() {
  //   it('should move one up on the y axis', function() {
  //     let ball = new Ball;
  //     ball.moveUp();
  //     assert.equal(ball.y, 31)
  //   });
  //
  //   it('should move one down on the y axis', function() {
  //     let ball = new Ball;
  //     ball.moveDown();
  //     assert.equal(ball.y, 29)
  //   });
  //
  //   it('should move one up and one to the left on the y and x axis', function () {
  //     let ball = new Ball;
  //     ball.moveUpAndLeft();
  //     assert.equal(ball.y, 31)
  //     assert.equal(ball.x, 49)
  //   });
  //
  //   it('should move one up and one to the right on the y and x axis', function() {
  //     let ball = new Ball;
  //     ball.moveUpAndRight();
  //     assert.equal(ball.y, 31)
  //     assert.equal(ball.x, 51)
  //   });
  //
  //   it('should move one down and one to the left on the y and x axis', function () {
  //     let ball = new Ball;
  //     ball.moveDownAndLeft();
  //     assert.equal(ball.y, 29)
  //     assert.equal(ball.x, 49)
  //   });
  //
  //   it('should move one down and one to the right on the y and x axis', function () {
  //     let ball = new Ball;
  //     ball.moveDownAndRight();
  //     assert.equal(ball.y, 29)
  //     assert.equal(ball.x, 51)
  //   });
  });
});
