import React from 'react'
import MovieCard from '../../../src/components/MovieCard'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<MovieCard />);
});
