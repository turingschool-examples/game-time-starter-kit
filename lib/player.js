import {drawRect} from './drawRect.js'
import Keyboarder from './keyboarder.js'
import Bullet from './bullet.js'

var Player = function(game) {
    this.game = game;
    this.size = { x: 15, y: 15};
    this.position = { x: this.game.size.x / 2,  y: this.game.size.y - 35 };
    this.keyboarder = new Keyboarder();
};

Player.prototype = {
    update: function() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            if(this.position.x > 9.5) {
                this.position.x -= 2;
            }
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            if (this.position.x < 300.5) {
                this.position.x += 2;
            }
        }

        if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
            var bullet = new Bullet(
                { x: this.position.x, y: this.position.y - this.size.y - 10 },
                { x: 0, y: -7 });
            this.game.addBody(bullet)
        }
    },

    draw: function(context) {
        drawRect(context, this);
    }
};

export default Player