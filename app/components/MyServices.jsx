import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const MyServices = ({ isDarkMode, setisDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="  w-full  px-[12%] pt-30 scroll-mt"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What i offer?
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        id="about"
        className="text-center text-5xl font-ovo"
      >
        My services
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1, delay: 0.5 }}
        className=" grid grid-cols-auto gap-8 my-12"
      >
        {serviceData.map((service, idx) => {
          const { icon, title, description } = service;

          return (
            <motion.div
            whileHover={{scale:1.01}}
              key={idx}
              className={`px-8 py-8 border border-gray-400 rounded-lg hover:shadow   cursor-pointer hover:translate-y-1 duration-500 ${
                isDarkMode
                  ? "shadow-hover-white hover:bg-white/5"
                  : " hover:shadow-black hover:bg-[#fcf4ff]"
              }`}
            >
              <Image src={icon} alt="" className="w-10" />

              <h3
                className={`text-lg my-4  ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {title}
              </h3>

              <p
                className={`text-sm  leading-5 ${
                  isDarkMode ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default MyServices;
