import { assets, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
// import Tools from "./Tools";
import Cards from "./Cards";

const About = ({isDarkMode, setisDarkMode}) => {
  return (
    <div
      id="about"
      className=" w-full px-[12%]  flex flex-col items-center pt-30"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 id="about" className="text-center text-5xl font-ovo">
        About Me
      </h2>

      <div className=" flex w-full flex-col lg:flex-row items-center gap-20 mt-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            alt="user"
            src={assets.user_image}
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo text-center lg:text-left">
            I am a final-year Computer Science student and a passionate
            full-stack web developer with a solid foundation in Java, Data
            Structures & Algorithms. I am actively seeking an opportunity to
            contribute to a dynamic team where i can contribute to real world
            business solutions and grow as a software developer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
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
          </div>

          <div>
            <h4
              className={`my-6 font-ovo text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Tools i use
            </h4>

            <ul className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square p-3 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
