const chai = require('chai');
const expect = chai.expect;
const Rabbit = require('../lib/Rabbit');

describe('Rabbit', () => {
  let rabbit;

  beforeEach(() => {
    rabbit = new Rabbit (10, 10, 10 ,10);
  });

  it('should be an instance of our good friend Rabbit', () => {
    expect(Rabbit).to.exist;
  });

  it('should have parameters of x, y, width, and height', () => {
    expect(rabbit.x).to.equal(10);
    expect(rabbit.y).to.equal(10);
    expect(rabbit.width).to.equal(10);
    expect(rabbit.height).to.equal(10);
  });

  it('should have an initial collision value of false', () => {
    expect(rabbit.collision).to.equal(false);
  });

  it('should have set properties for vX, vY, friction, gravity, and gravitySpeed', () => {
    expect(rabbit.vX).to.equal(0);
    expect(rabbit.vY).to.equal(0);
    expect(rabbit.gravity).to.equal(0);
    expect(rabbit.gravitySpeed).to.equal(0);
  });

  it('should return gravitySpeed to 0', () => {
    rabbit.gravitySpeed = 10;
    expect(rabbit.gravitySpeed).to.equal(10);
    rabbit.bounceUp();
    expect(rabbit.gravitySpeed).to.equal(0);
  });

  it('should move the rabbit upwards on keydown', () => {
    let event = {'keyCode': 32};
    
    rabbit.moveRabbit(event);
  
    expect(rabbit.vY).to.equal(-8);
    expect(rabbit.gravity).to.equal(.2);
  });

  it('should move the rabbit left on keydown', () => {
    let event = { 'keyCode': 37 };

    rabbit.moveRabbit(event);

    expect(rabbit.vX).to.equal(-25);
    expect(rabbit.x).to.equal(-15);
  });

  it('should move the rabbit right on keydown', () => {
    let event = { 'keyCode': 39 }

    rabbit.moveRabbit(event);

    expect(rabbit.vX).to.equal(25);
    expect(rabbit.x).to.equal(35);
  });

    it('should make our rabbit jump', () => {
        rabbit.gravitySpeed = 1; 
        rabbit.gravity = 1;
        rabbit.y = 1;
        rabbit.vY  = 1;
        
        rabbit.jump();

        expect(rabbit.y).to.equal(4)
        expect(rabbit.gravitySpeed).to.equal(2);
    })

    it('should reset the vX, vY, gravity, and gravitySpeed to 0', () => {
        rabbit.vY = 10;
        rabbit.vX = 10;
        rabbit.gravity = 10;
        rabbit.gravitySpeed = 10;
        rabbit.velocityReset();
        expect(rabbit.vY).to.equal(0);
        expect(rabbit.vX).to.equal(0);
        expect(rabbit.gravity).to.equal(0);
        expect(rabbit.gravitySpeed).to.equal(0);
    })

    it('should test to make sure our rabbit cannot exceed the x boundries on the left and right of our canvas', () => {
        rabbit.x = 475;
        rabbit.boundries();
        expect(rabbit.x).to.equal(465);

        rabbit.x = 0;
        rabbit.boundries();
        expect(rabbit.x).to.equal(5);
    })
})