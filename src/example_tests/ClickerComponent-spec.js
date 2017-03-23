import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Clicker from './ClickerComponent';

describe('ClickerComponent', () => {

  it('should render without error', () => {
    const cmpt = shallow(<Clicker />);
    expect(cmpt).to.have.lengthOf(1);
  });

  it('increments the count when the button is clicked', () => {
    const cmpt = shallow(<Clicker />);
    expect(cmpt.state('count')).to.equal(0);
    cmpt.find('button').simulate('click');
    expect(cmpt.state('count')).to.equal(1);
  });

});