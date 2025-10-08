import { assets, projects } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Tag from "./Tag";

const Projects = ({ isDarkMode, setisDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20 mt-20"
    >
      {/* Animated Header */}
      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h4 className="text-center mb-2 text-lg font-ovo">What i made?</h4>
        <h2 className="text-center text-5xl font-ovo">My Projects</h2>
        <p className="text-center font-ovo mt-5 mb-12 mx-auto max-w-2xl">
          Explore a collection of projects showcasing my expertise in front-end
          & full-stack development.
        </p>
      </div>

      {/* Animated Grid */}
      <div className="grid grid-cols-auto my-10 gap-5">
        {projects.map((project, idx) => {
          const { title, description, bgImage, link } = project;

          return (
            <div
              className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-20 scale-95"
              }`}
              style={{
                backgroundImage: `url(${bgImage})`,
                transitionDelay: `${idx * 150}ms`,
              }}
              key={idx}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content card with enhanced animations */}
              <div className="rounded-md bg-[rgba(255,255,255,0.4)] backdrop-blur w-10/12 absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 transition-all duration-500 ease-out group-hover:bottom-7 group-hover:w-11/12 group-hover:bg-[rgba(255,255,255,0.5)] shadow-lg group-hover:shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold m-0 text-gray-900 transition-colors duration-300 group-hover:text-black">
                      {title}
                    </h2>
                    <p className="hidden text-gray-800 group-hover:block text-sm m-0 animate-fade-in-up">
                      {description}
                    </p>
                  </div>
                  <a
                    href={link}
                    className="rounded-full group-hover:shadow shadow-2xl shadow-black "
                  >
                    <div className="p-1.5 rounded-full bg-white hover:bg-yellow-200 hover:scale-110 hover:shadow-2xl transition-shadow duration-500">
                      <Image
                        alt=""
                        className="w-4 transition-transform duration-300"
                        src={assets.send_icon}
                      />
                    </div>
                  </a>
                </div>
                <div className="hidden group-hover:flex flex-wrap mt-2 gap-0.5 animate-fade-in-up animation-delay-100">
                  <Tag tech="Html"></Tag>
                  <Tag tech="Css"></Tag>
                  <Tag tech="React"></Tag>
                  <Tag tech="Express"></Tag>
                  <Tag tech="MongoDB"></Tag>
                </div>
              </div>

              {/* Hover border glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {/* <div className=" absolute inset-0 rounded-lg ring-2 ring-white/50 ring-offset-2 ring-offset-transparent" /> */}
              </div>
            </div>
          );
        })}
      </div>

      <button
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
      </button>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </div>
  );
};

export default Projects;
