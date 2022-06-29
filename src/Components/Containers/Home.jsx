import Header from "../Header";
import MoviesList from "../MoviesList";
import TopMoviesList from "../TopMoviesList";

const Home = ({ moviesRandom, movies, send }) => {
  return (
    <>
      <Header send={send} />
      <TopMoviesList movies={moviesRandom} send={send} />
      <MoviesList movies={movies} send={send} />
    </>
  );
};
export default Home;
