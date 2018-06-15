import React from 'react'
import Header from '../../src/components/Header'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Header />);
});
