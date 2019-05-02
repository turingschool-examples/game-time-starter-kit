let GamePiece = require('./GamePiece.js');


class Rabbit extends GamePiece {
    constructor(x, y, width, height){
        super(x, y, width, height) 
        this.moveRabbit = this.moveRabbit.bind(this);
    }

    draw(context){
        context.fillStlye = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height)
        return this;
    }
    
    moveRabbit(e){
        console.log(this)
        if (event.keyCode == 37) {
            console.log(event);
            console.log('left');
            // debugger;
            this.x -= 2;
        } else if (event.keyCode == 39) {
            console.log('right');
            this.x += 2;
        }
    }
}

module.exports = Rabbit;

