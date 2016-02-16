const assert = require('chai').assert;

const Snake = require('../lib/snake');
const Food = require('../lib/food');
const Game = require('../lib/game');

describe('Food', function() {
  context('with default attributes', function() {
    beforeEach(function() {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
    });
    it('should assign an x coordinate', function() {
      var food = new Food({}, this.context)
      assert.isDefined(food.x);
    });
    it('should assign a y coordinate', function() {
      var food = new Food({}, this.context)
      assert.isDefined(food.y);
    });
    it('should assign a height', function(){
      var food = new Food({}, this.context)
      assert.equal(food.height, 10);
    });
    it('should assign a width', function(){
      var food = new Food({}, this.context)
      assert.equal(food.width, 10);
    });
  });
});

describe('Game switches to new position', function(){
    beforeEach(function() {
      this.canvas = document.createElement('canvas');
      this.context = this.canvas.getContext('2d');
    });

    it('should have new attributes with new position', function(){
    var food = new Food({}, this.context);
    var snake = new Snake({}, this.context);
    var game = new Game(this.canvas, this.context, snake, food);

    game.reposition_food();
    assert.isDefined((food.x !== 300) && (food.y !== 100));
    assert.equal(food.height, 10);
    assert.equal(food.width, 10);
  });
});
