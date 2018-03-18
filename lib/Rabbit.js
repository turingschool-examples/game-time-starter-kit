let GamePiece = require('./GamePiece.js');


class Rabbit extends GamePiece {
    constructor(x, y, width, height, speed, vX, vY){
        super(x, y, width, height) 
        this.moveRabbit = this.moveRabbit.bind(this);
        this.jump = this.jump.bind(this);
        this.speed = 2;
        this.vX = 0;
        this.vY = 0;
        this.jumping = false;
        this.friction = 1.15;
        this.gravity = 0.2;
        this.gravitySpeed = 0;
    }
// Z

    draw(context){
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height)
        return this;
    }

    jump() {
        // if (event.keyCode == 32){
            // console.log(event);
        console.log(this);
        this.vY = this.vY -50;
        this.vY *= this.friction;
        this.y += this.vY;
        // this.vY += this.gravity;
        // this.y += this.vy;
    }
   
    moveRabbit(event){
        // event.preventDefault();
        // debugger;
        // console.log(this)
        console.log(event)
        if (event.keyCode == 32) {
            // console.log(event);
                // console.log(this);
                this.jump();
            
        } else if (event.keyCode == 37) {
            // console.log(event);
            // console.log('left');
            if(this.vX){
            this.vX = 0;
            this.vX--;
            this.vX *= this.friction;
            console.log(this.vX);
            this.x += this.vX
            }
        } else if (event.keyCode == 39) {
            console.log(this.vX)
            console.log('right');
            this.vX = 0;
            this.vX ++;
            this.vX *= this.friction;
            this.x += this.vX;
            
        }
        // this.vY *= this.friction;
        // this.y += this.vY;
        // this.vX++
        // this.vX *= this.friction; 
        // this.x += this.vX
    }

    boundries() {
        if (this.x >= 465) {
            this.x = 465;
        } else if (this.x <= 5) {
            this.x = 5;
        }

        if (this.y <= 5) {
            this.y = 5;
        }
    }

    gravity() {
        this.vY += this.gravity;
        this.y += this.vY;
        if (this.y < 0) 
            this.y = 0;
            this.vY = 0;
        }
    }


module.exports = Rabbit;

