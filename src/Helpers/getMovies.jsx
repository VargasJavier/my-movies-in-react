// VARIABLES

export const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
const URL =
  "https://api.themoviedb.org/3/trending/all/day?api_key=a9623aebd3d503d051631e3bf4c4ef8f";
const URL_RECOMENDATIONS =
  "https://api.themoviedb.org/3/movie/2/recommendations?api_key=a9623aebd3d503d051631e3bf4c4ef8f&language=en-US&page=1";
export const DEFAULT = 0;
export const OCUPED = 1;
export const HALLWAY = 2;
export const SELECTED = 3;
// FUNCTIONS

export const getMovies = async (setMovies) => {
  const data = await fetch(URL);
  const moviesData = await data.json();
  const movies = moviesData.results.map((m) => {
    let rating = getRating(m.vote_average);
    return { ...m, rating };
  });
  setMovies(movies);
};

export const getMoviesRecomendations = async (setMoviesRandom) => {
  const data = await fetch(URL_RECOMENDATIONS);
  const moviesData = await data.json();
  const moviesDataFilter = moviesData.results;
  const dataFinal = moviesDataFilter.filter((movie) => {
    return movie.backdrop_path !== null;
  });
  const movies = dataFinal.map((m) => {
    let rating = getRating(m.vote_average);
    return { ...m, rating };
  });
  setMoviesRandom(sortArray(movies));
};

function sortArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export const getValueSearch = (movies, search, setMovies) => {
  const moviesFilters = search
    ? movies.filter((m) => {
        const name = m.name ? m.name : m.title;
        return name.toLowerCase().includes(search);
      })
    : movies;
  setMovies(moviesFilters);
};

export const getRating = (rating) => {
  let number = Math.round(rating) / 2;
  let ratingArray = [];
  for (let i = 0; i < 5; i++) {
    if (number == 0) {
      ratingArray.push(0);
      continue;
    } else if (number < 1) {
      ratingArray.push(1);
      number = 0;
      continue;
    } else ratingArray.push(2);
    number--;
  }
  return ratingArray;
};

// CONVERT ROOM OBJECT A ROOM ARRAY

export const getRoom = (r) => {
  const room = [];
  for (let i = 0; i < r.capacity; i++) {
    if (r.ocuped.some((e) => e == i)) room.push(1);
    else room.push(0);
  }
  return [
    ...room.slice(0, r.capacity / 2),
    2,
    2,
    ...room.slice(r.capacity / 2),
  ];
};
