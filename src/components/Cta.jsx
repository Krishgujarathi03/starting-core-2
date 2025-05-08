import React from "react";
import ctaImg from "../assets/cta/cta-section.jpg";
import Navbar from "./CommonComponents/Navbar";

const Cta = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] w-full max-w-6xl overflow-hidden">
        <nav className="flex items-center p-6 text-sm justify-start gap-12 border-b border-gray-700">
          <Navbar />
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-10 pb-10 mt-8">
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="text-4xl font-extrabold mb-6 text-red-500 leading-tight">
              Shape What They See
            </h2>
            <p className="text-lg mb-5 text-gray-300 leading-relaxed">
              You’re not just launching a project — you’re shaping perception,
              evoking emotion, and building something that outlasts the moment.
              <br />
              Whether it’s a bold brand, a movement with meaning, or a story
              that cuts through the noise — we’re your creative allies from day
              one.
            </p>
            <p className="text-lg font-semibold mb-6">
              Ready to redefine how the world sees you?
              <br />
              <span className="text-red-500">
                Let’s build something unforgettable — together.
              </span>
            </p>
            <button className="mt-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 shadow-lg">
              Start Your Journey
            </button>
          </div>

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
