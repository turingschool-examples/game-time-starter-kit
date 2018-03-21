const chai = require('chai');
const expect = chai.expect;
const Rabbit = require('../lib/Rabbit');

describe('Rabbit', () => {
    let rabbit;

    beforeEach(() => {
        rabbit = new Rabbit (10, 10, 10 ,10, 10, 10);
    })

    it('should be an instance of our good friend Rabbit', () => {
        expect(Rabbit).to.exist;
    })

    it('should have parameters of x, y, width, and height', () => {
        expect(rabbit.x).to.equal(10);
        expect(rabbit.y).to.equal(10);
        expect(rabbit.width).to.equal(10);
        expect(rabbit.height).to.equal(10);
    })

    it('should have an initial collision value of false', () => {
        expect(rabbit.collision).to.equal(false);
    })

    it('should have set properties for vX, vY, friction, gravity, and gravitySpeed', () => {
        expect(rabbit.vX).to.equal(0);
        expect(rabbit.vY).to.equal(0);
        expect(rabbit.friction).to.equal(17.15);
        expect(rabbit.gravity).to.equal(0);
        expect(rabbit.gravitySpeed).to.equal(0);
    })

    it('should return gravitySpeed to 0', () => {
        rabbit.gravitySpeed = 10;
        expect(rabbit.gravitySpeed).to.equal(10);
        rabbit.bounceUp();
        expect(rabbit.gravitySpeed).to.equal(0);
    })

    it('should rest y value to 500 when hitting the ground', () => {
        rabbit.y = 550;
        expect(rabbit.y).to.equal(550);
        rabbit.hitBottom();
        expect(rabbit.y).to.equal(500);
    })

    it('should move the rabbit left, right, and upwards on keydown', () => {
        moveRabbit(event).to.equal();
        expect(rabbit.vY).to.equal(-8);
        expect(rabbit.gravity).to.equal(.2);
    })
    

})