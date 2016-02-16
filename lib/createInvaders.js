import Invader from './invader.js'

export function createInvaders(game) {
    var invaders = [];
    for (var i = 0; i < 24; i++) {
        var x = 20 + (i % 8) * 30;
        var y = 30 + (i % 3) * 30;
        invaders.push(new Invader(game, {x: x, y: y}));
    }
    return invaders;
}