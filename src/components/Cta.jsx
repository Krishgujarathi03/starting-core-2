import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import ctaImg from "../assets/cta/cta-section.png";

const Cta = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const textContent = section.querySelectorAll(".animate-cta-text");
    const image = section.querySelector(".animate-cta-img");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset styles for animation replay
          textContent.forEach((el) => {
            el.style.opacity = 0;
            el.style.transform = "rotateY(180deg)";
          });
          image.style.opacity = 0;
          image.style.transform = "rotateY(180deg)";

          anime
            .timeline({ easing: "easeOutBack", duration: 800 })
            .add({
              targets: textContent,
              opacity: [0, 1],
              rotateY: ["180deg", "0deg"],
              delay: anime.stagger(150),
            })
            .add(
              {
                targets: image,
                opacity: [0, 1],
                rotateY: ["180deg", "0deg"],
                duration: 1000,
              },
              "-=600"
            );
        } else {
          textContent.forEach((el) => {
            el.style.opacity = 0;
            el.style.transform = "rotateY(180deg)";
          });
          image.style.opacity = 0;
          image.style.transform = "rotateY(180deg)";
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="get-started"
      className=" bg-[#1a1a1a] text-white w-full
        xs:w-[90%] xs:m-auto xs:mt-12 xs:mb-12
        md:min-h-screen md:p-4
        xl:p-0 xl:mt-16 xl:mb-16  xl:min-h-0 "
    >
      <div className="w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
          {/* Left Column: Image with blur effect */}
          <div className="md:w-1/2 w-full max-w-[500px] relative mt-10 sm:mt-0">
            <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
              <img
                src={ctaImg}
                alt="blur-bg"
                className="w-full h-full object-cover scale-110 opacity-60 brightness-[1.6] blur-3xl rounded-lg"
              />
            </div>

            <img
              src={ctaImg}
              alt="CTA Img"
              className="animate-cta-img relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
            />
          </div>

          {/* Right Column: Content */}
          <div className="sm:w-1/2">
            <h1 className="animate-cta-text text-4xl font-avenir mb-4 leading-tight text-center text-white
              sm:text-5xl md:text-7xl sm:text-left 
              xl:text-[2.5rem] xl:mb-4 ">
              Shape What They See
            </h1>

            <h2 className="animate-cta-text text-lg font-playfairtext-white text-center mb-4
              sm:text-xl sm:text-left 
              xl:text-[2rem] xl:mb-[1.75rem] "
            >
              Let's build something worth remembering.
            </h2>

            <p className="animate-cta-text text-base font-lora text-white leading-relaxed text-justify px-4 
              sm:px-0 mb-6 sm:text-lg 
              xl:text-[1.125rem]  "
            >
              Whether you're building an image, launching a movement, or solving
              a perception problem — we're here to think it through with you.
            </p>

            <button className="animate-cta-text mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 shadow-lg">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
