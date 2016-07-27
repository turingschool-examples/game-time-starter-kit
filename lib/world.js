function World(width, height, paddle, ball) {
  this.width = width;
  this.height = height;
  this.bricks = [];
  this.paddle = paddle;
  this.ball = ball;
}

var world = new World();

World.prototype.addLevel = function(level) {
  level.world = this;
  this.bodies.push(level);
};

World.prototype.addPaddle = function(paddle) {
  paddle.world = this;
  this.bodies.push(paddle);
};
World.prototype.entities = function() {
  // arrayBricks.concat(paddle, ball);
};

module.exports = World;

//add a couple of for loops, one looks at columns, one looks at rows, finds a char and adds
// a brick there

// on the bricks array, forEach(##) fillrect black/h/w
