const sayHello = () => console.log('Hello');

sayHello();


function Game() {

}

Game.prototype.render = function($element) {
  // create my new div
  // add it to the provided element
  var gameDiv = document.createElement("div")
  gameDiv.className = "game"
  $element.append(gameDiv)
}
