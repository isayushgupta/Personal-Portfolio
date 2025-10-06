import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="">
      <Image src={assets.logo} alt="" className="w-30 mx-auto mt-20" />

      <div className="flex gap-2 mt-2 mb-5 items-center justify-center text-gray-500">
        <Image alt="mail" src={assets.mail_icon} className="w-5" />
        <a
          className="md:text-sm text-xs"
          href="mailto:ayushgupta11580@gmail.com"
        >
          ayushgupta11580@gmail.com
        </a>
      </div>

      <hr className="w-10/12  m-auto " />

      <div className="text-xs text-gray-500 my-2 w-10/12 md:flex-row flex flex-col gap-2 mb-2 items-center justify-between mx-auto md:text-sm sm:px-0 ">
        <p>&copy; 2025 Ayush Gupta. All rights reserved</p>

        <div className="flex gap-3">
          <a href="https://github.com/isayushgupta" className="cursor-pointer">
            <Image src={assets.github} className="w-5" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/isayushgupta/"
            className="cursor-pointer"
          >
            <Image src={assets.linkedin} className="w-5" alt="" />
          </a>
          <a href="https://x.com/isayushgupta" className="cursor-pointer">
            <Image src={assets.twitter} className="w-5" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
