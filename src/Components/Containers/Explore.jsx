import ExploreList from "../ExploreList";
import ExploreListContainer from "../ExploreListContainer";
import Header from "../Header";

const Explore = ({ movies, send }) => {
  return (
    <>
      <Header send={send} />
      <ExploreListContainer movies={movies} />
    </>
  );
};
export default Explore;
