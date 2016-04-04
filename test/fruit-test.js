const assert = require("chai").assert;
const Fruit = require("../lib/fruit");

describe("Fruit", function(){
  context('when created', function(){
    var fruit = new Fruit(null, 10);

    it("has a size", function(){
      assert.equal(fruit.size, 10);
    });

    it("is positioned", function(){
      assert(fruit.x);
      assert(fruit.y);
    });

  });

  context('when repositioned', function(){
    xit("its positioned according to the grid", function(){
      // assert.equal(fruit.occupiedPositions.length, 0);
    });

    xit("is positioned in a free square", function(){
      // assert.isNotTrue(fruit.over);
    });
  });
});
