import { expect } from 'chai';
import capitalizeFirst from './capitalizeFirst';

describe('capitalizeFirst utility function', () => {
  it('should capitalize the first letter of a word', () => {
    const name = "amanda";
    expect(capitalizeFirst(name)).to.equal('Amanda');
  });
});