import { assets, projects } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { motion, scale } from "motion/react";

const Projects = ({ isDarkMode, setisDarkMode }) => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20 mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What i made?
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center font-ovo mt-5 mb-12 mx-auto max-w-2xl"
      >
        Explore a collection of projects showcasing my expertise in front-end &
        full-stack development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto my-10 gap-5"
      >
        {projects.map((project, idx) => {
          const { title, description, bgImage, link } = project;

          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              duration={1}
              className=" aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group overflow-hidden"
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
              key={idx}
            >
              <div className=" absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <motion.div
                initial={{ opacity: 0,  y: 20 , scale:0}}
                whileInView={{ opacity: 1, y: 0, scale:1}}
                transition={{ duration: 0.5, delay: 1 }}
                className=" rounded-md bg-[rgba(255,255,255,0.4)] backdrop-blur w-10/12 absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 transition-all duration-500 ease-out  shadow shadow-black  group-hover:bottom-7 group-hover:w-11/12 group-hover:bg-[rgba(255,255,255,0.5)] group-hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold m-0 text-gray-900 transition-colors duration-300 group-hover:text-black">
                      {title}
                    </h2>
                    <p className="hidden text-gray-800 group-hover:block text-sm m-0">
                      {description}
                    </p>
                  </div>
                  <a
                    href={link}
                    className="rounded-full group-hover:shadow shadow-2xl shadow-black"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-1.5 rounded-full bg-white  hover:scale-110 hover:shadow-2xl transition-shadow duration-500"
                    >
                      <Image
                        alt=""
                        className="w-4  transition-transform duration-300"
                        src={assets.send_icon}
                      />
                    </motion.div>
                  </a>
                </div>
                <div className="hidden group-hover:flex flex-wrap mt-2 gap-0.5">
                  <Tag tech="Html"></Tag>
                  <Tag tech="Css"></Tag>
                  <Tag tech="React"></Tag>
                  <Tag tech="Express"></Tag>
                  <Tag tech="MongoDB"></Tag>
                </div>
              </motion.div>

              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={`w-max text-sm border-[0.5px] flex gap-2 items-center justify-center py-3 rounded-full px-8 mx-auto mt-14  
          ${
            isDarkMode
              ? "text-gray-100 border-gray-400 hover:bg-white/10"
              : "text-gray-700 border-gray-600 hover:bg-[#fcf4ff]"
          }`}
      >
        Show More
        <Image
          src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.button>
    </motion.div>
  );
};

export default Projects;
