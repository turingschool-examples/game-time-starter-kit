function Rock(options) {
  this.width = options.width || 25;
  this.height = options.height || 25;
  this.x = this.placeRock();
  this.y = options.y || 190 - this.height;
  this.bottom = this.y + this.height;
  this.right = this.x + this.width;
  this.offset = 150;
  this.speed = 6;
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
  this.rangeLow = 1200;
  this.rangeHigh = 1250;
  return this;
};

Rock.prototype.medium = function () {
  this.y = 155;
  this.width = 35;
  this.height = 35;
  this.image = new Image();
  this.image.src = `./img/medium-rock.png`;
  this.size = 'medium';
  this.rangeLow = 1500;
  this.rangeHigh = 1550;
  return this;
};

Rock.prototype.large = function () {
  this.y = 150;
  this.width = 40;
  this.height = 40;
  this.image = new Image();
  this.image.src = `./img/large-rock.png`;
  this.size = 'large';
  this.rangeLow = 1800;
  this.rangeHigh = 1850;
  return this;
};

Rock.prototype.randomXGenerator = function () {
  return Math.floor(Math.random() * (1500 - 600)) + 600;
};

Rock.prototype.placeRock = function () {
  this.x = this.randomXGenerator();
  return  this.x;
};

module.exports = Rock;
