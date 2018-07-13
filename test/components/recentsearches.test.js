import React from 'react'
import RecentSearches from '../../src/components/RecentSearches'
import { shallow, mount } from 'enzyme'

const testHistory = [
                      [
                        "title",
                        "year",
                        "poster"
                      ],
                      [
                        "title",
                        "year",
                        "poster"
                      ]
                    ]

it('renders without crashing', () => {
  shallow(<RecentSearches history={testHistory}/>);
});

it('calls onClick event on click of Clear History button', () =>{
  const onClick = jest.fn();
  const wrapper = mount(<RecentSearches history={testHistory} clearHistory={onClick}/>);
  wrapper.find('button.shadow-hover').simulate('click');
  expect(onClick).toBeCalled()
})

it('calls onClick event on click of search history item', () =>{
  const onClick = jest.fn();
  const wrapper = mount(<RecentSearches history={testHistory} onClick={onClick}/>);
  wrapper.find('p.underline-hover').first().simulate('click');
  expect(onClick).toBeCalled()
})
