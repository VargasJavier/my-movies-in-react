import Movie from "./Movie";

const ExploreList = ({ movies }) => {
  return (
    <>
      <section className='container'>
        <section className='container__explore'>
          {movies ? (
            movies.map((m) => {
              return (
                <article key={m.id} className='card card__explore'>
                  <Movie movie={m} />
                </article>
              );
            })
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </section>
      </section>
      <div className='content'></div>
    </>
  );
};
export default ExploreList;
