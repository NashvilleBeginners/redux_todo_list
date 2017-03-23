import { expect } from 'chai';

const asyncFunction = (callback) => {
  setTimeout(() => {
    callback('hello');
  }, 100);
}

describe('an async function', () => {

  it('can be tricky to test', () => {
    asyncFunction((arg) => {
      expect(arg).to.equal('hello');
    })
  });

});