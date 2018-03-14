let GamePiece = require('./GamePiece.js');


class Rabbit extends GamePiece {
    constructor(x, y, width, height){
        super(x, y, width, height) 
        
    }
    
    
    moveRabbit(e){
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

