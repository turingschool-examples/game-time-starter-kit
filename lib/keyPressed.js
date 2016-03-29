var setState = function(state){
  switch (event.keyCode) {
    case 37: KeyPressed.left  = state; break;
    case 39: KeyPressed.right = state; break;
    case 38: KeyPressed.up    = state; break;
    case 40: KeyPressed.down  = state; break;
  }
}

var KeyPressed = {
  left:  false,
  right: false,
  up:    false,
  down:  false,
  setState: setState
};

module.exports = KeyPressed;
