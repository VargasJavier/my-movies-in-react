const Seat = ({ status = 0 }) => {
  if (status == 3) return <button className='seat selected'></button>;
  else if (status == 1) return <button className='seat reserved'></button>;
  else if (status == 2) return <button className='seat hallway'></button>;
  else return <button className='seat reserved'>X</button>;
};
export default Seat;
