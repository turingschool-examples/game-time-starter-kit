function Collision(surfer) {
  this.surfer = surfer;
}

Collision.prototype.checkForCollision = function(obstacles) {
  return obstacles.find(function(obstacle) {
    return this.isCollision(obstacle);
  }, this);
};

Collision.prototype.frontsTouching = function (obstacle) {
  return obstacle.x < this.surfer.right;
};

Collision.prototype.backsTouching = function (obstacle) {
  return obstacle.right > this.surfer.x;
};

Collision.prototype.surferBottomTouchingObstacleTop = function (obstacle) {
  return obstacle.y < this.surfer.bottom;
};

Collision.prototype.isCollision = function(obstacle) {
  return this.frontsTouching(obstacle) && this.backsTouching(obstacle) && this.surferBottomTouchingObstacleTop(obstacle);
};

module.exports = Collision;
