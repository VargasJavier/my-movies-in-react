import { URL_IMAGE } from "../Helpers/getMovies";

const TopMovie = ({ movie }) => {
  return (
    <section key={movie.id} className='content__image carousel-item'>
      <img
        className='image__top'
        src={URL_IMAGE + movie.backdrop_path}
        alt='Top movie'
      />
      <h3 className='title__movie'>{movie.title}</h3>
    </section>
  );
};
export default TopMovie;
