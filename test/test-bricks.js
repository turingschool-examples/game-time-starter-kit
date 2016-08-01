const chai = require('chai');
const assert = chai.assert;
const Brick = require('../lib/bricks.js');

describe('Brick', function(){
  context('have a default size', function(){

    var options = ({});
    var brick = new Brick(options);

    it('should have a default height of 30', function(){
      assert.equal(brick.height, 30);
    });
    it('should have a default width of 60', function() {
      assert.equal(brick.width, 60);
    });
  });
  context('accept size and position inputs', function(){

    var options = ({x:50, y:50, height:5, width:100});
    var brick = new Brick(options);

    it('should accept an x coordinate', function(){
      assert.equal(brick.x, 50);
    });

    it('should accept a y coordinate', function(){
      assert.equal(brick.y, 50);
    });

    it('should accept a non-default height', function(){
      assert.equal(brick.height, 5);
    });

    it('should accept a non-default width', function(){
      assert.equal(brick.width, 100);
    });
  });
});
