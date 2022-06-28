import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import Header from "./Header";
import NavBottom from "./NavBottom";
import TopMoviesList from "./TopMoviesList";

const MoviesListContainer = () => {
  const [movies, setMovies] = useState([]);
  const [moviesRandom, setMoviesRandom] = useState([]);
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(5);
  const URL =
    "https://api.themoviedb.org/3/trending/all/day?api_key=a9623aebd3d503d051631e3bf4c4ef8f";
  const URL_RECOMENDATIONS =
    "https://api.themoviedb.org/3/movie/2/recommendations?api_key=a9623aebd3d503d051631e3bf4c4ef8f&language=en-US&page=1";

  const getMovies = async () => {
    const data = await fetch(URL);
    const moviesData = await data.json();
    setMovies(moviesData.results);
  };

  const getMoviesRecomendations = async () => {
    const data = await fetch(URL_RECOMENDATIONS);
    const moviesData = await data.json();
    const moviesDataFilter = moviesData.results;
    const dataFinal = moviesDataFilter.filter((movie) => {
      return movie.backdrop_path !== null;
    });
    console.log(dataFinal);
    getMovieRandom(moviesDataFilter);
  };

  function sortArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const getMovieRandom = (movieDataRandom) => {
    setMoviesRandom(sortArray(movieDataRandom).slice(0, 5));
    console.log("CONTAINER: ", moviesRandom);
  };

  useEffect(() => {
    getMovies();
    getMoviesRecomendations();
  }, []);

  return (
    <div className='App'>
      <Header />
      <TopMoviesList movies={moviesRandom} />
      <MoviesList movies={movies} initial={initial} final={final} />
      <NavBottom />
    </div>
  );
};
export default MoviesListContainer;
