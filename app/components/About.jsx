import { assets, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
// import Tools from "./Tools";
import Cards from "./Cards";
import { motion, scale } from "motion/react";

const About = ({ isDarkMode, setisDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className=" w-full px-[12%]  flex flex-col items-center pt-30"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        id="about"
        className="text-center text-5xl font-ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" flex w-full flex-col lg:flex-row items-center gap-20 mt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            alt="user"
            src={assets.user_image}
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo text-center lg:text-left">
            I am a final-year Computer Science student and a passionate
            full-stack web developer with a solid foundation in Java, Data
            Structures & Algorithms. I am actively seeking an opportunity to
            contribute to a dynamic team where i can contribute to real world
            business solutions and grow as a software developer.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl"
          >
            <Cards
              icon={assets.code_icon}
              iconDark={assets.code_icon_dark}
              title={"Technical Skills"}
              description={`  Java(DSA), HTML, CSS, JavaScript, ReactJs, NextJs, Express,
                MongoDB`}
              isDarkMode={isDarkMode}
              setisDarkMode={setisDarkMode}
            />

            <Cards
              icon={assets.edu_icon}
              iconDark={assets.edu_icon_dark}
              title={"Education"}
              description={` B.Tech in Computer Science from Vellore Institute of
                Technology - Bhopal`}
              isDarkMode={isDarkMode}
              setisDarkMode={setisDarkMode}
            />
          </motion.div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className={`my-6 font-ovo text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Tools i use
            </motion.h4>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-3 sm:gap-5"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{scale:1.1}}
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square p-3 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
