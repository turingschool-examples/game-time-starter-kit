function Collision(surfer) {
  this.surfer = surfer;
}

Collision.prototype.checkForCollision = function(obstacles) {
  return obstacles.find(function(obstacle) {
    return this.isCollision(obstacle);
  }, this);
  // obstacles.forEach(this.isCollision.bind(this));
};

Collision.prototype.isCollision = function(obstacle) {
  var frontsTouching = obstacle.x < this.surfer.right;
  var backsTouching = obstacle.right > this.surfer.x;
  var surferBottomTouchingObstacleTop = obstacle.y < this.surfer.bottom;

  if (frontsTouching && backsTouching && surferBottomTouchingObstacleTop) {
    return true;
  }
  return false;
};

module.exports = Collision;
