import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setisDarkMode }) => {
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
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          alt=""
          src={assets.header_bg_color}
          className={`w-full transition-opacity duration-200 ${
            isDarkMode ? "hidden" : "block"
          }`}
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
    ${
      isScroll
        ? `${
            isDarkMode
              ? " bg-[rgba(17,0,31,0.5)] backdrop-blur-md shadow-white "
              : "bg-opacity-50 backdrop-blur-lg shadow-sm bg-[var(--background)] shadow-black/5"
          }`
        : ""
    }`}
      >
        <a href="#top">
          <Image
            alt="logo"
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
             ${
               isScroll
                 ? "shadow-2xl bg-white/10"
                 : `${
                     isDarkMode
                       ? "shadow-2xl bg-white/10"
                       : "bg-white/50 shadow-sm"
                   }`
             }`}
        >
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
            <a className="font-ovo" href="#projects">
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
          <button
            onClick={() => setisDarkMode(!isDarkMode)}
            className="cursor-pointer transition-all duration-200"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="toggle darkmode"
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className={`border  font-ovo hidden lg:flex items-center gap-3 px-8 py-2.5 rounded-full ml-4 ${
              isDarkMode ? "border-white/50" : "border-gray-500"
            }`}
          >
            Contact
            <Image
              alt="contact"
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
            />
          </a>

          <button onClick={openMenu} className="block md:hidden cursor-pointer">
            <Image
              alt=""
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              className="w-6"
            />
          </button>
        </div>
        {/* ----------------------------- mobile siderbar menu -------------------------------------- */}
        {/* bg-[rgba(38,8,62,0.9)] */}
        <ul
          ref={sideMenuRef}
          className={` ${isDarkMode ? "  bg-black/90 shadow-sm" : "bg-white"}
           shadow-2xl md:hidden flex flex-col py-20 px-2 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-600  `}
        >
          <div className="absolute right-6 top-6">
            <Image
              onClick={closeMenu}
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <a
            href="#top"
            className={`px-6 py-2  ${
              isDarkMode
                ? "hover:bg-white hover:text-black"
                : "hover:shadow-2xl hover:bg-black hover:text-white"
            }`}
          >
            Home
          </a>

          <a
            href="#about"
            className={`px-6 py-2  ${
              isDarkMode
                ? "hover:bg-white hover:text-black"
                : "hover:shadow-2xl hover:bg-black hover:text-white"
            }`}
          >
            About Me
          </a>

          <a
            href="#services"
            className={`px-6 py-2  ${
              isDarkMode
                ? "hover:bg-white hover:text-black"
                : "hover:shadow-2xl hover:bg-black hover:text-white"
            }`}
          >
            Services
          </a>

          <a
            href="#projects"
            className={`px-6 py-2  ${
              isDarkMode
                ? "hover:bg-white hover:text-black"
                : "hover:shadow-2xl hover:bg-black hover:text-white"
            }`}
          >
            My Work
          </a>

          <a
            href="#contact"
            className={`px-6 py-2  ${
              isDarkMode
                ? "hover:bg-white hover:text-black"
                : "hover:shadow-2xl hover:bg-black hover:text-white"
            }`}
          >
            Contact Me
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
