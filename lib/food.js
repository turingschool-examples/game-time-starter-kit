module.exports = Food;

function Food(x, y, width, height) {
  var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  var y = Math.random() * 100;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
}

// function Food() {
//   var x = Math.random() * 100;
//   var y = Math.random() * 100;
//   this.x = x;
//   this.y = y;
// }
