import {createInvaders} from './createInvaders'
import Player from './player'
import Invader from './invader'

var Game = function(context) {
    this.size = { x: context.canvas.width, y: context.canvas.height};
    this.bodies = createInvaders(this).concat(new Player(this));
    var game = this;

    var gameLoop = function() {
        game.draw(context);
        game.update();
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
    },

    checkBelow: function(invader) {
        return this.bodies.filter(function(b) {
                return b instanceof Invader &&
                    Math.abs(invader.position.x - b.position.x) < b.size.x &&
                    b.position.y > invader.position.y;
            } ).length > 0;
    }
};

export default Game
