import TopMovie from "./TopMovie";

const TopMoviesList = ({ movies, send }) => {
  return (
    <>
      <section className='containerFlex container__title'>
        <h2>Top</h2>
        <button
          className='see'
          onClick={() => {
            send("EXPLORING");
          }}
        >
          See more
        </button>
      </section>
      <section className='container__carousel'>
        <section className='carousel carousel-horizontal'>
          {movies ? (
            movies
              .slice(0, 5)
              .map((movie) => <TopMovie key={movie.id} movie={movie} />)
          ) : (
            <p>No found movie now</p>
          )}
        </section>
      </section>
    </>
  );
};
export default TopMoviesList;
