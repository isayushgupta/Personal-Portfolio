import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { easeOut, motion, scale } from "motion/react";

const Header = ({isDarkMode, setisDarkMode}) => {
  return (
    <div
      id="top"
      className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-20 "
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <Image
          src={assets.profile_img}
          alt="ayush"
          className=" h-40 w-40 rounded-full "
        />
      </motion.div>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" flex gap-2 items-center md:text-2xl mb-3 text-xl font-ovo"
      >
        Hi! I'm Ayush Gupta{" "}
        <Image src={assets.hand_icon} className="w-6" alt="" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-ovo text-3xl sm:text-6xl"
      >
        fullstack web developer based in India.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-3xl text-center mx-auto font-ovo"
      >
        I am a fullstack developer based in India, currently a final year B.Tech
        Computer Science student. Eager to leverage my skills to solve real
        world problems and build intuitive & scalable web applications.
      </motion.p>

      <div
        className=" flex flex-col sm:flex-row items-ce
       gap-4 mt-4"
      >
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className={`px-10 py-3 border rounded-full  border-white flex items-center gap-2 ${
            isDarkMode ? "bg-transparent" : "bg-black  text-white"
          }`}
        >
          Contact Me
          <Image src={assets.right_arrow_white} className="w-4 " alt="" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/AyushGupta-Resume.pdf"
          download
          className={`border px-10 py-3 rounded-full  flex items-center gap-2 ${
            isDarkMode ? "bg-white text-gray-800" : "border-gray-500"
          }`}
        >
          My Resume
          <Image src={assets.download_icon} className="w-4" alt="" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
