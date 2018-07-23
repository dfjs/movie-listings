import movieGenres, { getMovieGenresWithAssociatedMovies, getSelectedMovieGenreIds, initialState } from './movieGenres';

describe('movieGenres reducer', () => {

  it('should have an initial state', () => {
    expect(movieGenres(undefined, {})).toEqual(initialState)
  });

  it('should handle UPDATE_MOVIE_GENRE', () => {

    const initial = {
      movieGenres: {
        1: {
          id: 1,
          name: 'Action',
          checked: false
        },
        2: {
          id: 1,
          name: 'Thriller',
          checked: true
        }
      }
    };

    expect(
      movieGenres(initial, {
        type: 'UPDATE_MOVIE_GENRE',
        genre: { id: 1, name: 'Action', checked: true }
      })
    ).toEqual({
      movieGenres: {
        ...initial.movieGenres,
        1: { id: 1, name: 'Action', checked: true}
      }
    });
  });

  it('should get the selected genre ids', () => {

    const initial = {
      movieGenres: {
        1: {
          id: 1,
          genre_ids: [1,2],
          name: 'Action',
          checked: false
        },
        2: {
          id: 1,
          genre_ids: [1,2],
          name: 'Thriller',
          checked: true
        }
      }
    };

    let state = movieGenres(initial, {
      type: 'UPDATE_MOVIE_GENRE',
      genre: { id: 1, name: 'Action', checked: true }
    });

    state = movieGenres(state, {
      type: 'UPDATE_MOVIE_GENRE',
      genre: { id: 2, name: 'Action', checked: false }
    });

    const ids = getSelectedMovieGenreIds({ movieGenres: state });

    expect(ids).toEqual([1]);

  });

  it('should get the genres for the associated movies', () => {

    const state = {
      movies: {
        movies: [
          { genre_ids: [2] },
          { genre_ids: [2, 3] }
        ]
      },
      movieGenres: {
        movieGenres: {
          1: {
            id: 1,
            name: 'Action'
          },
          2: {
            id: 2,
            name: 'Thriller'
          },
          3: {
            id: 3,
            name: 'Animation'
          }
        }
      }
    };

    const genres = getMovieGenresWithAssociatedMovies(state);

    expect(genres).toEqual({
      '2': { id: 2, name: 'Thriller' },
      '3': { id: 3, name: 'Animation' }
      });
  });
});
