import {drawRect} from './drawRect.js'

var Bullet = function(position, velocity) {
    this.position = position;
    this.size = { x: 3, y: 3 };
    this.velocity = velocity;
};

Bullet.prototype = {
    update: function () {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    },

    draw: function(context) {
        drawRect(context, this);
    }
}



export default Bullet