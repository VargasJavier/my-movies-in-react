import { useState } from "react";
import SeatList from "./SeatList";
import roomData from "../Data/roomData";
import { getRoom } from "../Helpers/getMovies";

const SeatListContainer = () => {
  const { results } = roomData;
  const [rooms, setRooms] = useState(results);

  return (
    // <section className='container__seats'>
    <section className='content__seats'>
      {rooms.map((r) => {
        const room = getRoom(r);
        return <SeatList key={r.id} room={room} />;
      })}
    </section>
    // </section>
  );
};
export default SeatListContainer;
