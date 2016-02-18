var collisionDetect = function(ball, gates, score, game) {
  for (var i = 0; i < gates.length; i++){

    var centerOfBall = ball.y
    var bottomOfBall = centerOfBall + ball.r
    var topOfBall = centerOfBall + ball.r
    var gate = gates[i]
    var centerOfGate = gates[i].y
    var topOfGate = centerOfGate - (gates[i].gateHeight / 2)
    var bottomOfGate = centerOfGate + (gates[i].gateHeight / 2)
    var rightGate = gates[i].gateEnd
    var leftGate = gates[i].gateStart

    if (bottomOfBall > centerOfGate && centerOfBall < bottomOfGate && ball.x > rightGate ) {
      ball.y = topOfGate;
      return;
    };
    if (bottomOfBall > centerOfGate && centerOfBall < bottomOfGate && ball.x < leftGate) {
      ball.y = topOfGate;
      return;
    };
    if (bottomOfGate < topOfBall && gate.scoreable === true){

      game.score++
      gate.scoreable = false
      return;

      throw new Error('None of the things happened.');
    };
  }
}

module.exports = collisionDetect;
