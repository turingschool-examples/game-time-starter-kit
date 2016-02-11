import Bullet from './bullet.js'
import Invader from './invader.js'
import Game from './game.js'
import {drawRect} from './drawRect.js'

var context = document.getElementById("game").getContext('2d');
window.addEventListener('load', function() {
    new Game(context);
});
