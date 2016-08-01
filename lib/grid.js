const games = require('./validGames') // array of game arrays
const key   = require('./key')
const Light = require('./light')
const surroundingKeys = require('./surroundingKeys')

function Grid(gameId) {
  if (gameId === undefined) gameId = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
  this.games = games
  this.game = this.games[gameId]
  this.key  = key
  this.surroundingKeys = surroundingKeys
}

Grid.prototype.addLight = function (state) {
  return new Light(state);
};

Grid.prototype.createGame = function() {
  var game = this.game;
  var addLight = this.addLight;

  this.game.forEach(function(row) {
    row.forEach(function(lightsToBe, index) {
      if (lightsToBe === "on") {
        row[index] = addLight(true)
      } else if (lightsToBe === "off") {
        row[index] = addLight(false)
      }
    })
  })
};

Grid.prototype.changeLightState = function(dataId) {
  lightRow = key[dataId][0]; // 0
  lightColumn = key[dataId][1]; // 0
  this.game[lightRow][lightColumn].flip();
}

module.exports = Grid;
