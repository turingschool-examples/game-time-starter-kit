const assert = require('chai').assert;
const Ball = require('../lib/ball');
const Detector = require('../lib/detector')
const World = require('../lib/world')

describe('Ball Registers Walls', function () {
  it('check that ball hits right wall', function () {
    let world = new World
    let detector = new Detector
    let ball = new Ball({}, world);
    ball.x = 890
    ball.y = 100
    let wallResult = detector.checkRightWallCollision(ball)
    let ballResult = ball.onRightWall
    //inverse y axis when ball hits wall
    //x axis remains the same
    assert.equal(wallResult, true)
    assert.equal(ballResult, true)
  });

  it('check that ball hits top wall', function () {
    let world = new World
    let detector = new Detector
    let ball = new Ball({}, world);
    ball.x = 0;
    ball.y = 0;
    let wallResult = detector.checkTopWallCollision(ball)
    let ballResult = ball.onTopWall
  });

  it('check that ball hits left wall', function () {
    let world = new World
    let detector = new Detector
    let ball = new Ball({}, world);
    ball.x = 0;
    ball.y = 100;
    let wallResult = detector.checkLeftWallCollision(ball)
    let ballResult = ball.onLeftWall
  });

  it('check that ball hits bottom wall', function () {
    let world = new World
    let detector = new Detector
    let ball = new Ball({}, world);
    ball.x = 0;
    ball.y = 0;
    let wallResult = detector.checkBottomWallCollision(ball)
    let ballResult = ball.onBottomWall
  });
});
