const assert = require("chai").assert;
const Player = require("../lib/player");
const Game = require("../lib/game");

describe("Player", function(){
  context('when created', function(){
    it("has default attributes", function(){
      var game = new Game(200,200);
      var player = new Player({game: game, controls: 'bananas'});

      assert.equal(player.game, game);
      assert.equal(player.controls, 'bananas');
      assert.equal(player.speedY, 0);
      assert.equal(player.score, 0);
    });

    it('takes position, speed and size from grid', function() {
      var game = new Game(200,200);
      var player = new Player({game: game, controls: 'c'});

      assert.equal(player.x % game.grid.size, 0);
      assert.equal(player.y % game.grid.size, 0);
      assert.equal(player.speed, game.grid.size);
    });

    it("is not dead", function(){
      var game = new Game(100,100);
      var player = new Player({game: game});

      assert.isNotTrue(player.died());
    });
  });

  context('movement', function(){
    it('moves according to speed', function(){
      var game = new Game(100,100);
      var player = new Player({game: game, controls:'c', x: 1, y: 1} );
      player.speedX = 10;
      player.speedY = 20;

      player.move();

      assert.equal(player.x, 11);
      assert.equal(player.y, 21);
    });
  });

  context('control by arrows', function(){
    it('faces left when left arrow is pressed', function(){
      var game = new Game(100,100);
      var player = new Player({game: game, controls: 'arrows'});
      game.KeyPressed.left = true;

      player.orient();
      assert.equal(player.speedX, -player.speed);
      assert.equal(player.speedY, 0);
    });

    it('faces right when right arrow is pressed', function(){
      var game = new Game(100,100);
      var player = new Player({game: game, controls: 'arrows'});
      player.speedX = 'default';
      player.speedY = 'default';
      game.KeyPressed.right = true;

      player.orient();
      assert.equal(player.speedX, player.speed);
      assert.equal(player.speedY, 0);
    });

    it('faces up when up arrow is pressed', function(){
      var game = new Game(100,100);
      var player = new Player({game: game, controls: 'arrows'});
      game.KeyPressed.up = true;

      player.orient();
      assert.equal(player.speedX, 0);
      assert.equal(player.speedY, -player.speed);
    });

    it('faces down when down arrow is pressed', function(){
      var game = new Game(100,100);
      var player = new Player({game: game, controls: 'arrows'});
      game.KeyPressed.down = true;

      player.orient();
      assert.equal(player.speedX, 0);
      assert.equal(player.speedY, player.speed);
    });
  });

  context('control by wasd', function(){
    it('faces left when A is pressed', function(){
      var game = new Game(100,100);
      var player = new Player({game: game, controls: 'wasd'});
      game.KeyPressed.a = true;

      player.orient();
      assert.equal(player.speedX, -player.speed);
      assert.equal(player.speedY, 0);
    });

    it('faces right when D is pressed', function(){
      var game = new Game(100,100);
      var player = new Player({game: game, controls: 'wasd'});
      player.speedX = 'default';
      player.speedY = 'default';
      game.KeyPressed.d = true;

      player.orient();
      assert.equal(player.speedX, player.speed);
      assert.equal(player.speedY, 0);
    });

    it('faces up when W is pressed', function(){
      var game = new Game(100,100);
      var player = new Player({game: game, controls: 'wasd'});
      game.KeyPressed.w = true;

      player.orient();
      assert.equal(player.speedX, 0);
      assert.equal(player.speedY, -player.speed);
    });

    it('faces down when S is pressed', function(){
      var game = new Game(100,100);
      var player = new Player({game: game, controls: 'wasd'});
      game.KeyPressed.s = true;

      player.orient();
      assert.equal(player.speedX, 0);
      assert.equal(player.speedY, player.speed);
    });
  });

  context('death', function(){
    it('dies when hitting occupied positions', function(){
      var game = new Game(200,200);
      var player = new Player({game: game, controls: 'c'});

      player.game.occupiedPositions[player.x] = [];
      player.game.occupiedPositions[player.x][player.y] = true;

      assert(player.died());
    });

    it('dies when hitting a wall', function(){
      var player;
      var game = new Game(200, 200);

      player = new Player({game: game, x: -1});
      assert(player.died(), 'West wall');

      player = new Player({game: game, y: -1});
      assert(player.died(), 'North wall');

      player = new Player({game: game, x: game.grid.realWidth});
      assert(player.died(), 'East wall');

      player = new Player({game: game, y: game.grid.realHeight});
      assert(player.died(), 'South wall');
    });

    it('looses points when dies', function(){
      var game = new Game(200, 200);
      var player = new Player({game: game, x: -1});

      player.died();

      assert(player.score < 0);
    });
  });

  context('scoring', function(){
    it('scores when hitting a fruit', function(){
      var game = new Game(200,200);
      var player = new Player({game: game, controls: 'c'});

      player.x = game.fruit.x;
      player.y = game.fruit.y;

      assert(player.scored());
      assert(player.score > 0);
    });
  });
});
