import React from "react";
import img1 from "../assets/img1.png";
import Navbar from "./CommonComponents/Navbar";

const partners = [
  {
    title: 'Artists',
    items: ['Badshah', 'Sunidhi Chauhan', 'Jasleen Royal', 'Tanishk Bagchi'],
  },
  {
    title: 'Labels',
    items: ['UMG', 'Saregama', 'T-Series', 'Artiste First'],
  },
  {
    title: 'Brands',
    items: ['SonyLiv', 'Discovery', 'Hindustan Times', 'Nobel Chemist'],
  },
];

const OurClients = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 xl:h-[48vh]">
      <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] w-full max-w-6xl overflow-hidden xl:h-[100%] ">
        <nav className="flex items-center p-6 text-sm justify-start gap-12 border-b border-gray-700">
          <Navbar />
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-10 xl:h-[82%] ">
          <div className="xl:h-[100%]" >
            <section className=" text-gray-200 py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-red-500 mb-8 text-center">
                  Who We Work With
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                  The best partnerships are built on trust — and results. Over the years,
                  we've collaborated with some of the most influential names across
                  music, media, and brands.
                </p>

                <div className="text-center grid xs:grid-cols-2  md:grid-cols-3 gap-12">
                  {partners.map((group) => (
                    <div key={group.title} className="space-y-4">
                      <h3 className="text-2xl font-semibold text-red-400 border-b-2 border-red-500 inline-block pb-2">
                        {group.title}
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="relative md:w-1/2 mt-10 md:mt-0 xl:h-[100%] xl:flex xl:items-center">
            <img
              src={img1}
              alt="Img"
              className="w-full xl:h-[90%] object-contain drop-shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-105 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
