  const assert = require('chai').assert;
  const Apple = require('../lib/apple');

  describe('apple', function() {
    context('with default attributes', function() {
      var apple = new Apple();

      it('should assign a height', function(){
        assert.equal(apple.height, 10);
      });

      it('should assign a width', function(){
        assert.equal(apple.width, 10);
      });

      it('should have an x value within the worlds boundaries', function(){
        assert.isBelow(apple.x, 500);
        assert.isAbove(apple.x, 0);
      });

      it('should have a y value within the worlds boundaries', function(){
        assert.isBelow(apple.y, 500);
        assert.isAbove(apple.y, 0);
      });
    });
});
