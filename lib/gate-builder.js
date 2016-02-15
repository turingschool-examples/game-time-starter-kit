const Gate = require('./gate')

function buildGates(gates, canvas){
  var spacing = 75
  for (var i = 0; i < 6; i++){
    var gatePosition = canvas.height - spacing
    gates.push(new Gate({y: gatePosition}, canvas))
    spacing += 75
  }
}

function displayGates(gates, ctx, gameSpeed, canvas){
  for (var i = 0;i < gates.length;i++){
    gates[i].draw(ctx);
    gates[i].update(gameSpeed, canvas);
  }
}

module.exports = {
    buildGates: buildGates,
    displayGates: displayGates
}
