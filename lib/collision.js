function Collision(surfer) {
  this.surfer = surfer;
}

Collision.prototype.checkForCollision = function(obstacles) {
  // obstacles.forEach(function(obstacle) {
  //   this.isCollision(obstacle);
  // }.bind(this));
  obstacles.forEach(this.isCollision.bind(this));
};

Collision.prototype.isCollision = function(obstacle) {
  var frontsTouching = obstacle.x < this.surfer.right;
  var backsTouching = obstacle.right > this.surfer.x;
  var surferBottomTouchingObstacleTop = obstacle.y < this.surfer.bottom;

  if (frontsTouching && backsTouching && surferBottomTouchingObstacleTop) {
    console.log('collision');
    return true;
  }
  return false;
};

// Collision.prototype.gameOver = function() {
//   console.log('Game Over');
// // display message - game over on screen
// // hit space to start new game
// // trigger reset game function
// };

// Collision.prototype.resetGame = function() {
//
// };

module.exports = Collision;
