class Detector {
  checkRightWallCollision(ball) {
    var result = ball.x + ball.width >= ball.world.width;
    if (result) ball.on_right_wall = true;
    return result;
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
