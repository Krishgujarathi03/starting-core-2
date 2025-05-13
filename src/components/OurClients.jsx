import { useEffect, useRef } from "react";
import anime from "animejs";
import { Music, Disc, Briefcase } from "lucide-react";
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

const OurClients = () => {
  const sectionRef = useRef(null);
  const iconRefs = useRef([]);
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);

  iconRefs.current = [];
  cardRefs.current = [];
  imageRefs.current = [];

  const setIconRef = (el) =>
    el && !iconRefs.current.includes(el) && iconRefs.current.push(el);
  const setCardRef = (el) =>
    el && !cardRefs.current.includes(el) && cardRefs.current.push(el);
  const setImageRef = (el) =>
    el && !imageRefs.current.includes(el) && imageRefs.current.push(el);

  useEffect(() => {
    const runAnimations = () => {
      anime({
        targets: cardRefs.current,
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        easing: "easeOutBack",
        duration: 1000,
      });

      anime({
        targets: iconRefs.current,
        rotate: [0, 360],
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 1500,
      });

      anime({
        targets: imageRefs.current,
        translateY: [
          { value: -12, duration: 300 },
          { value: 0, duration: 300 },
        ],
        scale: [
          { value: 1.05, duration: 300 },
          { value: 1.0, duration: 300 },
        ],
        boxShadow: [
          { value: "0 0 10px #ffffffaa", duration: 300 },
          { value: "0 0 0px #ffffff00", duration: 300 },
        ],
        delay: anime.stagger(100, { start: 500 }),
        easing: "easeOutElastic(1, .8)",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimations();
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% of the section is visible
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="who-we-work-with"
      className="xs:w-[90%] xs:m-auto xs:mt-[3rem] min-h-screen bg-[#1a1a1a] text-white w-full"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        {/* Image */}
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

        {/* Content */}
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

          {/* Columns */}
          <div className="flex flex-row gap-4 w-full">
            {partners.map((group, groupIndex) => (
              <div
                key={group.title}
                className="w-1/3 bg-[#2a2a2a] p-3 sm:p-4 rounded-xl text-center shadow-md opacity-0"
                ref={setCardRef}
              >
                <div className="flex items-center justify-center mb-3 text-white">
                  <div ref={setIconRef}>{group.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white border-b border-gray-500 pb-2 mb-3">
                  {group.title}
                </h3>
                <ul className="space-y-3 text-white text-sm sm:text-base">
                  {group.items.map(({ name, img }) => (
                    <li key={name} className="flex flex-col items-center gap-1">
                      <div
                        ref={setImageRef}
                        className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-1"
                      >
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
