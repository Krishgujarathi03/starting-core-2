import React from "react";
import img1 from "../assets/AboutSectionImage/aboutUs.png";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white w-full px-4 sm:px-6 md:px-10 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-avenir mb-4 leading-tight">
            About Us
          </h1>

          <h2 className="text-lg sm:text-xl font-playfair text-white mb-4">
            Welcome to BonBern Think Tank Studio — where strategy meets
            psychology.
          </h2>

          <p className="text-base sm:text-lg font-lora text-white leading-relaxed text-justify md:text-left">
            We're not your typical consultancy. We understand that human
            decisions are driven by emotion, narratives, and subconscious
            beliefs. That's why we craft experiences that resonate, stories that
            stick, and brands that live in people's minds. We don't just market
            — we connect, influence, and inspire.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 w-full max-w-[500px]">
          <img
            src={img1}
            alt="About"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
