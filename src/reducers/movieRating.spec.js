import movieRating, { initialState } from './movieRating';

describe('movieRating reducer', () => {

  it('should have an initial state', () => {
    expect(movieRating(undefined, {})).toEqual(initialState)
  });

  it('should handle MOVIE_RATING_SET_RATING', () => {

    const initial = {
      rating: 3
    };

    expect(
      movieRating(initial, {
        type: 'MOVIE_RATING_SET_RATING',
        rating: 4
      })
    ).toEqual({
      rating: 4
    });
  });
});
