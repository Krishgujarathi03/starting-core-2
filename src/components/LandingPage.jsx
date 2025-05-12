import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";

import img1 from "../assets/img1.png";

const LandingPage = () => {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimated.current = true;

          anime
            .timeline({
              easing: "easeOutQuart",
              duration: 800,
            })
            .add({
              targets: el.querySelectorAll(".animate-text"),
              translateY: [50, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
            })
            .add(
              {
                targets: el.querySelector(".animate-img"),
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 300,
              },
              "-=400"
            );

          // observer.unobserve(el);
        }
      },
      { root: null, threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="home"
      ref={containerRef}
      className="md:min-h-screen bg-[#1a1a1a] text-white w-full xs:pt-[8rem] xs:w-[90%] xs:m-auto xs:mb- "
    >
      <div className="flex flex-col md:flex-row items-center justify-between md:px-10 md:py-8 w-full">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1
            className="opacity-0 animate-text text-xl font-avenir leading-tight
            xs:text-[1.5rem] xs:leading-[1.3] xs:mb-[1.5rem]
            xl:text-[2rem]  "
          >
            We work with celebrities to build iconic images.
          </h1>
          <h2
            className="
            opacity-0 animate-text text-lg font-playfair
            xs:text-[1.5rem] xs:leading-[1.3] xs:mb-[1.25rem] 
            xl:text-[1.75rem]  "
          >
            We work with labels and brands to craft viral campaigns.
          </h2>
          <p
            className="
            opacity-0 animate-text text-3xl font-lora font-bold
            xs:text-[1rem] xs:leading-[1.5] xs:font-[400] 
            md:text-5xl 
            xl:text-[1.125rem] "
          >
            And in our free time, we solve real-world problems
            <br />
            <span className="text-white">
              because we can, and because we love it.
            </span>
          </p>
        </div>

        {/* Right Column */}
        <div className=" xs:w-[73%] relative w-full max-w-[500px] mt-8 md:mt-0">
          {/* Blurred background image */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
            <img
              src={img1}
              alt="blur-bg"
              className="w-full h-full object-cover scale-110 opacity-60 brightness-110 blur-3xl rounded-lg"
            />
          </div>

          {/* Foreground image */}
          <img
            src={img1}
            alt="HeroImg"
            className="opacity-0 animate-img relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
