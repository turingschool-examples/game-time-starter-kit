function Apple(){
  this.x = Math.floor(Math.random() * (490))
  this.y = Math.floor(Math.random() * (490))
  this.height = 10;
  this.width = 10;
}

Apple.prototype.topLeft = function(){
  this.x = this.x;
  this.y = this.y;
};

Apple.prototype.topRight = function(){
  this.x = this.x + this.width;
  this.y = this.y;
};

Apple.prototype.bottomLeft = function(){
  this.x = this.x;
  this.y = this.y + this.height;
};

Apple.prototype.bottomRight = function(){
  this.x = this.x + this.width; 
  this.y = this.y + this.height;
};

// Apple.prototype.isMultipleOfFive = function() {
//  var multiple = (Math.floor(Math.random() * (500)));
//  if (multiple % 5 !== 0){isMultipleOfFive();}
//  else {return multiple};
// }

module.exports = Apple;
