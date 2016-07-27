const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const Brick = require('../lib/bricks');

function World(width, height, paddle, ball) {
  this.width = width;
  this.height = height;
  this.bricks = [];
  this.paddle = new Paddle({});
  this.ball = new Ball({});
}

World.prototype.addLevel = function(level) {
  level.world = this;
  this.bodies.push(level);
};

World.prototype.addBrick = function() {
  this.bricks.push(new Brick({}));
};

// World.prototype.

module.exports = World;
// World.prototype.entities = function() {
//   // arrayBricks.concat(paddle, ball);
// };

//add a couple of for loops, one looks at columns, one looks at rows, finds a char and adds
// a brick there

// on the bricks array, forEach(##) fillrect black/h/w
