const $ = require('jquery');

$(document).ready(function() {
  $(document).keydown(function(e) {
    if (e.keyCode === 38) {
      console.log("move up");
      //world.upArrowWasPressed();
    }
  });
});

// Snake.prototype.moveUp() = function() {
//   this.y = this.y - 1;
// }
//
//
// module.exports = Snake;
