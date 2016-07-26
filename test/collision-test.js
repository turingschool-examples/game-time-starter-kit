// // test/game-test.js

// //could use var but we were feeling fancy and used const
const assert = require('chai').assert;
// //SAME AS ABOVE
// // const chai = require('chai');
// // const assert = chai.assert;
const Rock = require('../lib/rocks');
const Surfer = require('../lib/surfer');
const World = require('../lib/world');


describe('when surfing', function() {
  context('when surfer hits a rock', function() {

    it('the game is over', function(){
      let surfer = new Surfer({});
      let rock = new Rock({});
      let world = new World(300, 500, surfer, [rock]);

      surfer.x = 20;
      rock.x = 20;

      assert.equal(true, world.isCollision());
    });
    // it('has a default x value', function(){
    //   assert.equal(rock.x, 20);
    // });
    // it('has a default y value', function(){
    //   assert.equal(rock.y, -110);
    // });
    // it('has a default width value', function(){
    //   assert.equal(rock.width, 20);
    // });
    // it('has a default height value', function(){
    //   assert.equal(rock.height, 30);
  });
});



// describe('Rock', function() {
//   context('with default attributes', function() {
//     var rock = new Rock({});
//     it('has a default x value', function(){
//       assert.equal(rock.x, 20);
//     });
//     it('has a default y value', function(){
//       assert.equal(rock.y, -110);
//     });
//     it('has a default width value', function(){
//       assert.equal(rock.width, 20);
//     });
//     it('has a default height value', function(){
//       assert.equal(rock.height, 30);
//     });
//   });
// });


describe('World', function() {

});











//   context('with some assigned attributes', function() {
//     it('should allow me to assign specific values and otherwise use defaults', function (){
//       // var dingus = new Dingus(xValue, yValue, heightValue, widthValue);
//       var heightValue = 25;
//       var widthValue = 100;
//       var options = { height: heightValue, width: widthValue };
//       var dingus = new Dingus(options);
//       assert.equal(dingus.x, 5);
//       assert.equal(dingus.y, 5);
//       assert.equal(dingus.height, heightValue);
//       assert.equal(dingus.width, widthValue);
//     });
//   });
//   //
//   context('with all assigned attributes', function(){
//     var xValue = 57;
//     var yValue = 8;
//     var heightValue = 42;
//     var widthValue = 21;
//     var options = {
//       x: xValue,
//       y: yValue,
//       height: heightValue,
//       width: widthValue };
//     var dingus = new Dingus(options);
//       it('assigns the xValue passed in as the dingus x', function(){
//         assert.equal(dingus.x, xValue);
//       });
//       it('assigns the yValue passed in as the dingus y', function(){
//         assert.equal(dingus.y, yValue);
//       });
//       it('assigns the heightValue passed in as the dingus height', function(){
//         assert.equal(dingus.height, heightValue);
//       });
//       it('assigns the yValue passed in as the dingus y', function(){
//         assert.equal(dingus.width, widthValue);
//       });
//   });
//   describe('scoot()', function(){
//     it('increases the x coordinate by 1', function() {
//       var xValue = 3;
//       var dingus = new Dingus({x: xValue});
//       assert.equal(dingus.x, xValue);
//       dingus.scoot();
//       assert.equal(dingus.x, xValue + 1);
//     });
//   });
// });
