function Rock(options) {
 this.width = options.width || 25;
 this.height = options.height || 25;
 this.x = this.placeRock();
 this.y = options.y || 190 - this.height;
 this.bottom = this.y + this.height;
 this.right = this.x + this.width;
 this.offset = 150;
 // this.world = options.world;
 // this.surfer = options.surfer;
 this.game = options.game;
 this.speed = 6;
 // this.image = new Image();
 // this.image.src = `./img/small-rock.png`;
}

Rock.prototype.isOffScreenLeft = function () {
  return this.x < 0 - this.width;
};

Rock.prototype.moveLeft = function () {
  if (this.isOffScreenLeft()) {
    this.placeRock();
    return;
  }
  this.x = this.x - this.speed;
  this.right = this.x + this.width;
  return this;
};

Rock.prototype.small = function () {
  this.y = 165;
  this.width = 25;
  this.height = 25;
  this.image = new Image();
  this.image.src = `./img/small-rock.png`;
  this.size = 'small';
  return this;
};

Rock.prototype.medium = function () {
  this.y = 155;
  this.width = 35;
  this.height = 35;
  this.image = new Image();
  this.image.src = `./img/medium-rock.png`;
  this.size = 'medium';
  return this;
};

Rock.prototype.large = function () {
  this.y = 150;
  this.width = 40;
  this.height = 40;
  this.image = new Image();
  this.image.src = `./img/large-rock.png`;
  this.size = 'large';
  return this;
};

Rock.prototype.placeRock = function () {
  // resetting: make sure tthse are not on top of each other

  // previous postion = q
  // check against new value and make sure it's 200px greater than q

  // when defining this x var, make sure it's not too close to this.previousX
  // up here it will still be the x val of rock 1
  // while loop --> until the "new" x meets the conds based on prevX

  // calculate new x, then reassign it as a callback

  // var b = new Promise( ////)
  // b.resolve().then(//////)

  // var randomNumber = greater than 200, less than 400

  // 600 px ->
    // min distance: 200px
    // this.x = 600 + (randomNumber)



  // var lastRockPositionX = this.game.lastRockPositionX;

  // nned to calculate new X based on old X
  var x = Math.floor(Math.random() * (3000 - 600)) + 600;

// if previousX is > current x + 200 then return x - 200px
// if previousX is < current x -200 then return x + 200px

  // if (this.previousX > x + 200) { return x -= 200; }
  // if (this.previousX < x - 200) { return x += 200; }

  // var x = this.x + 200 > this.previousX ?
  // var x = x + 200  > x ? x : x + 200;

  this.x = x;
  this.game.lastRockPositionX = x;
  return  this.x;
};

module.exports = Rock;
