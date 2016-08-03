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
  var newXCoordinate = Math.floor(Math.random() * (3000 - 600)) + 600;
  this.x = newXCoordinate;
  return  this.x;
};

module.exports = Rock;
