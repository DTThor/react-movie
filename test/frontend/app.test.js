import React from 'react'
import App from '../../src/App'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<App />);
});

it('loads fetchMovies method', () => {
  const wrapper = mount(<App />)
  expect(wrapper.instance().fetchMovies).toBeDefined();
});

it('loads handleSearchChange method', () => {
  const wrapper = mount(<App />)
  expect(wrapper.instance().handleSearchChange).toBeDefined();
});

it('loads handleSubmit method', () => {
  const wrapper = mount(<App />)
  expect(wrapper.instance().handleSubmit).toBeDefined();
});

it('loads handleRecentSubmit method', () => {
  const wrapper = mount(<App />)
  expect(wrapper.instance().handleRecentSubmit).toBeDefined();
});

it('loads clearSearch method', () => {
  const wrapper = mount(<App />)
  expect(wrapper.instance().clearSearch).toBeDefined();
});

it('loads clearHistory method', () => {
  const wrapper = mount(<App />)
  expect(wrapper.instance().clearHistory).toBeDefined();
});

it('loads initial state correctly', () => {
  const wrapper = mount(<App />)
  expect(wrapper.instance().state).toEqual({ movies: [],
           search: '',
           status: 'Search a massive database of movies and TV shows!',
           color: 'black',
           history: [] });
});

it('clears search history when clear history button is clicked', () => {
  const wrapper = mount(<App />)
  wrapper.instance().setState({history: ['flubber']})
  wrapper.find('button.shadow-hover').simulate('click');
  expect(wrapper.instance().state.history).toEqual([])
});
