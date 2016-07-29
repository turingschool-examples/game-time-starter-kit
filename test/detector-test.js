const assert = require('chai').assert;
const Ball = require('../lib/ball');
const Detector = require('../lib/detector')
const World = require('../lib/world')

describe('The ball can collide with right wall', function () {
  let world = new World
  let detector = new Detector
  let ball = new Ball({}, world);
  ball.x = 890
  ball.y = 100
  let wall_result = detector.checkRightWallCollision(ball)
  let ball_result = ball.on_right_wall
  //inverse y axis when ball hits wall
  //x axis remains the same
  assert.equal(wall_result, true)
  assert.equal(ball_result, true)
})
