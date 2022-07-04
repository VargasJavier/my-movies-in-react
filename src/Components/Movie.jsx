import { URL_IMAGE } from "../Helpers/getMovies";
import StarList from "./StarList";

const Movie = ({ movie }) => {
  return (
    <>
      <img className='card__image' src={URL_IMAGE + movie.backdrop_path} />
      <p className='ellipsis'>
        {movie.name ? `${movie.name}` : `${movie.title}`}
      </p>
      <StarList ratings={movie.rating} />
    </>
  );
};
export default Movie;
