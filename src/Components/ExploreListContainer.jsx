import { useEffect, useState } from "react";
import { getValueSearch } from "../Helpers/getMovies";
import Movie from "./Movie";
import Search from "./Search";

const ExploreListContainer = ({ movies }) => {
  const [search, setSearch] = useState("");
  const [moviesFilter, setMovies] = useState(movies);

  useEffect(() => {
    getValueSearch(movies, search, setMovies);
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
