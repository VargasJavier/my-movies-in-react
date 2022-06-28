const ContainerPages = ({ changePage, disable, page }) => {
  return (
    <div className='containerFlex containerPages'>
      <button onClick={(e) => changePage(e, -1)} disabled={disable.previous}>
        Prev
      </button>
      <p>{`Page ${page}`}</p>
      <button onClick={(e) => changePage(e, +1)} disabled={disable.next}>
        Next
      </button>
    </div>
  );
};
export default ContainerPages;
