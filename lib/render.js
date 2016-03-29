var canvas  = document.getElementById("screen");
var ctx = canvas.getContext("2d");
canvas.focus();

var Render = function(body) {
  ctx.fillRect(body.x, body.y, body.width, body.height);
};

module.exports = Render;
