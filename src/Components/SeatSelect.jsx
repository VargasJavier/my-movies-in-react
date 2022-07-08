const SeatSelect = ({ status = 0 }) => {
  if (status == 3)
    return (
      <div className='container__select'>
        <label className='content__select'>
          <input type='checkbox' className='select' defaultChecked={true} />
          <span className='select__span'>X</span>
        </label>
      </div>
    );
  else if (status == 1)
    return (
      <div className='container__select'>
        <label className='content__select'>
          <input type='checkbox' className='select' disabled />
          <span className='select__span reserved'>X</span>
        </label>
      </div>
    );
  else if (status == 2)
    return (
      <div className='container__select'>
        <label className='content__select'>
          <input type='checkbox' className='select' disabled />
          <span className='select__span hallway'>X</span>
        </label>
      </div>
    );
  else
    return (
      <div className='container__select'>
        <label className='content__select'>
          <input type='checkbox' className='select' />
          <span className='select__span'>X</span>
        </label>
      </div>
    );
};
export default SeatSelect;
