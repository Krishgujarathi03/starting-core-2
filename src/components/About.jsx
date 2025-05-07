import React from "react";
import img1 from "../assets/AboutSectionImage/aboutUs.jpeg";
import Navbar from "./CommonComponents/Navbar";

const About = () => {
  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] w-full max-w-6xl overflow-hidden">
        <nav className="flex items-center p-6 text-sm justify-start gap-12 border-b border-gray-700">
          <Navbar />
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-10 pb-10 ">
          <div className="md:w-1/2 2xl:pe-[2rem]">
            <h1 className="text-4xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 tracking-tight drop-shadow-lg
              md:text-5xl mb-4" 
            >About Us</h1>

            <p className=" text-center text-lg md:text-xl text-gray-300 italic leading-relaxed mb-6">
              Welcome to BonBern Think Tank Studio — where strategy meets psychology.
            </p>

            <p className="text-base xs:text-center  md:text-lg text-gray-200 leading-relaxed space-y-4 px-2 md:px-0 before:content-[''] before:inline-block before:w-1 before:h-full before:bg-pink-500 before:mr-3" >
              We're not your typical consultancy. We understand that human decisions are driven by emotion, narratives, 
              and subconscious beliefs. That's why we craft experiences that resonate, stories that stick, and brands that 
              live in people's minds. We don't just market we connect, influence, and inspire.
            </p>
          </div>

          <div className="relative md:w-1/2 mt-10 md:mt-0">
            
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
