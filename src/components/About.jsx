import React from "react";
import img1 from "../assets/img1.png";
import Navbar from "./CommonComponents/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] w-full max-w-6xl overflow-hidden">
        <nav className="flex items-center p-6 text-sm justify-start gap-12 border-b border-gray-700">
          <div className="font-bold text-lg text-red-600">▰</div>

          <Navbar />
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-10 pb-10">
          <div>ABOUT</div>

          <div className="relative md:w-1/2 mt-10 md:mt-0">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-red-600 -z-10" />
            <img
              src={img1}
              alt="Img"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
