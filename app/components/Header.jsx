import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div id="top" className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="ayush"
          className=" h-40 w-40 rounded-full "
        />
      </div>

      <h3 className=" flex gap-2 items-center md:text-2xl mb-3 text-xl font-ovo">
        Hi! I'm Ayush Gupta{" "}
        <Image src={assets.hand_icon} className="w-6" alt="" />
      </h3>

      <h1 className="font-ovo text-3xl sm:text-6xl">fullstack web developer based in India.</h1>

      <p className="max-w-3xl text-center mx-auto font-ovo">
        I am a fullstack developer based in India, currently a final year B.Tech
        Computer Science student. Eager to leverage my skills to solve real world problems and build intuitive & scalable web applications.
      </p>

      <div className=" flex flex-col sm:flex-row items-ce
       gap-4 mt-4">
        <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
          Contact Me
          <Image src={assets.right_arrow_white} className="w-4 " alt="" />
        </a>

        <a href="/AyushGupta-Resume.pdf" download className="border px-10 py-3 rounded-full border-gray-500 flex items-center gap-2">
          My Resume
          <Image src={assets.download_icon} className="w-4" alt="" />
        </a>
      </div>

    </div>
  );
};

export default Header;
