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
        },
        addBody: function (body) {
            this.bodies.push(body);
        }

    };

    var Invader = function(game, position) {
        this.game = game;
        this.position = position;
        this.size = { x: 15, y: 15 };
        this.patrolX = 0;
        this.speedX = 0.3;
    };

    Invader.prototype = {
        update: function() {
            if (this.patrolX < 0 || this.patrolX > 50) {
                this.speedX = -this.speedX;
            }

            this.position.x += this.speedX
            this.patrolX += this.speedX
        },
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
        this.size = { x: 15, y: 15};
        this.position = { x: this.game.size.x / 2,  y: this.game.size.y - 35 };
        this.keyboarder = new Keyboarder();
    };

    Player.prototype = {
        update: function() {
            if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
                if(this.position.x > 9.5) {
                    this.position.x -= 2;
                }
            } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
                if (this.position.x < 300.5) {
                    this.position.x += 2;
                }
            }

            if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
                var bullet = new Bullet(this.game,
                                        { x: this.position.x, y: this.position.y - this.size.y - 10 },
                                        { x: 0, y: -7});
                this.game.addBody(bullet)
            }
        },

        draw: function(context) {
            drawRect(context, this);
        }
    };

    var Bullet = function(game, position, velocity) {
        this.game = game;
        this.position = position;
        this.size = { x: 3, y: 3 };
        this.velocity = velocity;
    };

    Bullet.prototype = {
        update: function () {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        },

        draw: function(context) {
            drawRect(context, this);
        }
    }

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

        this.KEYS = { LEFT: 37, RIGHT: 39, SPACE: 32}
    };

    window.addEventListener('load', function() {
        new Game();
    })
})();