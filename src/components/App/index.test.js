import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App, getFilteredMovies } from './index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {

  const props = {
    movies: [],
    movieGenres: {},
    loadGenresError: false,
    loadMoviesError: false,
    getMovies: jest.fn(),
    getMovieGenres: jest.fn()
  };

  const enzymeWrapper = mount(<App {...props} />);

  return {
    props,
    wrapper: enzymeWrapper
  }
}

describe('App', () => {

  it('should render', () => {
    const { wrapper } = setup();
  });

  it('should call getMovies & getMovieGenres on render', () => {
    const { wrapper, props } = setup();

    expect(props.getMovies.mock.calls.length).toBe(1);
    expect(props.getMovieGenres.mock.calls.length).toBe(1);
  });

  it('should expect certain movies based on specific rating and genre ids', () => {

    // NOTE: ratings are not accurate
    const movies = [
      { id: 1, name: 'Batman', vote_average: 4, genre_ids:[1] },
      { id: 2, name: 'Batman II', vote_average: 5, genre_ids:[1, 2] },
      { id: 3, name: 'Batman III', vote_average: 6, genre_ids:[1, 2, 3] }
    ];

    // We want movies with rating >= 5 and genres 1 & 2
    const filteredMovies = getFilteredMovies(movies, 5, [1, 2]);

    expect(filteredMovies).toEqual([
      { id: 2, name: 'Batman II', vote_average: 5, genre_ids:[1, 2] },
      { id: 3, name: 'Batman III', vote_average: 6, genre_ids:[1, 2, 3] }
      ]);
  });
});
