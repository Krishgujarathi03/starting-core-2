import React from "react";
import ctaImg from "../assets/cta/cta-section.png";

const Cta = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white w-full p-4">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-8">
          {/* Left Column: Content */}
          <div className="sm:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-avenir mb-4 leading-tight text-center sm:text-left text-white">
              Shape What They See
            </h1>

            <h2 className="text-lg sm:text-xl font-playfair text-white text-center sm:text-left mb-4">
              Let’s build something worth remembering.
            </h2>

            <p className="text-base sm:text-lg font-lora text-white leading-relaxed text-justify px-4 sm:px-0 mb-6">
              Whether you’re building an image, launching a movement, or solving
              a perception problem — we’re here to think it through with you.
            </p>

            <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 shadow-lg">
              Start a Conversation
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 w-full max-w-[500px]">
            <img
              src={ctaImg}
              alt="CTA Img"
              className="w-full h-auto object-contain drop-shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
