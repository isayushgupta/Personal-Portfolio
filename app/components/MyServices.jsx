import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const MyServices = ({ isDarkMode, setisDarkMode }) => {
  return (
    <>
      <div id="services" className="  w-full  px-[12%] pt-30 scroll-mt">
        <h4 className="text-center mb-2 text-lg font-ovo">What i offer?</h4>
        <h2 id="about" className="text-center text-5xl font-ovo">
          My services
        </h2>

        <div className=" grid grid-cols-auto gap-6 my-12">
          {serviceData.map((service, idx) => {
            const { icon, title, description } = service;

            return (
              <div
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyServices;
