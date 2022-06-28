const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
import { FaStar as StarComplete } from "react-icons/fa";
import { FaStarHalfAlt as StarHalf } from "react-icons/fa";

const Movie = ({ movie }) => {
  return (
    <article className='card'>
      <img className='card__image' src={URL_IMAGE + movie.backdrop_path} />
      <p className='ellipsis'>
        {movie.name ? `${movie.name}` : `${movie.title}`}
      </p>
      <StarComplete className='complete'></StarComplete>
      <StarComplete className='complete'></StarComplete>
      <StarComplete className='complete'></StarComplete>
      <StarHalf className='complete'></StarHalf>
      <StarComplete className='incomplete'></StarComplete>
    </article>
  );
};
export default Movie;
