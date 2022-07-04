import Seat from "./Seat";
import SeatListContainer from "./SeatListContainer";

const Cinema = () => {
  return (
    <>
      <div className='screen screen__sub'></div>
      <div className='screen'></div>
      <SeatListContainer />
      <section className='containerFlex container__seats--info'>
        <article className='seats__flex'>
          <Seat />
          <span className='seats__name'>Reserved</span>
        </article>
        <article className='seats__flex'>
          <Seat status='3' />
          <span className='seats__name'>Selected</span>
        </article>
        <article className='seats__flex'>
          <Seat status='1' />
          <span className='seats__name'>Available</span>
        </article>
      </section>
    </>
  );
};
export default Cinema;
