import React from "react";
import img1 from "../assets/AboutSectionImage/aboutUs.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between px-10 py-8">
          <div className="md:w-1/2 2xl:pe-[2rem]">
            <h1 className="text-7xl font-avenir mb-1 leading-tight text-center text-white">
              About Us
            </h1>

            <h2 className="text-xl font-playfair text-gray-300 text-center mb-4">
              Welcome to BonBern Think Tank Studio — where strategy meets
              psychology.
            </h2>

            <p className="text-lg font-lora text-gray-300 leading-relaxed text-justify px-2 md:px-0">
              We're not your typical consultancy. We understand that human
              decisions are driven by emotion, narratives, and subconscious
              beliefs. That's why we craft experiences that resonate, stories
              that stick, and brands that live in people's minds. We don't just
              market — we connect, influence, and inspire.
            </p>
          </div>

          <div className="relative md:w-1/2 mt-10 md:mt-0">
            <img
              src={img1}
              alt="About"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
