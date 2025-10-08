import Image from "next/image";
import React from "react";


const Cards = ({ icon, iconDark, title, description, isDarkMode, setisDarkMode}) => {
  return (
    <div
      className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:-translate-y-1 hover:translate-x-1 duration-500 shadow-hover-black ${
        isDarkMode
          ? "hover:bg-white/5 shadow-hover-white"
          : "hover:bg-[#fcf4ff]"
      }`}
    >
      <Image
        alt="icon"
        src={isDarkMode ? iconDark : icon}
        className="w-7 mt-3"
      />
      <h3
        className={`font-medium  my-4 text-lg ${
          isDarkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        {title}
      </h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Cards;
