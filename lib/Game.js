const GamePiece = require('./GamePiece.js');
const Rabbit = require('./Rabbit.js');
const Bells = require('./Bells.js');

class Game {
    constructor(context){
        this.score = 0;
        this.rabbit = new Rabbit(250, 400, 30, 30);
        this.context = context;
        this.gameLoop = this.gameLoop.bind(this);
    }

    drawRabbit(context) {
        this.rabbit.draw(context);
    }

    gameLoop() {
        this.context.clearRect(0, 0, 500, 500);
        this.drawRabbit(this.context);
        requestAnimationFrame(this.gameLoop);
    }

}


module.exports = Game;
