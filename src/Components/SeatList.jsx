import SeatSelect from "./SeatSelect";

const SeatList = ({ room }) => {
  // room = [0,1,0,0,0, 1,0,1];
  return (
    <section className='containerFlex container__seat'>
      {room.map((r, i) => {
        return <SeatSelect key={i} status={r} />;
      })}
    </section>
  );
};
export default SeatList;
