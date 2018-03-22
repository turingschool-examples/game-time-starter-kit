const chai = require('chai');
const expect = chai.expect;
const Bells = require('../lib/Bells');

describe ('Bells', () => {
    let bell;

    beforeEach(() => {
        bell = new Bells(10, 10, 10, 10);
    });

    it('should be an instance of our good friend Bell', () => {
        expect(Bells).to.exist;
    });

    it('should have paramaters on x, y, width and height', () => {
        expect(bell.x).to.equal(10);
        expect(bell.y).to.equal(10);
        expect(bell.width).to.equal(10);
        expect(bell.height).to.equal(10);
    });

    it('should start out with the property of collision as false', () => {
        expect(bell.collision).to.equal(false);
    });

    it('should increment our y value downward', () => {
        expect(bell.y).to.equal(10);
        bell.moveBell();
        expect(bell.y).to.equal(11);
    })
});