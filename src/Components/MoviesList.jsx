import Movie from "./Movie";

const MoviesList = ({ movies, initial, final }) => {
  return (
    <>
      <section className='containerFlex'>
        <h2>Popular</h2>
        <span>See more</span>
      </section>
      <section className='containerFlex slider'>
        {movies ? (
          movies.slice(initial, final).map((m) => {
            return <Movie key={m.id} movie={m} />;
          })
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </section>
    </>
  );
};
export default MoviesList;
