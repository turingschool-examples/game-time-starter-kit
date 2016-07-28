const assert = require('chai').assert;

const Brick = require('../lib/brick');

describe('Brick', function() {
  context('checks default values', function() {

    it('has default values', function() {
      var brick = new Brick

      assert.equal(brick.height, 5);
      assert.equal(brick.width, 10);
      assert.equal(brick.x, 100);
      assert.equal(brick.y, 100);
    });
  });

  context('check that we can set all values of brick', function() {

    var heightValue = 20;
    var widthValue = 30;
    var xValue = 60;
    var yValue = 40;
    var properties = {
      height: heightValue,
      width: widthValue,
      x: xValue,
      y: yValue
    };

    const ball = new Ball(properties);

    it('assigns xValue to brick x', function () {
      assert.equal(brick.x, xValue);
    })

    it('assigns yValue to the brick y', function() {
      assert.equal(brick.y, yValue);
    })

    it('assigns heightValue to the brick height', function() {
      assert.equal(brick.height, heightValue);
    })

    it('assigns widthValue to the brick width', function() {
      assert.equal(brick.width, widthValue);
    })
  })
});
