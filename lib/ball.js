
class Ball {
  constructor (properties, world) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 16;
    this.width = properties.width || 16;
    this.x = properties.x || 442;
    this.y = properties.y || 434;
    this.speed = properties.speed || 4;
    this.world = world;
    this.onRightWall = false;
    this.onTopWall = false;
    this.onLeftWall = false;
    this.onBottomWall = false;
  };

  moveBall() {
    // if (this.x < 900)
    // return this.moveUpAndRight();
    this.y = this.y - this.speed + 1;
    this.x = this.x + this.speed;
    //
    // if(this.x + this.width >= 900)
    // return this.moveBallUpAndLeft();

    // if(ball.x + ball.speed >= world.width || ball.x + ball.speed <= canvas.x) {
    //   return ball.speed = -ball.speed;
    // };
    // if(ball.y + ball.speed >= world.height || ball.y + ball.speed <= canvas.y) {
    //   return ball.speed = -ball.speed;
    // };

  };

  moveBallUpAndLeft() {
    this.x = this.x - 20;
    this.y = this.y - this.speed + 1;
    return this.y, this.x;
  };

  moveUpAndRight() {
    this.x = this.x + this.speed;
    this.y = this.y - this.speed + 1;
    return this.y, this.x;
  };

  moveDownAndLeft() {
    this.x = this.x - this.speed;
    this.y = this.y + this.speed - 1;
    return this.y, this.x;
  };

  moveDownAndRight() {
    this.x = this.x + this.speed;
    this.y = this.y + this.speed - 1;
    return this.y, this.x;
  };

  checkRightWallCollision() {
    if (this.x + this.width >= 900)
    // if (result) this.onRightWall = true;
    return this.moveBallUpAndLeft ();
    // return result;
  }

};

module.exports = Ball;
