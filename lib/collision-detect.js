var collisionDetect = function(ball, gates) {
  for (var i = 0;i < gates.length;i++){
    if (ball.y + 5 > gates[i].y && ball.y < gates[i].y + 10 && ball.x > gates[i].gateEnd) {
      ball.y = gates[i].y - 5;
      // change 5 to gateHeight
    };
    if (ball.y + 5 > gates[i].y && ball.y < gates[i].y + 10 && ball.x < gates[i].gateStart) {
      ball.y = gates[i].y - 5;
    };
  };
}

module.exports = collisionDetect;
