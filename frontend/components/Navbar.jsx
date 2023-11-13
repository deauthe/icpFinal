import { useState } from "react";
import {Link, Routes, Route} from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Minter from "./Minter";
import { useEffect } from "react";
import CURRENT_USER_ID from "../index";
import { memera } from "../../src/declarations/memera";
import Gallery from "./Gallery";

const Navbar = () => {
  const [userOwnedGallery, setUserOwnedGallery]=useState();
  const [listedGallery,setListedGallery]=useState();
  const [toggle, setToggle] = useState(false);

  
  async function getMemes() {
    try {
      const userMemeIds = await memera.getOwnedMemes(CURRENT_USER_ID);
      setUserOwnedGallery(<Gallery title="My Collection" ids={userMemeIds} role="collection" />);
  
      const allMemes = await memera.getExistingMemes();
      setListedGallery(<Gallery title="Discover" ids={allMemes} role="discover" />);
    } catch (error) {
      console.error("Error fetching memes:", error);
    }
  }
  

  useEffect(()=>{
  getMemes();
  },[CURRENT_USER_ID]);
  
  return (
    
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
           <Link to={`/${nav.title}`} key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-dimWhite mr-10`}>
           {nav.title}
         </Link>
        ))}
        {/* <li className="text-white bg-purple-700 hover:bg-purple-900 py-1 px-2 rounded-[20px] font-poppins font-medium cursor-pointer text-[16px]">
          <a href="#">Connect Wallet</a>
        </li> */}
      </ul>
      

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
               <Link to={`/${nav.title}`} key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-dimWhite mr-10`}>
               {nav.title}
             </Link>
            ))}
            <li className="text-white bg-purple-700 hover:bg-purple-900 py-1 px-2 rounded-[25px] font-poppins font-medium cursor-pointer text-[16px]">
              <a href="#">Connect Wallet</a>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/Community" element={listedGallery} />
        <Route path="/Create" element={<Minter />} />
        <Route path="/Collection" element={userOwnedGallery} />
      </Routes>
    </nav>
    
  ); 
};

export default Navbar;
