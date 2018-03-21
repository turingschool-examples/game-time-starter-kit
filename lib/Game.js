const GamePiece = require('./GamePiece.js');
const Rabbit = require('./Rabbit.js');
const Bells = require('./Bells.js');

class Game {
    constructor(context){
        this.rabbit = new Rabbit(250, 500, 30, 30);
        this.score = 0;
        // this.context = context;
        this.bells = [];
        this.runGameLoop = false;
    }  

    scoring() {
        this.score += 10;
        $('.score_amount').text(this.score);
    }

    scrolling(rabbit, bells){
        bells.forEach(bell => bell.y += 25)
    }

    collisionDetection(rabbit, bells) {
        bells.forEach(function (bell) {
            if (rabbit.x + rabbit.width >= bell.x &&
                rabbit.x <= bell.x + bell.width &&
                rabbit.y + rabbit.height >= bell.y &&
                rabbit.y + rabbit.height < bell.y + bell.height) {
                rabbit.collision = true;
                bell.collision = true;
                rabbit.bounceUp();
                this.scoring();
                this.scrolling(rabbit, bells);
            }
        }.bind(this));
    }

    endLevel(rabbit) {
        if (rabbit.y <= -10) {
            this.nextLevelScreen();
            $('.score_counter').hide ();
        }
    }

    nextLevelScreen() {
        console.log('nextlevelscreencalled??')
        $('.next-level_screen').show();
        $('#game').hide();
        this.toggleGameLoop();
    }

    startNextLevel() {
        this.rabbit.y = 500         
        console.log('startnextlevel')
        this.frequency += 10;
        $('.next-level_screen').hide();
        $('#game').show();
        $('.score_counter').show();
        // this.toggleGameLoop()
        this.runGameLoop = true;
        console.log('gameloop: ', this.runGameLoop)
        // window.location.reload(true)

    }

    toggleGameLoop() {
        console.log('togglecalled')
        this.runGameLoop = !this.runGameLoop;
        console.log('runGameLoop: ', this.runGameLoop)
    };

    bellFrequency(context) {
        let frequency = 26;
        if (Math.floor(frequency * Math.random()) === 25) {
            this.generateRandomBells(context);
            return frequency;
        }
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
        if(this.bells.length <= 101) {
            let columns = [5, 40, 75, 110, 145, 180, 215, 250, 285, 320, 355, 390, 425, 460];
            let bellXPosition = columns[Math.floor(columns.length * Math.random())];
            let bell = new Bells (bellXPosition, -30, 30, 30);
            // console.log(this)
            let bellsArray = this.bells.push(bell);
        }
    }

    // bellRecycle(){
    //     this.bells.forEach(bell => {
    //         if (bell.y >= 500) {
    //             bell.y = -30;
    //         }
    //     })
    // }
}


module.exports = Game;
