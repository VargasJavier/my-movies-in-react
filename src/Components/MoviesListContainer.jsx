import { useEffect, useState } from "react";
import { useMachine } from "@xstate/react";
import NavBottom from "./NavBottom";
import { getMovies, getMoviesRecomendations } from "../Helpers/getMovies";
import movieMachine from "../Machines/movieMachine";
import Home from "./Containers/Home";
import Explore from "./Containers/Explore";
import Seats from "./Containers/Seats";
import Profile from "./Containers/Profile";

const MoviesListContainer = () => {
  const [state, send] = useMachine(movieMachine);
  const [movies, setMovies] = useState([]);
  const [moviesRandom, setMoviesRandom] = useState([]);

  const renderContent = () => {
    if (state.matches("idle"))
      return <Home moviesRandom={moviesRandom} movies={movies} send={send} />;
    if (state.matches("explore"))
      return <Explore movies={movies.concat(moviesRandom)} send={send} />;
    if (state.matches("seats")) return <Seats />;
    if (state.matches("profile")) return <Profile />;
    return null;
  };

  useEffect(() => {
    getMovies(setMovies);
    getMoviesRecomendations(setMoviesRandom);
  }, []);

  return (
    <div className='App'>
      {renderContent()}
      <NavBottom send={send} state={state} />
    </div>
  );
};
export default MoviesListContainer;
