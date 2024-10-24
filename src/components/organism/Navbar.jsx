/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaBars, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


function Navbar({ navBg = false }) {
  const [isHalfScreen, setIsHalfScreen] = useState(window.innerWidth > 820);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHalfScreen(window.innerWidth > 820);
      if (isHalfScreen !== window.innerWidth > 820) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isHalfScreen]);

  const handleNavButton = () => {
    setOpenNav(!openNav);
    console.log('object')
  };
  return (
    <div className="fixed pointer-events-none border-css before:border-2 border-2 m-3 z-20 border-black" style={{ width: 'calc(100% - 30px)', height: 'calc(100% - 30px)' }}>
      <ScrollToTop />
      <div className="flex relative items-center justify-between">
        {navBg ? <div className=" absolute bg-[#FBFBFB] w-full h-full -z-10"></div> : <div className=" absolute bg-[#FBFBFB] 2md:bg-[#FBFBFB00] w-full h-full -z-10"></div>}
        <Link to='/' className="pointer-events-auto text-2xl relative border-css before:border-r-2 before:border-b-2 font-black h-20 flex items-center justify-center text-shadow tracking-wide border-r-2 border-b-2 border-black px-8">
          AMEER
        </Link>
        {isHalfScreen ? (
          <div className="flex items-center justify-between w-full">
            <nav className="px-10 border-b-2 border-black h-20 relative border-css before:border-b-2 pointer-events-auto">
              <ul className="flex h-full items-center gap-10">
                <li className="text-sm font-bold uppercase hover:text-[#fa4729] transition-all duration-300">
                  <NavLink to='/' className="pointer-events-auto">Home</NavLink>
                </li>
                <li className="text-sm font-bold uppercase hover:text-[#fa4729] transition-all duration-300">
                  <NavLink to='/myProjects' className="pointer-events-auto">My Projects</NavLink>
                </li>

              </ul>
            </nav>
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


        ) : (
          <button type="button" onClick={handleNavButton} className="flex pointer-events-auto justify-center items-center w-14 h-14 min-w-10 shadow-box hover:shadow-hoverbox z-[100] mr-5 mt-2 border-2 border-black transition-all duration-300">
            {!openNav ? <FaBars className="text-black text-2xl" /> : <IoMdClose className="text-black text-2xl" />}
          </button>
        )}
        <div
          className={`absolute border-2 border-black right-2 left-2 z-50 bg-white shadow-box p-5 transition-all duration-300 ${openNav && !isHalfScreen ? "top-24 opacity-100" : "-top-96 opacity-0"}`}>
          <div className="flex flex-col w-full justify-between">
            <ul className="flex flex-col flex-1 gap-4 justify-start items-start w-full">
              <li className="text-sm font-bold uppercase hover:text-[#fa4729] transition-all duration-300">
                <NavLink to='/' className="pointer-events-auto">Home</NavLink>
              </li>
              <li className="text-sm font-bold uppercase hover:text-[#fa4729] transition-all duration-300">
                <NavLink to='/myProjects' className="pointer-events-auto">My Projects</NavLink>
              </li>
            </ul>
            <ul className="flex gap-4 mt-10 flex-col xmobile:flex-row">
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
        </div>
      </div>
      {
        !navBg ? <div className="absolute left-0 bottom-0 h-16 flex justify-center items-center px-7 border-css before:border-t-2 border-t-2 border-black pointer-events-auto ">
          <h1 className="text-[14px] font-semibold uppercase flex items-center pointer-events-auto">
            <BiSolidRightArrow className="text-rose-600 pointer-events-auto" /> Created <span className="text-rose-600 mx-1 pointer-events-auto"> By</span> Ameer Badran. <BiSolidLeftArrow className="text-rose-600 pointer-events-auto" />
          </h1>
        </div>
          :
          <></>
      }

    </div >
  );
}

export default Navbar;
