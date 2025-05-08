import React from "react";
import founder from "../assets/Founder/Founder.png";
import Navbar from "./CommonComponents/Navbar";

const OurFounder = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] w-full max-w-6xl overflow-hidden">
        <nav className="flex items-center p-6 text-sm justify-start gap-12 border-b border-gray-700">
          <Navbar />
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-10 pb-10">
          <div className="md:w-1/2">
            <p className="text-gray-400 uppercase text-lg font-bold mb-2">
              Meet the Visionary Behind BonBern
            </p>
            <h2 className="text-4xl font-bold text-red-500 mb-4">
              Aakashraj Ambre
            </h2>
            <p className="text-white font-medium italic mb-4">
              · Founder · Behavioral Strategist · Perception Architect
            </p>
            <p className="text-lg mb-4">
              Aakashraj isn’t just a strategist — he’s a visionary who
              transforms ideas into unforgettable identities. With over a decade
              of expertise spanning advertising, celebrity marketing, and human
              psychology, he brings a rare blend of science and storytelling to
              the table.
            </p>
            <p className="text-lg mb-4">
              BonBern is more than a company — it's his mission. Aakashraj built
              it to empower people and brands to control their narrative,
              elevate their presence, and leave a mark that matters.
            </p>
            <p className="text-lg mb-4">
              From shaping public personas that turn heads, to launching
              movements that shift culture, his work is rooted in behavioral
              science, Indian ethos, and a bold creative spirit.
            </p>
            <p className="text-lg italic text-red-400">
              “I don’t just solve marketing problems. I solve perception puzzles
              — because how you're seen shapes what’s possible.”
            </p>
          </div>

          <div className="relative md:w-1/2 mt-10 md:mt-0">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-red-600 -z-10" />
            <img
              src={founder}
              alt="Img"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
