/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

function Navbar({ navBg = false }) {
  return (
    <div className="fixed pointer-events-none border-css before:border-2 border-2 m-3 z-20 border-black" style={{ width: 'calc(100% - 30px)', height: 'calc(100% - 30px)' }}>
      <div className="flex relative items-center justify-between">
        {navBg ? <div className=" absolute bg-[#FBFBFB] w-full h-full -z-10"></div> : <></>}
        <div className="flex items-center ">
          <Link to='/' className="pointer-events-auto text-2xl relative border-css before:border-r-2 before:border-b-2 font-black h-20 flex items-center justify-center text-shadow tracking-wide border-r-2 border-b-2 border-black px-8">
            AMEER
          </Link>
          <nav className="px-10 border-b-2 border-black h-20 relative border-css before:border-b-2 pointer-events-auto">
            <ul className="flex h-full items-center gap-10">
              <li className="text-sm font-bold uppercase">
                <NavLink to='/' className="pointer-events-auto">Home</NavLink>
              </li>
              <li className="text-sm font-bold uppercase">
                <NavLink to='/myProjects' className="pointer-events-auto">My Projects</NavLink>
              </li>
              
            </ul>
          </nav>
        </div>
        <ul className="flex gap-7 px-10 border-b-2 relative border-css before:border-b-2 border-black h-20 items-center pointer-events-auto">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100000331540897" target="_blank" className="pointer-events-auto text-xl"><BsFacebook /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ameer-badran-830015289/" target="_blank" className="pointer-events-auto text-xl"><FaLinkedinIn /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/ameerb_02/" target="_blank" className="pointer-events-auto text-xl"><FaInstagram /></a>
          </li>
        </ul>
      </div>
      {!navBg ? <div className="absolute left-0 bottom-0 h-16 flex justify-center items-center px-7 border-css before:border-t-2 border-t-2 border-black pointer-events-auto ">
        <h1 className="text-[14px] font-semibold uppercase flex items-center pointer-events-auto">
          <BiSolidRightArrow className="text-rose-600 pointer-events-auto" /> Created <span className="text-rose-600 mx-1 pointer-events-auto"> By</span> Ameer Badran. <BiSolidLeftArrow className="text-rose-600 pointer-events-auto" />
        </h1>
      </div>
        :
        <></>}

    </div>
  );
}

export default Navbar;
