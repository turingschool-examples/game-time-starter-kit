;(function () {
    var Game = function() {
        var context = document.getElementById("game").getContext('2d');
        this.size = { x: context.canvas.width, y: context.canvas.height};
        this.bodies = createInvaders(this).concat(new Player(this));

        var self = this;
        var gameLoop = function() {
            self.update();
            self.draw(context);
            requestAnimationFrame(gameLoop);
        };
        gameLoop();
    };

    Game.prototype = {
        update: function () {
            for (var i = 0; i < this.bodies.length; i++) {
                if (this.bodies[i].update !== undefined) {
                    this.bodies[i].update()
                }
            }
        },
        draw: function (context) {
            context.clearRect(0, 0, this.size.x, this.size.y);
            for (var i = 0; i < this.bodies.length; i++) {
                if (this.bodies[i].draw !== undefined) {
                    this.bodies[i].draw(context);
                }
            }
        }

    };

    var Invader = function(game, position) {
        this.game = game;
        this.position = position;
        this.size = { x: 15, y: 15 }
    };

    Invader.prototype = {
        draw: function (context) {
            drawRect(context, this);
        }
    };

    var createInvaders = function(game) {
        var invaders = [];
        for (var i = 0; i < 24; i++) {
            var x = 35 + (i % 8) * 30;
            var y = 35 + (i % 3) * 30;
            invaders.push(new Invader(game, {x: x, y: y}));
        }
        return invaders;
    };

    var drawRect = function(context, body) {
        context.fillRect(body.position.x - body.size.x / 2,
                        body.position.y - body.size.y / 2,
                        body.size.x,
                        body.size.y);
    };

    var Player = function(game) {
        this.game = game;
        this.size = { x: 15, y: 15}
        this.position = { x: this.game.size.x / 2,  y: this.game.size.y - 35 }
        this.keyboarder = new Keyboarder();
    };

    Player.prototype = {
        update: function() {
            if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
                this.position.x -= 2;
            } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
                this.position.x += 2;
            }
        },

        draw: function(context) {
            drawRect(context, this);
        }
    };

    var Keyboarder = function() {
        var keyState = {};
        window.addEventListener('keydown', function(e) {
            keyState[e.keyCode] = true;
        });

        window.addEventListener('keyup', function(e) {
            keyState[e.keyCode] = false;
        });

        this.isDown = function(keyCode) {
            return keyState[keyCode] === true;
        };

        this.KEYS = { LEFT: 37, RIGHT: 39}
    }

    window.addEventListener('load', function() {
        new Game();
    })
})();