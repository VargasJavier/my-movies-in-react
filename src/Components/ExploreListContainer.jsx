import { useEffect, useState } from "react";
import Movie from "./Movie";
import Search from "./Search";

const ExploreListContainer = ({ movies }) => {
  const [search, setSearch] = useState("");
  const [moviesFilter, setMovies] = useState(movies);

  const getValueSearch = (movies, search) => {
    const moviesFilters = search
      ? movies.filter((m) => {
          const name = m.name ? m.name : m.title;
          return name.toLowerCase().includes(search);
        })
      : movies;
    setMovies(moviesFilters);
  };

  useEffect(() => {
    getValueSearch(movies, search);
  }, [search]);

  return (
    <>
      <Search setSearch={setSearch} />
      <section className='container'>
        <section className='container__explore'>
          {moviesFilter.length ? (
            moviesFilter.map((m) => {
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
export default ExploreListContainer;
