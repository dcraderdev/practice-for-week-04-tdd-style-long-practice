const chai = require('chai')
const expect = chai.expect
const { returnsThree } = require('../problems/number-fun')
const { reciprocal } = require('../problems/number-fun')

describe('returnsThree()', function (){


  it('should return the number 3', function() {
    


    expect(returnsThree()).to.equal(3)

  })


})





describe('when number is less than 1 and more than 1,000,000', ()=>  {

  it('throws an error', function () {
        expect(() => reciprocal(0.05)).to.throw(TypeError, 'range');
        expect(() => reciprocal(2000000)).to.throw(TypeError, 'range');
        expect(() => reciprocal(0.1)).to.throw(TypeError, 'range');
      });


});




describe('reciprocal()', function (){


  it('should recipricate the number', function() {

    expect(reciprocal(4)).to.equal(.25);
    // expect(reciprocal('num')).to.throw(TypeError);

    // expect(() => reverseString(1)).to.throw(TypeError);
  })
})

