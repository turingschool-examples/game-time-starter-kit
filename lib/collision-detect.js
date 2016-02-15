var collisionDetect = function(ball, gates, score) {
  for (var i = 0; i < gates.length; i++){

    var topOfBall = ball.y + 5
    var gateVert = gates[i].y
    var topOfGate = gateVert + 10
    var rightGate = gates[i].gateEnd
    var leftGate = gates[i].gateStart

    if (topOfBall > gateVert && ball.y < topOfGate && ball.x > rightGate ) {
      ball.y = gateVert - 5;
    };
    if (topOfBall > gateVert && ball.y < gateVert + 10 && ball.x < leftGate) {
      ball.y = gates[i].y - 5;
    };
    if (ball.y + 5 > gateVert && ball.y < topOfGate + 3 && ball.x > leftGate + 2 && ball.x < rightGate + 2){
      score.push(1)
  };
}
}

module.exports = collisionDetect;
