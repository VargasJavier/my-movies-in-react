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
  setMovies(moviesData.results);
};

export const getMoviesRecomendations = async (setMoviesRandom) => {
  const data = await fetch(URL_RECOMENDATIONS);
  const moviesData = await data.json();
  const moviesDataFilter = moviesData.results;
  const dataFinal = moviesDataFilter.filter((movie) => {
    return movie.backdrop_path !== null;
  });
  setMoviesRandom(sortArray(dataFinal));
};

function sortArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

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
