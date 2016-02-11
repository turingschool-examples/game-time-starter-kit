import {drawRect} from './drawRect.js'

var Invader = function(game, position) {
    this.game = game;
    this.position = position;
    this.size = { x: 15, y: 15 };
    this.horizontalPatrol = 0;
    this.speed = 0.8;
};

Invader.prototype = {
    update: function() {
        if (this.horizontalPatrol < 0 || this.horizontalPatrol > 60) {
            this.position.y += 5;
            this.speed = -this.speed;
        }
        this.position.x += this.speed;
        this.horizontalPatrol += this.speed;
    },
    draw: function (context) {
        drawRect(context, this);
    }
};

export default Invader