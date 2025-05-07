import React from "react";
import img1 from "../assets/img1.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] w-full max-w-6xl overflow-hidden">
        <nav className="flex items-center p-6 text-sm justify-start gap-12 border-b border-gray-700">
          <div className="font-bold text-lg text-red-600">▰</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-600">
              ABOUT
            </a>
            <a href="#" className="hover:text-red-600">
              GALLERY
            </a>
            <a href="#" className="hover:text-red-600">
              CONTACTS
            </a>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-10 pb-10">
          <div className="md:w-1/2">
            <p className="text-gray-400 uppercase text-sm">Our Version</p>
            <h1 className="text-5xl font-bold mt-2">DESIGN</h1>
            <p className="text-gray-400 mt-4 max-w-md">
              Our hobby is a modern and convenient design, the key to successful
              communication with the client.
            </p>
            <div className="flex items-center space-x-2 mt-5">
              <button className="w-16 h-16 bg-transparent border border-white hover:bg-red-600 hover:text-white text-white rounded-full flex items-center justify-center">
                →
              </button>
              <span className="text-white hover:text-red-600">See More</span>
            </div>
          </div>

          <div className="relative md:w-1/2 mt-10 md:mt-0">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-red-600 -z-10" />
            <img
              src={img1}
              alt="Img"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
