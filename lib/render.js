const canvas  = document.getElementById("screen");
const ctx = canvas.getContext("2d");
canvas.focus();

var Render = function(bodies) {
  bodies.forEach(function(body){
    ctx.fillStyle="white"
    ctx.fillRect(body.x, body.y, body.size, body.size);
  });
};

module.exports = Render;
