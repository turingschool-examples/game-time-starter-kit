let GamePiece = require('./GamePiece.js');


class Rabbit extends GamePiece {
    constructor(x, y, width, height, speed, vX, vY){
        super(x, y, width, height) 
        this.moveRabbit = this.moveRabbit.bind(this);
        // this.jump = this.jump.bind(this);
        // this.speed = 2;
        this.vX = 0;
        this.vY = 0;
        this.jumping = false;
        this.friction = 12.15;
        this.gravity = 0;
        this.gravitySpeed = 0;
    }


    draw(context){
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height)
        return this;
    } 
    
    // gravity(vY, gravity) {
    //     this.vY = vY;
    //     this.gravity = gravity;
    // }

    bounceUP() {
        // if the blob hits the platform
        // this.gravitySpeed = 0;
    }

    hitBottom(context) {
        if (this.y > 400) {
            // this.gravitySpeed = 0;
            this.y = 400;
            this.velocityReset();
        }
        return this;
    }

    jump() {
        this.gravitySpeed += this.gravity;
        this.y += this.vY + this.gravitySpeed;
        this.hitBottom(this.context);
        // console.log(this.vY);
        // console.log(this.gravitySpeed);
    }
   
    moveRabbit(event){
        // event.preventDefault();
        // debugger;
        if (event.keyCode == 32) {
            console.log(event);
            this.vY = -8;
            this.gravity = .2;
            this.jump();
            
        } else if (event.keyCode == 37) {
            // console.log(event);
            // console.log('left');
            this.vX = 0;
            this.vX--;
            this.vX *= this.friction;
            // console.log(this.vX);
            this.x += this.vX;
        } else if (event.keyCode == 39) {
            console.log(this.vX)
            console.log('right');
            this.vX = 0;
            this.vX ++;
            this.vX *= this.friction;
            this.x += this.vX;
        }
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

