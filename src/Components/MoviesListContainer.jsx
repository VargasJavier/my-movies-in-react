import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import ContainerPages from "./ContainerPages";
import Header from "./Header";
import Search from "./Search";
import NavBottom from "./NavBottom";

const MoviesListContainer = () => {
  const [movies, setMovies] = useState([]);
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(5);
  const [page, setPage] = useState(1);
  const [disable, setDisable] = useState({ next: false, previous: true });
  const URL =
    "https://api.themoviedb.org/3/trending/all/day?api_key=a9623aebd3d503d051631e3bf4c4ef8f";

  const getMovies = async () => {
    const data = await fetch(URL);
    const moviesData = await data.json();
    setMovies(moviesData.results);
  };

  function changePage(evt, number) {
    setPage(page + number);
    isDisable(number);
    setInitial(initial + number * 5);
    setFinal(final + number * 5);
  }

  function isDisable(number) {
    if (page + number < 2) setDisable({ ...disable, previous: true });
    else if (page + number > 3) setDisable({ ...disable, next: true });
    else setDisable({ next: false, previous: false });
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Search />
      <MoviesList movies={movies} initial={initial} final={final} />
      <MoviesList movies={movies} initial={initial} final={final} />
      <MoviesList movies={movies} initial={initial} final={final} />
      <NavBottom />
    </div>
  );
};
export default MoviesListContainer;
