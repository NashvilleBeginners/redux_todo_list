import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import BasicComponent from './BasicComponent';

describe('BasicComponent', () => {
  it('should render without blowing up', () => {
    let cmpt = shallow(<BasicComponent />);
    expect(cmpt).to.have.lengthOf(1);
  })
});