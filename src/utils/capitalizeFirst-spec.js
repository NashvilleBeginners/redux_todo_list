import { expect } from 'chai';
import capitalizeFirst from './capitalizeFirst';

describe('capitalizeFirst utility function', () => {
  it('should capitalize the first letter of a word', () => {
    const name = 'amanda';
    expect(capitalizeFirst(name)).to.equal('Amanda');
  });

  it('should handle one letter strings', () => {
    const letter = 'a';
    expect(capitalizeFirst(letter)).to.equal('A');
  });

  it('should handle empty strings', () => {
    const letter = '';
    expect(capitalizeFirst(letter)).to.equal('');
  });
});