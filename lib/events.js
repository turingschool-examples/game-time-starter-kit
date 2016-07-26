const $ = require('jquery');

$(document).ready(function() {
  $(document).keydown(function(e) {
    if (e.keyCode === 38) {
      console.log("move up");
    }
  });

});
