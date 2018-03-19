const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const GamePiece = require('../lib/GamePiece');

describe('GamePiece', function () {

  beforeEach(function() {
    let gamePiece = new GamePiece(10, 10, 10, 10);
  });

  it('should instantiate our good friend GamePiece', function () {
    expect(GamePiece).to.exist;
  })
  
  it('should have x, y, width, and height', function() {
    let gamePiece = new GamePiece(0, 0, 0, 0);
    expect(gamePiece.x).to.equal(0);
    expect(gamePiece.y).to.equal(0);
    expect(gamePiece.width).to.equal(0);
    expect(gamePiece.height).to.equal(0);

    gamePiece = new GamePiece (10, 10, 10, 10);
    expect(gamePiece.x).to.equal(10);
    expect(gamePiece.y).to.equal(10);
    expect(gamePiece.width).to.equal(10);
    expect(gamePiece.height).to.equal(10);
  })

  

})