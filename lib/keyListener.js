var KeyPressed = require("./keyPressed");

var KeyListener = {
  start: function(){
    window.addEventListener('keydown', KeyPressed.setState.bind(null, true));
    window.addEventListener('keyup',   KeyPressed.setState.bind(null, false));
  }
};

module.exports = KeyListener;
