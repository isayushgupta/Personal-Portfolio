import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();
  // const [scroll, setscroll] = useState(false);
  const [isScroll, setisScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50)
      {
        setisScroll(true)
      }

      else{
        setisScroll(false)
      }

    })
  }, [])
  

  return (
    <>

      <div className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image alt="" src={assets.header_bg_color} className="w-full"/>
      </div>

      <nav className={` w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll? " bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
          <Image
            alt="logo"
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll? "shadow-2xl bg-opacity-50 bg-white":""}`}>
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex gap-4">
          <button className="cursor-pointer">
            <Image
              src={assets.moon_icon}
              alt="toggle darkmode"
              className="w-6"
            />
          </button>

          <a 
            href="#contact"
            className="border border-gray-500 font-ovo hidden lg:flex items-center gap-3 px-8 py-2.5 rounded-full ml-4"
          >
            Contact
            <Image alt="contact" src={assets.arrow_icon} className="w-3" />{" "}
          </a>

          <button onClick={openMenu} className="block md:hidden cursor-pointer">
            <Image alt="" src={assets.menu_black} className="w-6" />
          </button>
        </div>

        {/* ----------------------------- mobile siderbar menu -------------------------------------- */}

        <ul
          ref={sideMenuRef}
          className=" bg-gray-100 rounded-l-lg  shadow-xl md:hidden flex flex-col gap-2 py-20 px-2  fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500"
        >
          <div className="absolute right-6 top-6">
            <Image
              onClick={closeMenu}
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li className=" px-6 py-2 rounded-r-2xl hover:shadow-2xl hover:bg-white border border-transparent">
            <a href="#top" className="">
              Home
            </a>
          </li>
          <li className=" px-6 py-2 rounded-r-2xl hover:shadow-2xl hover:bg-white border border-transparent">
            <a href="#about">About Me</a>
          </li>
          <li className=" px-6 py-2 rounded-r-2xl hover:shadow-2xl hover:bg-white border border-transparent">
            <a href="#services">Services</a>
          </li>
          <li className=" px-6 py-2 rounded-r-2xl hover:shadow-2xl hover:bg-white border border-transparent">
            <a href="#work">My Work</a>
          </li>
          <li className=" px-6 py-2 rounded-r-2xl hover:shadow-2xl hover:bg-white border border-transparent">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
