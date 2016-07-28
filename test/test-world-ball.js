const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball');
const World = require('../lib/world');
describe('Objects in the world', function() {
  context('Ball in the relation to the world', function() {
    it('the ball should know about the world if it gets pased in', function() {
      var pickles = new World(500, 500);
      var ball = new Ball({world: pickles});
      assert.equal(ball.world, pickles);
    });
  });
  context('World in relation to the ball', function() {
    it('should create a new ball when a new world is created', function() {
      var world = new World(500, 500);
      assert.isObject(world.ball);
    });
    it('should create a new ball with default width', function(){
      var world = new World(500, 500);
      assert.equal(world.ball.width, 10);
    });
  });
});



//
//   skip.it('should know about the blocks added to the world', function () {
//     var world = new World(100, 100);
//     var block = new Block(0, 0, 10, 10);
//
//     world.addBlock(block);
//     assert.include(world.blocks, block);
//   });
//
//   skip.it('should have a method called addEnemy()', function () {
//     var world = new World(100, 100);
//     assert.isFunction(world.addEnemy);
//   });
//
//   skip.it('should know about the enemies added to the world', function () {
//     var world = new World(100, 100);
//     var enemy = new Block(0, 0, 10, 10);
//
//     world.addEnemy(enemy);
//     assert.include(world.enemies, enemy);
//   });
//
//   skip.it('should have a rightArrowWasPressed() method', function () {
//     var world = new World(100, 100);
//     assert.isFunction(world.rightArrowWasPressed);
//   });
//
//   skip.it('should move all the blocks right when rightArrowWasPressed() is called', function () {
//     var world = new World(100, 100);
//     var block = new Block(0, 0, 10, 10);
//     world.addBlock(block);
//
//     world.rightArrowWasPressed();
//
//     assert.equal(block.x, 1);
//   });
//
//   skip.it('should not move all the enemies right when rightArrowWasPressed() is called', function () {
//     var world = new World(100, 100);
//     var enemy = new Block(0, 0, 10, 10);
//     world.addEnemy(enemy);
//
//     world.rightArrowWasPressed();
//
//     assert.equal(enemy.x, 0);
//   });
//
//   skip.it('should have a method called isBlockyColliding()', function () {
//     var world = new World(100, 100);
//     assert.isFunction(world.isBlockyColliding);
//   });
//
//   skip.it('should return the enemy Blocky is colliding with', function () {
//     var world = new World(100, 100);
//     var blocky = new Block(0, 0, 10, 10);
//     var enemy = new Block(1, 1, 10, 10);
//
//     world.addBlock(blocky);
//     world.addEnemy(enemy);
//     assert.equal(world.isBlockyColliding(), enemy);
//   });
//
//   skip.it('should return the undefined if Blocky is not colliding', function () {
//     var world = new World(100, 100);
//     var blocky = new Block(0, 0, 10, 10);
//     var enemy = new Block(90, 90, 10, 10);
//
//     world.addBlock(blocky);
//     world.addEnemy(enemy);
//     assert.isUndefined(world.isBlockyColliding());
//   });
//
// });
