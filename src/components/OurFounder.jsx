import{ useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import founder from "../assets/Founder/Founder.png";

const OurFounder = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const texts = section.querySelectorAll(".animate-founder-text");
    const image = section.querySelector(".animate-founder-img");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset styles before reanimating
          texts.forEach((el) => {
            el.style.opacity = 0;
            el.style.transform = "translateY(30px) skewY(2deg)";
          });
          if (image) {
            image.style.opacity = 0;
            image.style.transform = "scale(0.9) rotate(-3deg)";
          }

          // Entry animation
          anime
            .timeline({ easing: "easeOutExpo", duration: 1000 })
            .add({
              targets: texts,
              opacity: [0, 1],
              translateY: [30, 0],
              skewY: ["2deg", "0deg"],
              delay: anime.stagger(150),
            })
            .add(
              {
                targets: image,
                opacity: [0, 1],
                scale: [0.9, 1],
                rotate: ["-3deg", "0deg"],
                duration: 1200,
                easing: "easeOutElastic(1, .8)",
              },
              "-=800"
            );
        } else {
          // Exit animation (optional: fade out instantly)
          texts.forEach((el) => {
            el.style.opacity = 0;
            el.style.transform = "translateY(30px) skewY(2deg)";
          });
          if (image) {
            image.style.opacity = 0;
            image.style.transform = "scale(0.9) rotate(-3deg)";
          }
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="founder"
      className=" bg-[#1a1a1a] text-white w-full
        xs:w-[80%] xs:m-auto xs:mt-12 min-h-screen
        md:p-4
        xl:min-h-0 xl:p-0"
    >
      <div className="w-full flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 md:pb-10 mt-6">
        <div className="sm:w-1/2">

          <h2 className="animate-founder-text font-avenir text-4xl font-bold mb-6 tracking-wide text-center 
            xs:text-[2.5rem] xs:font-[700] sm:text-left
            md:text-6xl 
            xl:text-[2rem] xl:mb-[0.75rem] "
          >
            Meet the Visionary Behind BonBern
          </h2>

          <p className="animate-founder-text font-playfair text-lg sm:text-xl mb-8 leading-relaxed text-center sm:text-left max-w-xl
            xl:text-[1.125rem] xl:mb-[1.25rem] "
          >
            <strong className="text-3xl xl:text-[1.125rem]" style={{letterSpacing : "0.3rem"}} >
              Aakashraj Ambre <br />
            </strong>
            <br />· Founder · Behavioral Strategist · Perception Architect
          </p>

          <p className="animate-founder-text font-lora text-base mb-4 text-center
            sm:text-lg sm:text-left
            xl:text-[1.125rem] "
          >
            Aakashraj blends over a decade of experience in advertising,
            celebrity marketing, and psychology-driven strategy.
            <br />
            <strong>
              BonBern is his brainchild created to help individuals and brands
              shape how they are seen, heard, and remembered.
            </strong>
          </p>
          <p className="animate-founder-text font-lora text-base sm:text-lg mb-4 text-center sm:text-left">
            From crafting iconic public personas to launching culture-shifting
            campaigns, his approach combines{" "}
            <strong> behavioral science, creative storytelling</strong>, and a
            deep understanding of{" "}
            <strong>Indian culture, tech, and media</strong>.
          </p>
        </div>

        <div className=" xs:w-[73%] md:w-1/2 w-full max-w-[500px] relative mt-10 sm:mt-0">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
            <img
              src={founder}
              alt="blur-bg"
              className="w-full h-full object-cover scale-110 opacity-60 brightness-[1.2] blur-3xl rounded-lg"
            />
          </div>
          <img
            src={founder}
            alt="Founder"
            className="animate-founder-img relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
