// const chai = require('chai');
// const expect = chai.expect
const { expect } = require('chai');
const { describe } = require('mocha');

const reverseString = require('../problems/reverse-string')




describe('reverseString()', function (){


  it('should reverse the string', function() {
    


    expect(reverseString('fun')).to.equal('nuf')

  })


})