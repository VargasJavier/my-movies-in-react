import { FaStar as StarComplete } from "react-icons/fa";
import { FaStarHalfAlt as StarHalf } from "react-icons/fa";
import { URL_IMAGE } from "../Helpers/getMovies";

const Movie = ({ movie }) => {
  return (
    <>
      <img className='card__image' src={URL_IMAGE + movie.backdrop_path} />
      <p className='ellipsis'>
        {movie.name ? `${movie.name}` : `${movie.title}`}
      </p>
      <StarComplete className='complete'></StarComplete>
      <StarComplete className='complete'></StarComplete>
      <StarComplete className='complete'></StarComplete>
      <StarHalf className='complete'></StarHalf>
      <StarComplete className='incomplete'></StarComplete>
    </>
  );
};
export default Movie;
