const Game = require('../lib/game.js');
const assert = require('chai').assert;

describe('Game', function() {
    it('has a default size', function () {
        var context = document.createElement('canvas').getContext('2d');
        var game = new Game(context);

        assert.equal( game.size.x, 300 );
        assert.equal( game.size.y, 150 );
    });
});