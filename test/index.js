const chai = require('chai');
const assert = chai.assert;

describe('my test suite', function () {
  it('should work', function () {
    assert(true);
  });

  it("renders a game", function() {
    var g = new Game();
    var $gameElement = $("#game-goes-here");
    g.render($gameElement);
    var renderedGame = $(".game");
    assert.equal(1, renderedGame.length)
    var cards = $(".cards")
    assert.equal(8, cards.length)
  })
});
