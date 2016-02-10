function () {
    var Game = function() {
        context = document.getElementById("#game").getContext('2d');
        this.size = { x: context.canvas.width, y: context.canvas.height}

        var gameLoop = function() {
            this.update;
            this.draw(context);
            requestAnimationFrame(gameLoop);
        };
        gameLoop();
    };

    Game.prototype = {
        update: function () {},
        draw: function (context) {
            context.clearRect(0, 0, this.size.x, this.size.y);
            for (var i = 0; i < this.bodies.length; i++) {
                if (this.bodies[i].draw !== undefined) {
                    this.bodies[i].draw(context);
                }
            }
        }

    };

    var Invader = function( game, position) {
        this.game = game;
        this.position = position;
        this.size = { x: 15, y: 15 }
    };

    Invader.prototype = {
        draw: function (context) {
            drawRect(context, this);
        }
    }
}