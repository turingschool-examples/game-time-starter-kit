import Bullet from './bullet.js'
import {drawRect} from './drawRect.js'

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
        this.horizontalPatrol = 0;
        this.speed = 0.8;
    };

    Invader.prototype = {
        update: function() {
            if (this.horizontalPatrol < 0 || this.horizontalPatrol > 60) {
                this.position.y += 5;
                this.speed = -this.speed;
            }
            this.position.x += this.speed;
            this.horizontalPatrol += this.speed;
        },
        draw: function (context) {
            drawRect(context, this);
        }
    };

    var createInvaders = function(game) {
        var invaders = [];
        for (var i = 0; i < 24; i++) {
            var x = 20 + (i % 8) * 30;
            var y = 30 + (i % 3) * 30;
            invaders.push(new Invader(game, {x: x, y: y}));
        }
        return invaders;
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
                var bullet = new Bullet(
                                        { x: this.position.x, y: this.position.y - this.size.y - 10 },
                                        { x: 0, y: -7 });
                this.game.addBody(bullet)
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

        this.KEYS = { LEFT: 37, RIGHT: 39, SPACE: 32}
    };

    window.addEventListener('load', function() {
        new Game();
    })
