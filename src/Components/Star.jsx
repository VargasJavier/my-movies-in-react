import { FaStar as StarComplete } from "react-icons/fa";
import { FaStarHalfAlt as StarHalf } from "react-icons/fa";

const renderContent = (rating) => {
  if (rating == 2) return <StarComplete className='complete'></StarComplete>;
  else if (rating == 1) return <StarHalf className='complete'></StarHalf>;
  else if (rating == 0)
    return <StarComplete className='incomplete'></StarComplete>;
  else return null;
};

const Star = ({ rating }) => {
  return <>{renderContent(rating)}</>;
};
export default Star;
