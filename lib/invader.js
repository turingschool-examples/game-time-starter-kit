import {drawRect} from './drawRect'
import Bullet from './bullet'

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

        if (Math.random() > 0.995 ) {
            var bullet = new Bullet(
                { x: this.position.x, y: this.position.y + this.size.y / 2 },
                { x: Math.random() - 0.5, y: 2 } );
            this.game.addBody(bullet);
        }

        this.position.x += this.speed;
        this.horizontalPatrol += this.speed;
    },

    draw: function (context) {
        drawRect(context, this);
    }
};

export default Invader