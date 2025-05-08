import React from "react";
import img1 from "../assets/OurClients/ourClients.png";

const partners = [
  {
    title: "Artists",
    items: ["Badshah", "Sunidhi Chauhan", "Jasleen Royal", "Tanishk Bagchi"],
  },
  {
    title: "Labels",
    items: ["UMG", "Saregama", "T-Series", "Artiste First"],
  },
  {
    title: "Brands",
    items: ["SonyLiv", "Discovery", "Hindustan Times", "Nobel Chemist"],
  },
];

const OurClients = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white w-full p-4">
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-8 w-full">
        {/* Left Column: Content */}
        <div className="md:w-1/2 2xl:pe-[2rem]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-avenir mb-1 leading-tight text-center text-white">
            Who We Work With
          </h1>

          <h2 className="text-xl font-playfair text-white text-center mb-4">
            The best partnerships are built on trust — and results.
          </h2>

          <p className="text-lg font-lora text-white leading-relaxed text-justify px-2 md:px-0 mb-8">
            Over the years, we've collaborated with some of the most influential
            names across music, media, and brands.
          </p>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-semibold text-white border-b-2 border-gray-500 inline-block pb-2 mb-3">
                  {group.title}
                </h3>
                <ul className="space-y-1 text-white text-base">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-white -z-10" />
          <img
            src={img1}
            alt="Our Clients"
            className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default OurClients;
