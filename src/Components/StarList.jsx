import Star from "./Star";

const StarList = ({ ratings }) => {
  return (
    <>
      {ratings.map((rating, i) => (
        <Star key={i} rating={rating} />
      ))}
    </>
  );
};
export default StarList;
