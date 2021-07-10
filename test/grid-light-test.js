const assert = require('chai').assert;
const Grid = require('../lib/grid');
const Light = require('../lib/light');


describe('Grid in relation to the Light', function() {

  it('should have a method called addLight()', function() {
    var grid = new Grid();
    assert.isFunction(grid.addLight);
  })


  it('should know about the states of the lights added to the grid', function () {
    var grid = new Grid();
    var onLight = new Light(true);
    var offLight = new Light(false);

    assert.isObject(grid.addLight(true));
    assert.equal(grid.addLight(true).state, true);
    assert.equal(grid.addLight(true).state, onLight.state);
    assert.equal(grid.addLight(false).state, false);
    assert.equal(grid.addLight(false).state, offLight.state);
  });
});

describe('Creating a new game within the grid', function() {

  it('should have a function that creates a new game', function() {
    var grid = new Grid(0);

    var expected = [
      [new Light(true), new Light(false), new Light(true)],
      [new Light(true), new Light(false), new Light(false)]
    ];

    assert.isFunction(grid.createGame);

    grid.createGame();

    assert.deepEqual(grid.game, expected);
    assert.equal(grid.game[0][0].state, true);
    assert.equal(grid.game[0][1].state, false);
  });


  it('should have the ability to change the state of the light', function() {
    var grid = new Grid(0);

    var expected = [
      [new Light(true), new Light(false), new Light(true)],
      [new Light(true), new Light(false), new Light(false)]
    ];
    
    grid.createGame();

    assert.equal(grid.game[0][0].state, true);

    grid.changeLightState(1);

    assert.equal(grid.game[0][0].state, false);
  });

  //and set the state of each bulb to on or off'
});
