var assert = require('chai').assert;
var Car = require('../lib/cars.js');

describe('Cars', function() {

  it('should be a function', function() {
    assert.isFunction(Car);
  });

  it('"Cars" should take a variable for x and y', function() {
    var car = new Car();
    assert.equal(car.x, 150);
    assert.equal(car.y, 200);
  });

  it('should have a method called "carDraw" that puts it on the canvas', function() {
    var car = new Car();
    assert.isFunction(car.carDraw);
  });

  it('should have a method called "carMove"', function() {
    var car = new Car
    assert.isFunction(car.carMove);
  });

  // it('"Cars", should have a width, height, and color', function(){
  //   var car = new Car();
  //   assert.equal(car.width, width);
  // });
})
