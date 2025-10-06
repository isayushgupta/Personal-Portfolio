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
      <div className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image alt="" src={assets.header_bg_color} className="w-full" />
      </div>

      <nav
        className={` w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? " bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            alt="logo"
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "shadow-2xl bg-opacity-50 bg-white" : "bg-white/90 shadow-xl backdrop-blur-2xl"
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
          className={`
           bg-[rgba(255,255,255)]
          } shadow-2xl md:hidden flex flex-col py-20 px-2 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-600`}
        >
          <div className="absolute right-6 top-6">
            <Image
              onClick={closeMenu}
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <a
            href="#top"
            className=" px-6 py-2 rounded-r hover:shadow-2xl hover:bg-black hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className=" px-6 py-2 rounded-r hover:shadow-2xl hover:bg-black hover:text-white"
          >
            About Me
          </a>

          <a
            href="#services"
            className=" px-6 py-2 rounded-r hover:shadow-2xl hover:bg-black hover:text-white"
          >
            Services
          </a>

          <a
            href="#projects"
            className=" px-6 py-2 rounded-r hover:shadow-2xl hover:bg-black hover:text-white"
          >
            My Work
          </a>

          <a
            href="#contact"
            className=" px-6 py-2 rounded-r hover:shadow-2xl hover:bg-black hover:text-white"
          >
            Contact Me
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
