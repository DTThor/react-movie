import React from 'react'
import SearchBar from '../../../src/components/SearchBar'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<SearchBar />);
});

it('calls onChange event when searchbar input is changed', () => {
  const onSearchChange = jest.fn();
  let wrapper = mount(<SearchBar onSearchChange={onSearchChange}/>);
  wrapper.find('input.w-50-ns').simulate('change');
  expect(onSearchChange).toBeCalled();
});
