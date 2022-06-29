import { AiFillHome as HomeIconActive } from "react-icons/ai";
import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { FaRegCompass as CompassIcon } from "react-icons/fa";
import { FaCompass as CompassIconActive } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegUser as UserIcon } from "react-icons/fa";
import { FaUserAlt as UserIconActive } from "react-icons/fa";

const NavBottom = ({ send, state }) => {
  return (
    <nav className='containerFlex nav'>
      <button
        className='nav__container'
        onClick={() => {
          send("BACK");
        }}
      >
        {state.matches("idle") ? (
          <>
            <HomeIconActive className='nav__icon active__icon' />
            <div className='nav__circle active'></div>
          </>
        ) : (
          <>
            <HomeIcon className='nav__icon' />
            <div className='nav__circle'></div>
          </>
        )}
      </button>
      <button
        className='nav__container'
        onClick={() => {
          send("EXPLORING");
        }}
      >
        {state.matches("explore") ? (
          <>
            <CompassIconActive className='nav__icon active__icon' />
            <div className='nav__circle active'></div>
          </>
        ) : (
          <>
            <CompassIcon className='nav__icon' />
            <div className='nav__circle'></div>
          </>
        )}
      </button>
      <button
        className='nav__container'
        onClick={() => {
          send("ADD");
        }}
      >
        {state.matches("seats") ? (
          <>
            <FaBookmark className='nav__icon active__icon' />
            <div className='nav__circle active'></div>
          </>
        ) : (
          <>
            <FaRegBookmark className='nav__icon' />
            <div className='nav__circle'></div>
          </>
        )}
      </button>
      <button
        className='nav__container'
        onClick={() => {
          send("PROFILE");
        }}
      >
        {state.matches("profile") ? (
          <>
            <UserIconActive className='nav__icon active__icon' />
            <div className='nav__circle active'></div>
          </>
        ) : (
          <>
            <UserIcon className='nav__icon' />
            <div className='nav__circle'></div>
          </>
        )}
      </button>
    </nav>
  );
};
export default NavBottom;
