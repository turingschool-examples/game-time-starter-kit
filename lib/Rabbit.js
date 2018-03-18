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
        this.friction = 0.8;
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
            this.y -= 50;
         }
   
    moveRabbit(event){
        event.preventDefault();
        // debugger;
        // console.lg(this)
        if (event.keyCode == 32) {
            // console.log(event);
            // console.log(this);
            this.jump();
        } else if (event.keyCode == 37) {
            // console.log(event);
            // console.log('left');
            this.x -= 10;
            // this.y = 400;
        } else if (event.keyCode == 39) {
            // console.log('right');
            this.x += 10;
            // this.y = 400;
        }
    }
    
}


module.exports = Rabbit;

