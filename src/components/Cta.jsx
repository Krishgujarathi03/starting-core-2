import React from "react";
import ctaImg from "../assets/cta/cta-section.jpg";

const Cta = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white w-full p-4">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between px-10 py-8">
          {/* Left Column: Content */}
          <div className="md:w-1/2 2xl:pe-[2rem]">
            <h1 className="text-7xl font-avenir mb-1 leading-tight text-center text-white">
              Shape What They See
            </h1>

            <h2 className="text-xl font-playfair text-white text-center mb-4">
              You’re not just launching a project — you’re shaping perception,
              evoking emotion, and building something that outlasts the moment.
            </h2>

            <p className="text-lg font-lora text-white leading-relaxed text-justify px-2 md:px-0 mb-8">
              Whether it’s a bold brand, a movement with meaning, or a story
              that cuts through the noise — we’re your creative allies from day
              one.
            </p>

            <p className="text-lg font-semibold mb-6">
              Ready to redefine how the world sees you?
              <br />
              <span className="text-white">
                Let’s build something unforgettable — together.
              </span>
            </p>
            <button className="mt-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 shadow-lg">
              Start Your Journey
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="relative md:w-1/2 mt-10 md:mt-0">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-red-600 blur-xl -z-10" />
            <img
              src={ctaImg}
              alt="Cta-Img"
              className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
