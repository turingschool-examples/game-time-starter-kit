let GamePiece = require('./GamePiece.js');


class Rabbit extends GamePiece {
    constructor(x, y, width, height, speed, vX, vY){
        super(x, y, width, height) 
        this.moveRabbit = this.moveRabbit.bind(this);
        this.jump = this.jump.bind(this);
        this.speed = 3;
        this.vX = 0;
        this.vY = 0;
        this.jumping = false;
        this.friction = 1.15;
        this.gravity = 0.2;
    }

    draw(context){
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height)
        return this;
    }

    jump() {
        // if (event.keyCode == 32){
            // console.log(event);
            console.log(this);
            this.vY--;
         }
   
    moveRabbit(event){
        // event.preventDefault();
        // debugger;
        console.log(this)
        if (event.keyCode == 32) {
            // console.log(event);
            if (this.vY > -this.speed){
                console.log(this);
                this.jump();   
            }
        }
        if (event.keyCode == 37) {
            // console.log(event);
            console.log('left');
            if (this.vX > -this.speed){
            this.vX--;
            this.vX *= this.friction;
            this.x += this.vX
            }
            console.log(this.vX)
        } 
         if (event.keyCode == 39) {
            console.log('right');
            if (this.vX < this.speed) {
            this.vX ++;
            }
        }
        this.vY *= this.friction;
        this.y += this.vY;

        this.vX *= this.friction; 
        this.x += this.vX
    }

}


module.exports = Rabbit;

