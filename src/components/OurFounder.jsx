import React from "react";
import founder from "../assets/Founder/Founder.png";
import Navbar from "./CommonComponents/Navbar";

const OurFounder = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white w-full p-4">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 pb-10 mt-6">
        <div className="sm:w-1/2">
          <h2 className="font-avenir text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-wide text-center sm:text-left">
            Meet the Visionary Behind BonBern
          </h2>
          <p className="font-playfair text-lg sm:text-xl mb-8 text-white leading-relaxed text-center sm:text-left max-w-xl">
            <strong className="text-3xl text-white">
              Aakashraj Ambre <br />
            </strong>
            <br />· Founder · Behavioral Strategist · Perception Architect
          </p>

          <p className="font-lora text-base sm:text-lg text-white mb-4 text-center sm:text-left">
            Aakashraj blends over a decade of experience in advertising,
            celebrity marketing, and psychology-driven strategy.
            <br />
            <strong>
              BonBern is his brainchild created to help individuals and brands
              shape how they are seen, heard, and remembered.
            </strong>
          </p>
          <p className="font-lora text-base sm:text-lg text-white mb-4 text-center sm:text-left">
            From crafting iconic public personas to launching culture-shifting
            campaigns, his approach combines{" "}
            <strong> behavioral science, creative storytelling</strong>, and a
            deep understanding of{" "}
            <strong>Indian culture, tech, and media</strong>.
          </p>
        </div>

        <div className="md:w-1/2 w-full max-w-[500px]">
          <img
            src={founder}
            alt="Founder"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
