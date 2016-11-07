var assert = require('chai').assert;
var Car = require('../lib/cars.js');

describe('Cars', function() {

  it('should be a function', function() {
    assert.isFunction(Car);
  });

  it('"Cars" should take a variable for x', function() {
    var car = new Car(150, 200);
    assert.equal(car.x, 150);
  });

  it('"Cars" should take a variable for y', function() {
    var car = new Car(150, 200);
    assert.equal(car.y, 200);
  });

  it('should have a method called "carDraw1" that puts car1 on the canvas', function() {
    var car = new Car(150, 200);
    assert.isFunction(car.carDraw1);
  });

  it('should have a method called "carDraw2" that puts car2 on the canvas', function() {
    var car = new Car(150, 200);
    assert.isFunction(car.carDraw2);
  });

  it('should have a method called "carDraw3" that puts car3 on the canvas', function() {
    var car = new Car(150, 200);
    assert.isFunction(car.carDraw3);
  });

  it('should have a method called "carDraw4" that puts car4 on the canvas', function() {
    var car = new Car(150, 200);
    assert.isFunction(car.carDraw4);
  });

  it('should have a method called "carMove"', function() {
    var car = new Car(150, 200);
    assert.isFunction(car.carMove);
  });

});
