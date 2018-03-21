let GamePiece = require('./GamePiece.js');

class Rabbit extends GamePiece {
    constructor(x, y, width, height){
        super(x, y, width, height) 
        this.moveRabbit = this.moveRabbit.bind(this);
        // this.jump = this.jump.bind(this);
        // this.speed = 2;
        this.vX = 0;
        this.vY = 0;
        this.collision = false;
        this.friction = 17.15;
        this.gravity = 0;
        this.gravitySpeed = 0;
    }


    draw(context){
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height)
        return this;
    } 

    bounceUp() {
        this.gravitySpeed = 0;
    }

    hitBottom(context) {
        if (this.y > 500) {
            // this.gravitySpeed = 0;
            this.y = 500;
            this.velocityReset();
        }
        return this;
    }
    
    moveRabbit(event){
        // event.preventDefault();
        if (event.keyCode == 32) {
            this.vY = -8;
            this.gravity = .2;
            this.jump();
        } else if (event.keyCode == 37) {
            this.vX = 0;
            this.vX--;
            this.vX *= this.friction;
            this.x += this.vX;
        } else if (event.keyCode == 39) {
            this.vX = 0;
            this.vX ++;
            this.vX *= this.friction;
            this.x += this.vX;
        }
    }
    
    jump() {
        this.gravitySpeed += this.gravity;
        this.y += this.vY + this.gravitySpeed;
        this.hitBottom(this.context);
        // console.log(this.vY);
        // console.log(this.gravitySpeed);
    }

    velocityReset(){
        // debugger;
        this.vY = 0;
        this.vX = 0;
        this.gravity = 0;
        this.gravitySpeed = 0;
        return this;
    }

    boundries() {
        if (this.x >= 465) {
            this.x = 465;
            // this.velocityReset();
        } else if (this.x <= 5) {
            this.x = 5;
            // this.velocityReset()
        }
    }
}


module.exports = Rabbit;

