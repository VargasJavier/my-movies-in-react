import ExploreList from "../ExploreList";
import Header from "../Header";
import Search from "../Search";

const Explore = ({ movies, send }) => {
  return (
    <>
      <Header send={send}>
        <Search />
      </Header>
      <ExploreList movies={movies} />
    </>
  );
};
export default Explore;
