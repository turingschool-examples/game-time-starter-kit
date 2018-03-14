class GamePiece {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(context){
         context.fillRect(this.x, this.y, this.width, this.height)
         return this;
        }

    

    move() {

    
}
}

module.exports = GamePiece;
