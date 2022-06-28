import { FaSistrix as IconSearch } from "react-icons/fa";

const Search = () => {
  return (
    <section>
      <div className='containerFlex search'>
        <IconSearch className='search__icon' />
        <input
          className='search__input'
          type='text'
          placeholder='Search your movie'
        />
      </div>
    </section>
  );
};
export default Search;
