import Image from "next/image";
import React from "react";


const Cards = ({ icon, iconDark, title, description }) => {
  return (
    <div className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 hover:translate-x-1 duration-500 shadow-hover-black">
      <Image alt={title} src={icon} className="w-7 mt-3" />
      <h3 className="font-medium text-gray-700 my-4 text-lg">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Cards;
