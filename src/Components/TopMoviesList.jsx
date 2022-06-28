import TopMovie from "./TopMovie";

const TopMoviesList = ({ movies }) => {
  console.log("TOP:", movies);
  return (
    <>
      <section className='containerFlex container__title'>
        <h2>Top</h2>
        <span className='see'>See more</span>
      </section>
      <section className='container__carousel'>
        <section className='carousel carousel-horizontal'>
          {movies ? (
            movies.map((movie) => <TopMovie key={movie.id} movie={movie} />)
          ) : (
            <p>No found movie now</p>
          )}
        </section>
      </section>
    </>
  );
};
export default TopMoviesList;
