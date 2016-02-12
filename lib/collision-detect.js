var collisionDetect = function(ball, gates) {
  for (var i = 0; i < gates.length; i++){
    var topOfBall = ball.y + 5
    var gateVert = gates[i].y
    var topOfGate = gateVert + 10
    var rightGate = gates[i].gateEnd
    var leftGate = gates[i].gateStart

    if (topOfBall > gateVert && ball.y < topOfGate && ball.x > rightGate ) {
      ball.y = gateVert - 5;
    };
    if (ball.y + 5 > gateVert && ball.y < gateVert + 10 && ball.x < leftGate) {
      ball.y = gates[i].y - 5;
    };
  };
}

module.exports = collisionDetect;
