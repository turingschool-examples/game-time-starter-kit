const Ball = require('./ball');
const World = require('./world')

class Detector {
  // checkRightWallCollision() {
  //   let ball = new Ball
  //   let result = ball.x + ball.width >= world.width;
  //   if (result) ball.onRightWall = true;
  //   return ball.moveBallUpAndLeft ();
  //   // return result;
  // }
  checkTopWallCollision(ball) {
    let result = ball.y <= -1;
    if (result) ball.onTopWall = true;
    return result;
  }

  checkLeftWallCollision(ball) {
    let result = ball.x <= -1;
    if (result) ball.onLeftWall = true;
    return result
  }

  checkBottomWallCollision(ball) {
    let result = ball.y + ball.height >= ball.world.height;
    if (result) ball.onBottomWall = true;
    return result
  }
}

module.exports = Detector;

/*
  for each brick, if ball collides with brick, remove brick
  for each paddle, if ball collides with paddle, reverse direction of ball

  some function -> (ball, brick) {
    does ball collide with brick?
  }

  some function -> (ball, paddle) {
    does ball collide with paddle?
  }

  ////

  some awesome function -> (ball, object) {
    does ball collide with object?
  }

  for each paddle/brick -> some awesome function(ball, paddle/brick) => true/false


  if (collision) {
    do a thing
  else
    do something else
  }
*/
