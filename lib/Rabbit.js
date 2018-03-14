let GamePiece = require('./GamePiece.js');


class Rabbit extends GamePiece {
    constructor(x, y, width, height){
        super(x, y, width, height) 
        
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height)
        return this;
    }
    
    moveRabbit(e){
        window.addEventListener('keydown', moveRabbit);
        console.log('move');
        switch(e.keycode){
            case 37:
                this.x--;
            break;
            case 39:
                this.x++;
            break;
        }
    }
}

module.exports = Rabbit;

