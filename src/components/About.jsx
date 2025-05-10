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

          <h2 className="font-bold text-3xl sm:text-xl font-playfair text-white mb-4">
            BonBern Think Tank Studio is a behavior-first consultancy.
          </h2>

          <p className="text-base sm:text-lg font-lora text-white leading-relaxed text-justify md:text-left">
            We believe the world doesn’t move on logic — it moves on{" "}
            <strong>emotion, story, and belief</strong>. We go beyond marketing
            — into <strong>minds, memories, and meaning</strong>. <br />
            <br /> <span className="font-bold">Our secret?</span> <br />A mix of
            <strong>
              {" "}
              psychological insight, creative storytelling, and tech-powered
              execution
            </strong>
            . <br />
            <br /> We blend{" "}
            <strong>psychology with creativity to shape perception</strong> —
            from <strong>celebrity image-building</strong> and{" "}
            <strong>viral brand campaigns to solving public problems</strong>.
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
