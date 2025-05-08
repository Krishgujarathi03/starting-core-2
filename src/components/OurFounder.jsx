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
            <strong className="text-xl text-white">
              Aakashraj Ambre — Founder, Behavioral Strategist, and Perception
              Architect
            </strong>
            <br />
            Aakashraj isn’t just a strategist — he’s a visionary who transforms
            ideas into unforgettable identities.
          </p>

          <p className="font-lora text-base sm:text-lg text-white mb-4 text-center sm:text-left">
            With over a decade of expertise in advertising, celebrity marketing,
            and human psychology, Aakashraj blends science and storytelling to
            shape powerful identities.
          </p>
          <p className="font-lora text-base sm:text-lg text-white mb-4 text-center sm:text-left">
            BonBern is more than a company — it’s Aakashraj’s mission to empower
            people and brands to elevate their presence and control their
            narrative.
          </p>
          <p className="font-lora text-base sm:text-lg italic text-white text-center sm:text-left">
            “I don’t just solve marketing problems. I solve perception puzzles —
            because how you're seen shapes what’s possible.”
          </p>
        </div>

        <div className="relative sm:w-1/2 mt-10 sm:mt-0 flex justify-center">
          <div className="absolute top-0 right-0 w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] rounded-full bg-white -z-10" />
          <img
            src={founder}
            alt="Founder"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
