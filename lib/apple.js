function Apple(){
  this.x = Math.floor(Math.random() * (490))
  this.y = Math.floor(Math.random() * (490))
  this.height = 10;
  this.width = 10;
}

// Apple.prototype.isMultipleOfFive = function() {
//  var multiple = (Math.floor(Math.random() * (500)));
//  if (multiple % 5 !== 0){isMultipleOfFive();}
//  else {return multiple};
// }

module.exports = Apple;
