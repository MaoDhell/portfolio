import React from 'react';
import { SiUnity, SiUnrealengine, SiMysql, SiBlender, SiSpring } from 'react-icons/si';
import { FaJava, FaPython,FaGithub  } from 'react-icons/fa';
import frameTools from '../assets/borders/tools.svg'; 

const icons = [
  SiUnity,
  FaJava,
  FaPython,
  SiMysql,
  SiUnrealengine,
  SiBlender,
  SiSpring,
  FaGithub,
];

const TechMarquee = () => {
  return (
    <div className="hidden md:flex relative w-full max-w-6xl mx-auto my-8 px-6 h-[250px] items-center justify-center overflow-hidden">
      <img
        src={frameTools}
        alt="Cyber Frame"
        className="absolute inset-0 w-full h-full object-contain z-50 pointer-events-none"
      />
      
      {/* Contenedor ajustado para mantenerse dentro del frame */}
      <div className="relative z-10 h-[120px] w-[calc(100%-36px)] overflow-hidden mx-auto ">
        {/* Gradientes para el fade effect */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#301B1F] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#141113] to-transparent z-20" />
        
        {/* Contenedor de los iconos */}
        <div className="flex items-center h-full gap-[150px] w-max animate-scroll-horizontal px-10 whitespace-nowrap">
          {[...icons, ...icons].map((Icon, i) => (
            <Icon
              key={i}
              className="text-4xl text-light hover:text-accent-teal transition duration-300 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;