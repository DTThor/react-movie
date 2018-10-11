import React from 'react'
import MovieList from '../../../src/components/MovieList'
import {shallow} from 'enzyme'

const testMovies = [
                      {
                        "title": "Men in Black 10",
                        "year": "2055",
                        "poster": 'null'
                      },
                      {
                        "title": "Star Wars Episode 702",
                        "year": "2109",
                        "poster": 'null'
                      }
                    ]

it('renders without crashing', () => {
  shallow(<MovieList movies={testMovies} />);
});
