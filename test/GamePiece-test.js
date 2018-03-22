const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const GamePiece = require('../lib/GamePiece');

<<<<<<< Updated upstream
describe('GamePiece', () => {

  beforeEach(() => {
    let gamePiece = new GamePiece(10, 10, 10, 10);
=======
describe('GamePiece', function () {
  let gamePiece;

  beforeEach(function() {
    gamePiece = new GamePiece(10, 10, 10, 10);
>>>>>>> Stashed changes
  });

  it('should instantiate our good friend GamePiece', () => {
    expect(GamePiece).to.exist;
  })
  
  it('should have x, y, width, and height', function() {

    gamePiece = new GamePiece (10, 10, 10, 10);
    expect(gamePiece.x).to.equal(10);
    expect(gamePiece.y).to.equal(10);
    expect(gamePiece.width).to.equal(10);
    expect(gamePiece.height).to.equal(10);
  })

  

})