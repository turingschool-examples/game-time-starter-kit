const GamePiece = require('./GamePiece.js');
const Rabbit = require('./Rabbit.js');
const Bells = require('./Bells.js');

class Game {
    constructor(context){
        this.score = 0;
        this.rabbit = new Rabbit(250, 400, 30, 30);
        this.context = context;
        this.gravSpeed = 0;
    }

    drawRabbit(context) {
        this.rabbit.draw(context);
        this.rabbit.jump();
        this.rabbit.boundries()
        console.log(this.rabbit.y);
    }

    // gravity(speed, grav) {
    //     this.gravSpeed += grav;
    //     this.y += speed + this.gravSpeed;
    // }
}


module.exports = Game;
