import Movie from "./Movie";

const MoviesList = ({ movies, posicion, send }) => {
  return (
    <>
      <section className='containerFlex container__title'>
        <h2>Popular</h2>
        <button
          className='see'
          onClick={() => {
            send("EXPLORING");
          }}
        >
          See more
        </button>
      </section>
      <section className='containerFlex slider'>
        {movies ? (
          movies.slice(0, 5).map((m) => {
            return (
              <article key={m.id} className='card'>
                <Movie movie={m} />
              </article>
            );
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
