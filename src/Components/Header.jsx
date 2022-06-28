import { FaRegUser as UserIcon } from "react-icons/fa";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <header className='containerFlex header'>
        <h1>Hi, Javier!</h1>
        <section className='container__profile'>
          <UserIcon />
          <div className='nav__circle available'></div>
        </section>
      </header>
      <Search />
    </>
  );
};
export default Header;
