function Collision(rocks, surfer) {
  this.rocks = rocks;
  this.surfer = surfer;
}

Collision.prototype.checkRocks = function() {
  this.rocks.forEach(function(rock) {
    this.isCollision(rock);
  }.bind(this));
};

Collision.prototype.isCollision = function(rock) {
  var frontsTouching = rock.x < this.surfer.right;
  var backsTouching = rock.right > this.surfer.x;
  var surferBottomTouchingRockTop = rock.y < this.surfer.bottom;
  // var surferTopTouchingRockBottom = rock.bottom > this.surfer.y;
  if (frontsTouching && backsTouching && surferBottomTouchingRockTop) {
    console.log('collision');
    // gameOver();
    // return true;
  }
};

module.exports = Collision;
