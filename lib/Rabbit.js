let GamePiece = require('./GamePiece.js');

class Rabbit extends GamePiece {
  
    constructor(x, y, width, height){
        super(x, y, width, height) 
        this.moveRabbit = this.moveRabbit.bind(this);
        this.jump = this.jump.bind(this);
        // this.speed = 2;
        this.vX = 0;
        this.vY = 0;
        this.collision = false;
        this.gravity = 0;
        this.gravitySpeed = 0;
    }


    draw(context){
        context.fillStyle = '#D90C24';
        context.fillRect(this.x, this.y, this.width, this.height)
        return this;
    } 

    bounceUp() {
        this.gravitySpeed = 0;
    }

    moveRabbit(event){
        // event.preventDefault();
        if (event.keyCode == 32) {
            this.vY = -8;
            this.gravity = .2;
            this.jump();
        } else if (event.keyCode == 37) {
            this.vX = -25;
            this.x += this.vX;
        } else if (event.keyCode == 39) {
            this.vX = 25;
            this.x += this.vX;
        }
    }
    
    jump() {
        this.gravitySpeed += this.gravity;
        this.y += this.vY + this.gravitySpeed;
    }
    
    velocityReset() {
        this.vY = 0;
        this.vX = 0;
        this.gravity = 0;
        this.gravitySpeed = 0;
        return this;
    }
    
    boundries() {
        if (this.x >= 465) {
            this.x = 465;
        } else if (this.x <= 5) {
            this.x = 5;
        }
    }
}
    

module.exports = Rabbit;