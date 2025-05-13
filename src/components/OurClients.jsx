import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your images
import img1 from "../assets/OurClients/ourClients.png";
import BadshahImg from "../assets/artists/1.png";
import SunidhiImg from "../assets/artists/2.png";
import JasleenImg from "../assets/artists/3.png";
import TanishkImg from "../assets/artists/4.png";
import UMGImg from "../assets/labels/1.png";
import SaregamaImg from "../assets/labels/2.png";
import TSeriesImg from "../assets/labels/3.png";
import ArtisteImg from "../assets/labels/4.png";
import SonyLivImg from "../assets/brands/1.png";
import DiscoveryImg from "../assets/brands/2.png";
import HTImg from "../assets/brands/3.png";
import NobelImg from "../assets/brands/4.png";

const images = [
  BadshahImg,
  SunidhiImg,
  JasleenImg,
  TanishkImg,
  UMGImg,
  SaregamaImg,
  TSeriesImg,
  ArtisteImg,
  SonyLivImg,
  DiscoveryImg,
  HTImg,
  NobelImg,
];

const OurClients = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = images.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex < images.length - 3) {
      setStartIndex((prev) => prev + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 3);
    }
  };

  return (
    <div
      id="who-we-work-with"
      className="xs:w-[80%] xs:m-auto xs:mt-[3rem] min-h-screen bg-[#1a1a1a] text-white w-full"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        {/* Image Section */}
        <div className="xs:w-[73%] md:w-1/2 w-full max-w-[500px] relative">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
            <img
              src={img1}
              alt="blur-bg"
              className="w-full h-full object-cover scale-110 opacity-60 brightness-[1.4] blur-3xl rounded-lg"
            />
          </div>
          <img
            src={img1}
            alt="Our Clients"
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="xs:w-[88%] md:w-1/2 2xl:pe-[2rem] xl:mt-10 md:mt-0">
          <h1 className="text-4xl xs:text-[2.5rem] xs:text-center xs:font-[700] xs:mb-4 md:text-7xl font-avenir mb-1 leading-tight text-left text-white">
            Who We Work With
          </h1>

          <h2 className="font-playfair text-white text-left mb-4 xs:text-[1.25rem] xs:font-[400] xs:mb-[0.875rem] xl:text-[2rem] xl:mb-[0.75rem]">
            The best partnerships are built on trust — and results.
          </h2>

          <p className="text-lg font-lora text-white leading-relaxed text-justify xs:text-[1rem] xs:mb-4 mb-8">
            Over the years, we've collaborated with some of the most influential
            names across music, media, and brands.
          </p>

          {/* Slider */}
          <div className="flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center gap-6 mb-4"
              >
                {visibleImages.map((img, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-white flex items-center justify-center p-2"
                  >
                    <img
                      src={img}
                      alt={`Partner ${index}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Icons */}
            <div className="flex gap-6">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="p-2 bg-white text-black rounded-full shadow-md disabled:opacity-30 transition hover:scale-105"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex >= images.length - 3}
                className="p-2 bg-white text-black rounded-full shadow-md disabled:opacity-30 transition hover:scale-105"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
