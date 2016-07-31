const Grid = require('./grid')

game = new Grid()

$(document).ready(function() {
  game.createGame();
  
  $('td').each(function(index, light) {
    var lightPos = game.key[index + 1];
    var currentLightstate = game.game[lightPos[0]][lightPos[1]];
    $(this).attr("id", this.id = `${currentLightstate.state}`);
  });

  $('td').on('click', function() {
    var lightId = $(this).data("id");
    var newClass = game.changeLightState(lightId);
    var lightPos = game.key[lightId];
    var currentLightstate = game.game[lightPos[0]][lightPos[1]];
    $(this).attr("id", this.id = `${currentLightstate.state}`);
  });
});
