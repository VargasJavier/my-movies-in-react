import { AiFillHome as HomeIcon } from "react-icons/ai";
import { FaRegCompass as CompassIcon } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const NavBottom = () => {
  return (
    <nav className='containerFlex nav'>
      <article className='nav__container'>
        <HomeIcon className='nav__icon active__icon' />
        <div className='nav__circle active'></div>
      </article>
      <article className='nav__container'>
        <CompassIcon className='nav__icon' />
        <div className='nav__circle'></div>
      </article>
      <article className='nav__container'>
        <FaRegBookmark className='nav__icon' />
        <div className='nav__circle'></div>
      </article>
      <article className='nav__container'>
        <FaRegUser className='nav__icon' />
        <div className='nav__circle'></div>
      </article>
    </nav>
  );
};
export default NavBottom;
