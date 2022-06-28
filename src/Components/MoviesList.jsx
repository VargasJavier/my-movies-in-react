import Movie from "./Movie";

const MoviesList = ({ movies, initial, final, title = "Popular" }) => {
  return (
    <>
      <section className='containerFlex container__title'>
        <h2>{title}</h2>
        <span className='see'>See more</span>
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
      <div className='content'></div>
    </>
  );
};
export default MoviesList;
