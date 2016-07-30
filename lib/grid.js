const games = require('./validGames') // array of game arrays
const key   = require('./key')
const Light = require('./light')

function Grid(game) {
  this.games = games
  this.game = this.games[game]
  this.key  = key
}

Grid.prototype.addLight = function (state) {
  return new Light(state);
};

Grid.prototype.changeLightState = function(dataId) {
  lightRow = key[`${dataId}`][0] // 0
  lightColumn = key[`${dataId}`][1] // 0
  this.game[lightRow][lightColumn].flip
}

Grid.prototype.createGame = function() {
  var game = this.game;
  var addLight = this.addLight;

  this.game.forEach(function(row) {
    row.forEach(function(lightToBe, index) {
      if (lightToBe === "on") {
        row[index] = addLight(true)
      } else {
        row[index] = addLight(false)
      }
    })
  })
}

module.exports = Grid;


// var table [
//   [{}, {}, {}, {}, {}]
//   [{}, {}, {}, {}, {}]
//   [{}, {}, {}, {}, {}]
//   [{}, {}, {}, {}, {}]
//   [{}, {}, {}, {}, {}]
// ]
