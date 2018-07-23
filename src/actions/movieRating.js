export const MOVIE_RATING_SET_RATING = 'MOVIE_RATING_SET_RATING';

export function setRating(rating) {
  return { type: MOVIE_RATING_SET_RATING, rating };
}
