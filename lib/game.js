const Paddle = require('./paddle')
const Puck = require('./puck')

function Game(options, ctx, canvas) {
  this.gameState = false;
  this.level = 0;
  this.paddleLeft = new Paddle({}, ctx, canvas);
  this.paddleRight = new Paddle({x:770}, ctx, canvas);
  this.puck = new Puck({}, ctx, canvas);
  this.ctx = ctx;
  this.canvas = canvas;
}

Game.prototype.run = function() {
  this.gameSetup();
  // console.log(this.gameState)
}

Game.prototype.gameSetup = function() {
  this.paddleLeft.draw('green');
  this.paddleRight.draw();
  this.puck.draw();
  this.setMoveKeys();
  this.movePaddles();
  this.puckMovement();
}

Game.prototype.setMoveKeys = function() {
  //up is 38, down is 40, a is 65, z is 90
  let { paddleLeft, paddleRight } = this
  $(document).on('keydown', function(e) {
    if(e.keyCode === 38) {
      paddleRight.moveUp = true;
    }
    if(e.keyCode === 40) {
      paddleRight.moveDown = true;
    }
    if(e.keyCode === 65) {
      paddleLeft.moveUp = true;
    }
    if(e.keyCode === 90) {
      paddleLeft.moveDown = true;
    }
  });

  $(document).on('keyup', function(e) {
    if(e.keyCode === 38) {
      paddleRight.moveUp = false;
    }
    if(e.keyCode === 40) {
      paddleRight.moveDown = false;
    }
    if(e.keyCode === 65) {
      paddleLeft.moveUp = false;
    }
    if(e.keyCode === 90) {
      paddleLeft.moveDown = false;
    }
  })

}

Game.prototype.movePaddles = function() {
  let { paddleLeft, paddleRight } = this;
  if(paddleLeft.moveUp === true && paddleLeft.y > 0) {
    paddleLeft.y -= paddleLeft.speed;
  }
  if(paddleLeft.moveDown === true && paddleLeft.y + paddleLeft.height < 500) {
    paddleLeft.y += paddleLeft.speed;
  }
  if(paddleRight.moveUp === true && paddleRight.y > 0) {
    paddleRight.y -= paddleRight.speed;
  }
  if(paddleRight.moveDown === true && paddleRight.y + paddleRight.height < 500) {
    paddleRight.y += paddleRight.speed;
  }
}

Game.prototype.puckMovement = function() {
  let { puck, gameState } = this;
  if(gameState === false) {
    puck.x = puck.x
    puck.y = puck.y
  }
  $(document).on('keypress', function(e) {
    if(e.keyCode === 32 && gameState === false) {
      gameState = true;
      puck.speed = 4;
    } else {
      e.preventDefault();
    }
  });
    puck.x += puck.speed
    puck.y -= puck.speed
  }







module.exports = Game;
