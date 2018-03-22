const chai = require('chai');
const expect = chai.expect;
const Bells = require('../lib/Bells');
const Rabbit = require('../lib/Rabbit');
const Game = require('../lib/Game');


describe('Game', () => {
  let game;

  beforeEach(() => {
    let context = 0;

    game = new Game(context);
  });

  it('should instantiate our good friend Game', () => {
    expect('Game').to.exist;
  });

  it('should instantiate a new instance of our wonderful friend Rabbit', () => {
    expect(Rabbit).to.exist;
  });

  it('should have a property of score with and intial value of 0', () => {
    expect(game.score).to.equal(0);
  });

  it('should have a property of bells with an initial value of an empty array', () => {
    expect(game.bells).to.deep.equal([]);
  });

  it('should have a property of runGameLoop with an intial value false', () => {
    expect(game.runGameLoop).to.equal(false);
  });

  it.skip('should add 10 to the score everytime you hit a bell', () => {
    game.score = 0;

    game.scoring();

    expect(game.score).to.equal(10);
  });

  it.skip('should shift all bells downwrd on contact', () => {
    game.bells = [0,0];

    game.scrolling(rabbit, game.bells);
        
    expect(game.bells).to.equal([0, 75]);
  });

  it('should toggle the property of runGameLoop off and on', () => {
    game.toggleGameLoop();

    expect(game.runGameLoop).to.equal(true);
  });

  it.skip('should set the y value for rabbit back to 500 after the new level starts', () => {
    game.rabbit.y = -10;

    game.startNextLevel();

    expect(game.rabbit.y).to.equal(500);
  }); 
  // ReferenceError: $ is not defined.  Does this mean that we cannot test anything in this function?

    // bellFreaquency
    // it.'should genertate a random bell on the screen', () => {
    // }

    // drawRabbit?

    // drawBells?

    // generateRandomBells


});