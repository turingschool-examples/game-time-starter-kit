const Game = require('./game');


function Collision(rocks, surfer) {
  this.rocks = rocks;
  this.surfer = surfer;
}

Collision.prototype.checkRocks = function() {
  this.rocks.forEach(function(rock) {
    this.isCollision(rock);
  }.bind(this));
};

Collision.prototype.isCollision = function(obstacle) {
  var frontsTouching = obstacle.x < this.surfer.right;
  var backsTouching = obstacle.right > this.surfer.x;
  var surferBottomTouchingObstacleTop = obstacle.y < this.surfer.bottom;
  // var surferTopTouchingObstacleBottom = obstacle.bottom > this.surfer.y;
  if (frontsTouching && backsTouching && surferBottomTouchingObstacleTop) {
    console.log('collision');
    // this.gameOver();
    // return true;
  }
};

Collision.prototype.gameOver = function() {
  console.log('Game Over');
// display message - game over on screen
// hit space to start new game
// trigger reset game function
};

// Collision.prototype.resetGame = function() {
//
// };

module.exports = Collision;
