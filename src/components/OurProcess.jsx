import React from "react";
import ourprocess from "../assets/Our Process section/ourprocess.png";
import Navbar from "./CommonComponents/Navbar";

const OurProcess = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] w-full max-w-6xl overflow-hidden">
        <nav className="flex items-center p-6 text-sm justify-start gap-12 border-b border-gray-700">
          <Navbar />
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-10 pb-10 mt-6">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 text-red-500 tracking-wide">
              Our Process
            </h2>
            <p className="mb-6 text-lg text-gray-300 leading-relaxed">
              <strong className="text-xl text-white">
                We don’t chase trends — we create transformations.
              </strong>
              <br />
              At the heart of every breakthrough idea lies a deep truth. We
              don’t guess — we uncover, decode, and design with purpose. Whether
              we're building iconic identities, sparking movements, or driving
              real-world impact, here's how we shape legacy:
            </p>
            <ol className="list-decimal list-inside space-y-5 text-base text-gray-300">
              {[
                {
                  title: "Understand the Brief",
                  desc: "We listen between the lines — to what’s said, what’s unsaid, and what truly matters. This is where perception begins — with empathy, clarity, and intent.",
                },
                {
                  title: "Decode Behavior",
                  desc: "We dig into human psychology, cultural shifts, and data signals to understand not just what people do — but why they do it. Insight powers action.",
                },
                {
                  title: "Design the Narrative",
                  desc: "Stories don’t just inform — they transform. We craft messages that move hearts, stay in minds, and drive movements.",
                },
                {
                  title: "Develop Communication Assets",
                  desc: "From scroll-stopping content to immersive experiences — we build for digital, physical, and phygital spaces. Not just fit for platforms — but built to shape them.",
                },
                {
                  title: "Adapt & Amplify",
                  desc: "The world moves fast. We listen, learn, and evolve — tuning every message to stay relevant and resonant.",
                },
                {
                  title: "Reflect & Reinvent",
                  desc: "We study the ripple effect. What did we shift? What did we spark? Then, we build forward — smarter, bolder, and braver. Because tomorrow deserves better.",
                },
              ].map((item, index) => (
                <li key={index}>
                  <span className="text-white font-semibold">
                    {item.title}:
                  </span>{" "}
                  <span className="block mt-1">{item.desc}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative md:w-1/2 mt-10 md:mt-0">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-red-600 -z-10" />
            <img
              src={ourprocess}
              alt="Ourprocess"
              className="w-full h-auto object-contain drop-shadow-2xl rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
