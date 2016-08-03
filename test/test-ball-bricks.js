const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball');
const Brick = require('../lib/bricks');
const World = require('../lib/world');

var world = new World(500, 750);

// describe ('Ball collides with bricks', function() {
//   it('should have the status changed to 0 when the ball collides with the brick', function() {
//     var ball = new Ball ({ x: 50, y: 75});
//     var brick = new Brick ({ x: 55, y: 75, status: 1 });
//     debugger;
//     world.isBallCollidingWithBrick(brick);
//     assert.equal(brick.status, 0);
//   });
// });
