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
    });
});
