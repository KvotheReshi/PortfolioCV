import React from "react";
import profilepic from "../assets/profilepic.jpg";
import Pic from "./Pic";
import Cvfile from "../assets/CvFile.pdf";

const Description: React.FC = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <div  className="flex flex-row gap-6 items-center justify-center">
        <Pic
         src={profilepic}
         alt="pic"
          className="h-26 w-26 rounded-full border-2 border-white mt-4 items-start justify-start mb-4 ml-6"
         />
        <h1 className="text-3xl font-serif leading-tight w-1/2">Efren Castillo Morales</h1>
      </div>
      
      <p className="text-xl leading-normal font-serif text-center mx-2.5 mb-2">
        Mechatronics engineer specialized in product design, with strong skills
        in teamwork, logical thinking, and organization. Dedicated to continuous
        learning and professional growth in innovative and technical
        environments.
      </p>
      <div className="flex flex-row gap-18">
        <div className="">
          <h1 className="text-2xl font-serif leading-[2.5]">Skills</h1>
          <div className="text-start flex flex-row gap-14 p-2 items-center justify-center mb-3">
            <ul className="list-disc list-inside text-lg font-serif">
              <li className="relative">
                <span className="relative inline-block group">
                  <img
                    src="/src/assets/Logos/react.svg"
                    className="h-8 w-8 inline mr-2 mb-2"
                    alt="React logo"
                  />
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  React
                  </span>
                </span>
              </li>
              <li>
                <span className="relative inline-block group">
                  <img
                    src="/src/assets/Logos/javascript.png"
                    className="h-8 w-8 inline mr-2 mb-2"
                    alt="JavaScript logo"
                  />
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  JavaScript
                  </span>
                </span>
              </li>
              <li>
                <span className="relative inline-block group">
                  <img src="/src/assets/Logos/typescript.svg" className="h-8 w-8 inline mr-2 mb-2"></img>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  TypeScript
                  </span>
                </span>
              </li>
              <li>
                <span className="relative inline-block group">
                  <img src="/src/assets/Logos/tailwind.png" className="h-8 w-8 inline mr-2 mb-2"></img>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  Tailwind
                  </span>
                </span>
              </li>
              <li>
                <span className="relative inline-block group">
                  <img src="/src/assets/Logos/mongodb.svg" className="h-8 w-8 inline mr-2"></img>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  MongoDB
                  </span> 
                </span>
              </li>
            </ul>
            <ul className="list-disc list-inside text-lg font-radley">
              <li>
                <span className="relative inline-block group">
                  <img src="/src/assets/Logos/css.svg" className="h-8 w-8 inline mr-2 mb-2"></img>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  CSS
                  </span>
                </span>
              </li>
              <li>
                <span className="relative inline-block group">
                  <img src="/src/assets/Logos/github.svg" className="h-8 w-8 inline mr-2 mb-2"></img>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  GitHub
                  </span>
                </span>
              </li>
              <li>
                <span className="relative inline-block group">
                  <img src="/src/assets/Logos/html.png" className="h-8 w-8 inline mr-2 mb-2"></img>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  HTML
                  </span>
                </span>
              </li>
              <li>
                <span className="relative inline-block group">
                  <img src="/src/assets/Logos/mysql.svg" className="h-8 w-8 inline mr-2 mb-2"></img>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  MySQL
                  </span>
                </span>
              </li>
              <li>
                <span className="relative inline-block group">
                  <img src="/src/assets/Logos/vite.svg" className="h-8 w-8 inline mr-2 "></img>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8 
                  whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white
                  opacity-0 group-hover:opacity-100 transition">
                  Vite
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  items-baseline justify-center w-36 min-h-full gap-2 mr-2">
          <p className="text-center justify-center font-serif">Attached CV</p>
          <a href={Cvfile} target="_blank" rel="noopener noreferrer">
          <button className="bg-black text-white font-serif px-4 py-1 rounded-full mt-2 mb-2 border-solid border-2 border-white cursor-pointer 
          hover:bg-[rgba(58,57,57,0.45)] focus:outline-none focus:ring-2 focus:ring-[rgba(173,173,173,0.93)] focus:ring-opacity-75">
            Download
          </button>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Description;
