import {createInvaders} from './createInvaders.js'
import Player from './player.js'

var Game = function(context) {
    this.size = { x: context.canvas.width, y: context.canvas.height};
    this.bodies = createInvaders(this).concat(new Player(this));

    var self = this;
    var gameLoop = function() {
        self.update();
        self.draw(context);
        requestAnimationFrame(gameLoop);
    };
    gameLoop();
};

Game.prototype = {
    update: function () {
        for (var i = 0; i < this.bodies.length; i++) {
            if (this.bodies[i].update !== undefined) {
                this.bodies[i].update()
            }
        }
    },
    draw: function (context) {
        context.clearRect(0, 0, this.size.x, this.size.y);
        for (var i = 0; i < this.bodies.length; i++) {
            if (this.bodies[i].draw !== undefined) {
                this.bodies[i].draw(context);
            }
        }
    },
    addBody: function (body) {
        this.bodies.push(body);
    }

};

export default Game
