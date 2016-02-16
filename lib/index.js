import Game from './game.js'

var context = document.getElementById("game").getContext('2d');
window.addEventListener('load', function() { new Game(context); } );
