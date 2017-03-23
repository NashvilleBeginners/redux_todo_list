import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import BasicComponent from './BasicComponent';

describe('BasicComponent', () => {
  let cmpt;

  beforeEach(() => {
    cmpt = shallow(<BasicComponent />);
  });
  
  it('should render without blowing up', () => {
    expect(cmpt).to.have.lengthOf(1);
  });

  it('should contain an element with a ".greeting" class', () => {
    expect(cmpt.find('.greeting')).to.have.lengthOf(1);
  });

});