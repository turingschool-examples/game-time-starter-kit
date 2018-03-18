const GamePiece = require('./GamePiece.js');
const Rabbit = require('./Rabbit.js');
const Bells = require('./Bells.js');

class Game {
    constructor(context){
        this.score = 0;
        this.rabbit = new Rabbit(250, 400, 30, 30);
        this.context = context;
    }

    drawRabbit(context) {
        this.rabbit.draw(context);
    }

  

}


module.exports = Game;
