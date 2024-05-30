import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNAv] = useState(false);
  return (
    <div className="bg-white border-b border-b-slate-400 mx-auto flex justify-between items-center px-7 fixed h-[70px] w-full z-[100] top-0">
      <div className="text-2xl font-bold text-green-main lg:text-3xl xl:text-4xl md:ml-5 xl:ml-12">
        Rengga
      </div>
      <ul
      className={`md:flex gap-4 xl:gap-10 md:items-center md:py-0 pb-12 px-10 absolute md:static md:z-auto bg-black-2 z-[100] left-0 w-full md:w-auto transition-all duration-300 ease-in text-black bg-white font-semibold text-lg md:text-xl md:pb-4 lg:text-2xl xl:text-3xl ${
        nav ? 'top-[70px]' : 'top-[-490px]'
    }`}>
        <li className="mt-4 md:hover:scale-110 md:ease-in-out md:duration-50 md:hover:text-green-main ">
          <a href="#home">Home</a>
        </li>
        <li className="mt-4 md:hover:scale-110 md:ease-in-out md:duration-50 md:hover:text-green-main">
          <a href="#about">About</a>
        </li>
        <li className="mt-4 md:hover:scale-110 md:ease-in-out md:duration-50 md:hover:text-green-main">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="mt-4 md:hover:scale-110 md:ease-in-out md:duration-50 md:hover:text-green-main">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex md:hidden text-2xl font-bold" onClick={() => setNAv(!nav)}>
        {nav ? <IoClose/> : <AiOutlineMenu/>}
      </div>
    </div>
  );
};

export default Navbar;
