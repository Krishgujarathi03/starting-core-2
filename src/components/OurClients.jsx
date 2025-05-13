// Icons
import { Music, Disc, Briefcase } from "lucide-react";

// Images
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

const partners = [
  {
    title: "Artists",
    icon: <Music size={28} />,
    items: [
      { name: "Badshah", img: BadshahImg },
      { name: "Sunidhi Chauhan", img: SunidhiImg },
      { name: "Jasleen Royal", img: JasleenImg },
      { name: "Tanishk Bagchi", img: TanishkImg },
    ],
  },
  {
    title: "Labels",
    icon: <Disc size={28} />,
    items: [
      { name: "UMG", img: UMGImg },
      { name: "Saregama", img: SaregamaImg },
      { name: "T-Series", img: TSeriesImg },
      { name: "Artiste First", img: ArtisteImg },
    ],
  },
  {
    title: "Brands",
    icon: <Briefcase size={28} />,
    items: [
      { name: "SonyLiv", img: SonyLivImg },
      { name: "Discovery", img: DiscoveryImg },
      { name: "Hindustan Times", img: HTImg },
      { name: "Nobel Chemist", img: NobelImg },
    ],
  },
];

// ... (imports stay the same)

const OurClients = () => {
  return (
    <div
      id="who-we-work-with"
      className="xs:w-[80%] xs:m-auto xs:mt-[3rem] min-h-screen bg-[#1a1a1a] text-white w-full"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        {/* Left Column: Image */}
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

        {/* Right Column: Content */}
        <div className="xs:w-[88%] md:w-1/2 2xl:pe-[2rem] xl:mt-10 md:mt-0">
          <h1 className="text-4xl xs:text-[2.5rem] xs:text-center xs:font-[700] xs:mb-4 md:text-7xl font-avenir mb-1 leading-tight text-left text-white">
            Who We Work With
          </h1>

          <h2
            className=" font-playfair text-white text-left mb-4
            xs:text-[1.25rem] xs:font-[400] xs:mb-[0.875rem] 
            xl:text-[2rem] xl:mb-[0.75rem] "
          >
            The best partnerships are built on trust — and results.
          </h2>

          <p className="text-lg font-lora text-white leading-relaxed text-justify xs:text-[1rem] xs:mb-4 mb-8">
            Over the years, we've collaborated with some of the most influential
            names across music, media, and brands.
          </p>

          {/* 3 Columns Side by Side (Responsive) */}
          <div className="flex flex-row gap-4 w-full">
            {partners.map((group) => (
              <div
                key={group.title}
                className="w-1/3 bg-[#2a2a2a] p-3 sm:p-4 rounded-xl text-center shadow-md"
              >
                <div className="flex items-center justify-center mb-3 text-white">
                  {group.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white border-b border-gray-500 pb-2 mb-3">
                  {group.title}
                </h3>
                <ul className="space-y-3 text-white text-sm sm:text-base">
                  {group.items.map(({ name, img }) => (
                    <li key={name} className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-1">
                        <img
                          src={img}
                          alt={name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[0.7rem] text-center">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
