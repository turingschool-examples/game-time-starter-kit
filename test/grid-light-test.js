const assert = require('chai').assert;
const Grid = require('../lib/grid');
const Light = require('../lib/light');















// describe('Light in relation to the Grid', function() {
//
//   it('should know about a grid if it is passed in', function () {
//     var grid = new Grid(500, 500);
//     var light = new Light(1, 1, 100, 100, true || false, grid);
//     assert.equal(light.grid, grid);
//   });
//
//   it('should know about a grid if it is created using grid.addLight()', function() {
//     var grid = new Grid(500, 500);
//     var light = new Light(1, 1, 100, 100, true || false);
//     grid.addLight(light);
//     assert.equal(light.grid, grid);
//   });
//
// });
//
// describe('Grid in relation to the Light', function() {
//
//   it('should have a method called addLight()', function() {
//     var grid = new Grid(500, 500);
//     assert.isFunction(grid.addLight);
//   })
//
//   it('should know about the lights added to the grid', function (){
//     var grid = new Grid(500, 500);
//     var light = new Light(1, 1, 100, 100, true || false);
//
//     grid.addLight(light);
//     assert.include(grid.lights, light);
//   })
