# Movie Listings!

This is a SPA that uses a couple of TMDB API endpoints to get movies that are now playing,
and allows the user to filter these movies by their Ratings and Genres - sorted by popularity.

Note: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Setup/environment requirements

- yarn / npm
- node 8
- a modern browser


## Get Started

### Setup

### 1. Get Movie Listings

```
$ git clone https://github.com/dfjs/movie-listings
$ cd movie-listings
```

### 2. Setup your TMDB API Key

Edit `.env` and enter your TMDB API Key so that the app can pick it up and use for making requests.
(Or create .env.local and add it there, for local dev).

### 3. Get going!

```
$ yarn
$ yarn start
```

## Testing

The tests are pretty simple at this stage!

```
$ yarn
$ yarn test
```


## TODO

- Look to use `Object.entries` instead of Object.keys - for ES2017.
- Consider a different / more accessible data structure for Genres, as accessing them feels like too much overhead
  for the potential benefits of using an object literal for Genre lookups/updates.
- MovieList - ideally wouldn't need to provide all the Genres, to then pass onto Movie...
- Genre updates/changes - could be simplified
- Introduce typing(!), which would cause some refactoring but worthwhile!
- PropTypes enhancements
- More tests
