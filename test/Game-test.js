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
    })

    it('should instantiate our good friend Game', () => {
        expect('Game').to.exist;
    })

    // it('should instantiate a new instance of our wonderful friend Rabbit', () => {
    //     expect(game.rabbit).to.exist;
    // })

    it('should have a property of score with and intial value of 0', () => {
        console.log(game.score)
        expect(game.score).to.equal(0);
    })

    it('should have a property of bells with an initial value of an empty array', () => {
        expect(game.bells).to.deep.equal([]);
    })

    it('should have a property of runGameLoop with an intial value false', () => {
        expect(game.runGameLoop).to.equal(false);
    })

    it('should add 10 to the score everytime you hit a bell', () => {
        game.score = 0;

        game.scoring();

        expect(game.score).to.equal(10);
    })
})