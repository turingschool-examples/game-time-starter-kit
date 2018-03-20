const GamePiece = require('./GamePiece.js');
const Rabbit = require('./Rabbit.js');
const Bells = require('./Bells.js');



class Game {
    constructor(context){
        this.score = 0;
        this.rabbit = new Rabbit(250, 400, 30, 30);
        this.context = context;
        this.gravSpeed = 0;
        this.bells = [];
    }
    
    drawRabbit(context) {
        this.rabbit.draw(context);
        this.rabbit.jump();
        this.rabbit.boundries()
        // console.log(this.rabbit.y);
    }
    
    drawBells(context) {
        this.bells.forEach(bell => {
            bell.eraseBell(context).moveBell().drawBell(context)
        });
    }
   
    generateRandomBells() {
            // console.log(game.bells);
        if(this.bells.length <= 10) {
            let columns = [5, 40, 75, 110, 145, 180, 215, 250, 285, 320, 355, 390, 425, 460];
            let bellXPosition = columns[Math.floor(columns.length * Math.random())];
            let bell = new Bells (bellXPosition, -30, 30, 30);
            let bellsArray = this.bells.push(bell);
        }
    //   console.log(this.bells);
    //   return bells;
    }
}


module.exports = Game;
