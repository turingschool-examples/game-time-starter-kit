var collisionDetect = function(ball, gate) {
  if (ball.y + 5 > gate.y && ball.y < gate.y + 10 && ball.x > gate.gateEnd) {
    ball.y = gate.y - 5;
  };
  if (ball.y + 5 > gate.y && ball.y < gate.y + 10 && ball.x < gate.gateStart) {
    ball.y = gate.y - 5;
  };
}

module.exports = collisionDetect;
