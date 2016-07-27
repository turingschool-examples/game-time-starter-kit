const canvas = document.getElementById('surfer-game');
const context = canvas.getContext('2d');

const Rock = require('./rocks');
const Surfer = require('./surfer');
const World = require('./world');

var world = new World(canvas.width, canvas.height);
world.surfer(new Surfer({}));


// Surfer.prototype.spacebarWasPressed() {
//
// };
