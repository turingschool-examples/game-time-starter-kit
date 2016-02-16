var collisionDetect = function(ball, gates, score) {
  for (var i = 0; i < gates.length; i++){

    var centerOfBall = ball.y
    var bottomOfBall = centerOfBall + ball.r
    var centerOfGate = gates[i].y
    var topOfGate = centerOfGate - (gates[i].gateHeight / 2)
    var bottomOfGate = centerOfGate + (gates[i].gateHeight / 2)
    var rightGate = gates[i].gateEnd
    var leftGate = gates[i].gateStart
    debugger;

    if (bottomOfBall > centerOfGate && centerOfBall < bottomOfGate && ball.x > rightGate ) {
      ball.y = topOfGate;
    };
    if (bottomOfBall > centerOfGate && centerOfBall < bottomOfGate && ball.x < leftGate) {
      ball.y = topOfGate;
    };
    if (bottomOfBall > centerOfGate && centerOfBall < bottomOfGate + 6 && ball.x > leftGate + 2 && ball.x < rightGate + 2){
      score.push(1)
  };
}
}

module.exports = collisionDetect;
